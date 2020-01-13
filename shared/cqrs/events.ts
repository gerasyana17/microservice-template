import { Guid } from "guid-typescript";
import { IEvent } from "./event";

export interface IEventHandler<T extends IEvent> {
    handle(event: T): void;
}

export interface IEventBus {
    publish(event: IEvent): void;
    subscribe(event: string): void;
}

export interface IEventStore {
    save(events: Array<IEvent>): void;
    getEventsByAggregateId(id: Guid): Array<IEvent>;
}