
import { injectable } from "inversify";
import { ICommandBus, ICommand, ICommandHandler } from "../interfaces";
import { handlers } from "../../src/commands/index";

@injectable()
export class CommandBus implements ICommandBus {
    execute<T extends ICommand>(command: T): void {
        const { constructor } = Object.getPrototypeOf(command);
        const commandHandler = handlers.get(constructor);
        commandHandler.execute(command);
    }
}