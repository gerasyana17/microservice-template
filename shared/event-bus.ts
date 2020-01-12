/* eslint-disable @typescript-eslint/no-empty-function */
import { injectable } from "inversify";
import { IEventBus, IEvent, IEventHandler } from "./interfaces/events";
import getClassName from "./utils/get-class-name";

@injectable()
export class EventBus implements IEventBus {
    publish<T extends IEvent>(event: T): void {
        const eventName = getClassName(event);
        //this.emit(eventName, event);
    }

    subscribe(event: string): void {}
}