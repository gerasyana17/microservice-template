import { injectable } from "inversify";
import { ICommandBus, ICommand, ICommandHandler } from "./interfaces/commands";
import { COMMAND_HANDLER_METADATA_KEY } from "./constants/metadata-keys";
import Injector from "../inversify.config";

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