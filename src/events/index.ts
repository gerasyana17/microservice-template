import { IEvent, IEventHandler } from "../../shared/interfaces";

import {
    UserCreatedEventHandler,
    UserCreatedEvent
} from "./user-created.event";

const handlers = new Map<IEvent, IEventHandler<IEvent>>();
handlers.set(UserCreatedEvent, new UserCreatedEventHandler());

export {
    handlers
};