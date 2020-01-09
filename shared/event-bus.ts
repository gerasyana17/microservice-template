import { injectable } from "inversify";

import { EventEmitter } from "stream";
import { IEventBus, IEvent, IEventHandler } from "./cqrs/events";
import { UserCreatedEventHandler, UserCreatedEvent } from "../src/events/user.created";
import getClassName from "./utils/get-class-name";

const handlers = new Map<IEvent, IEventHandler<IEvent>>();
handlers.set(UserCreatedEvent, new UserCreatedEventHandler());

@injectable()
export class EventBus extends EventEmitter implements IEventBus {
    publish<T extends IEvent>(event: T): void {
        const eventName = getClassName(event);
        this.emit(eventName, event);
    }

    subscribe(eventName: string): void {
        this.on(eventName, (data) => {
            console.log(eventName);
            const eventHandler: IEventHandler<IEvent> = handlers.get(eventName);
            eventHandler.handle(data);
        });
    }
}