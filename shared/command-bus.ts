import { ICommandBus, ICommand, ICommandHandler } from "./cqrs/commands";
import { CreateUserCommand, CreateUserCommandHandler } from "../src/commands/create-user";

const handlers = new Map<ICommand, ICommandHandler<ICommand>>();
handlers.set(CreateUserCommand, new CreateUserCommandHandler());

export class CommandBus implements ICommandBus {
    execute<T extends ICommand>(command: T): void {
        const { constructor } = Object.getPrototypeOf(command);
        const commandHandler: ICommandHandler<ICommand> = handlers.get(constructor);
        commandHandler.execute(command);
    }
}