import { ICommand , ICommandHandler} from "../../shared/interfaces/";

//TODO : load handlers and commands dynamically 
import {
    CreateUserCommandHandler
} from './handlers/create-user.handler';

import {
    CreateUserCommand
}
    from './impl';

//TODO map handler when app is initialed
//TODO inject into commandbus/eventbus/querybus using DI
const handlers = new Map<ICommand, ICommandHandler<ICommand>>();
handlers.set(CreateUserCommand, new CreateUserCommandHandler());

export {
    handlers
}