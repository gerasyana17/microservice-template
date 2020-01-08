import { EventEmitter } from "stream";
import { IEventBus, IEvent } from "../interfaces";
import getClassName from "../utils/get-class-name";
//TODO import using DI
import { UserCreatedEventHandler } from "../../src/events";

export class EventBus extends EventEmitter implements IEventBus {
    publish<T extends IEvent>(event: T): void {
        const eventName = getClassName(event);
        this.emit(eventName, event);
    }

    subscribe(eventName: string): void {
        this.on(eventName, (data) => {
            const eventHandler = new UserCreatedEventHandler();
            eventHandler.handle(data);
        });
    }
}