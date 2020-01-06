
import { EventEmitter } from "stream";
import { IEventBus, IEvent } from "../interfaces";
import { UserCreatedEventHandler } from '../../src/events/handlers';
import getClassName from "./get-class-name";

class EventBus extends EventEmitter implements IEventBus {
    private _history = [{}]; //TODO: Event store

    publish<T extends IEvent>(event: T): void | Promise<any> {
        const eventName = getClassName(event);
        this._history.push(event);
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