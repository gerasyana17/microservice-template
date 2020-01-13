import { injectable } from "inversify";
import Injector from "../../inversify.config";
import { ICommandBus, ICommand, ICommandHandler } from "./commands";
import { COMMAND_HANDLER_METADATA_KEY } from "../constants/metadata-keys";

@injectable()
export class CommandBus implements ICommandBus {
    execute<T extends ICommand>(command: T): void {
        //TODO throw error is handler is not found
        const { constructor } = Object.getPrototypeOf(command);
        const handler = Reflect.getMetadata(COMMAND_HANDLER_METADATA_KEY, constructor);
        const commandHandler: ICommandHandler<ICommand> = Injector.resolve(handler);
        commandHandler.execute(command);
    }
}