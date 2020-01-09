import Injector from "../inversify.config";
import { injectable } from "inversify";
import { ICommandBus, ICommand, ICommandHandler } from "./cqrs/commands";
import { CreateUserCommand, CreateUserCommandHandler } from "../src/commands/create-user";

//TOTO store classes in map
//const handlers = new Map<string, new () => )>();
//handlers.set("CreateUserCommand", CreateUserCommandHandler.name);

@injectable()
export class CommandBus implements ICommandBus {
    execute<T extends ICommand>(command: T): void {
        //const { constructor } = Object.getPrototypeOf(command);
        const commandHandler: ICommandHandler<ICommand> = Injector.resolve(CreateUserCommandHandler);
        commandHandler.execute(command);
    }
}