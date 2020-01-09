import { ICommand, ICommandHandler } from "../../shared/cqrs/commands";
import { CreateUserCommand, CreateUserCommandHandler } from "./create-user";

const handlersByCommandType = new Map<ICommand, new () => ICommandHandler<ICommand>>();
handlersByCommandType.set(CreateUserCommand, CreateUserCommandHandler);

export { CreateUserCommand, CreateUserCommandHandler } from "./create-user";
export { handlersByCommandType };
