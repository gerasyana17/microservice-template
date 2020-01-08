import { ICommand , ICommandHandler} from "../../shared/interfaces/";

import {
    CreateUserCommandHandler,
    CreateUserCommand
} from "./create-user.command";

//TODO map handler when app is initialed
//TODO inject into commandbus/eventbus/querybus using DI
const handlers = new Map<ICommand, ICommandHandler<ICommand>>();
handlers.set(CreateUserCommand, Object.getPrototypeOf(CreateUserCommandHandler));

export {
    handlers,
    CreateUserCommandHandler,
    CreateUserCommand
};