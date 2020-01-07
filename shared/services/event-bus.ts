
import { EventEmitter } from "stream";
import { IEventBus, IEvent } from "../interfaces";
import getClassName from "../utils/get-class-name";
import { UserCreatedEventHandler } from "../../src/events";

class EventBus extends EventEmitter implements IEventBus {
    
    publish<T extends IEvent>(event: T): void | Promise<any> {
        const eventName = getClassName(event);
        this.emit(eventName, event);
    }

    subscribe(eventName: string): void | Promise<any> {
        this.on(eventName, (data) => {
            const eventHandler = new UserCreatedEventHandler();
            eventHandler.handle(data);
        })
    }
}

const eventBus = new EventBus();

export {
    eventBus
}