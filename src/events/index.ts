import { IEvent, IEventHandler } from "../../shared/interfaces/events";
import { UserCreatedEventHandler, UserCreatedEvent } from "./user-created";

const handlersByEventType = new Map<string, new () => IEventHandler<IEvent>>();
handlersByEventType.set(UserCreatedEvent.name, UserCreatedEventHandler);

export { UserCreatedEventHandler, UserCreatedEvent } from "./user-created";
export { handlersByEventType };