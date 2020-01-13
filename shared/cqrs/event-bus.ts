/* eslint-disable @typescript-eslint/no-empty-function */
import { injectable } from "inversify";
import { IEventBus } from "./events";
import { IEvent } from "./event";
import getClassName from "../utils/get-class-name";

@injectable()
export class EventBus implements IEventBus {
    publish(event: IEvent): void {
        const eventName = getClassName(event);
        console.log(event);
        //this.emit(eventName, event);
    }

    subscribe(event: string): void {}
}