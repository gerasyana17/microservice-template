import { Guid } from "guid-typescript";
import { IEvent } from "../cqrs/";
import { IAggregate } from "./";

export abstract class AggregateRoot<T extends IAggregate> {
    private _events: Array<IEvent>;
    protected _id: Guid;
    protected _state: T;

    constructor(id?: Guid) {
        this._events = new Array<IEvent>();
        this._id = id ? id : Guid.create();
    }

    getUncommittedIEvents(): Array<IEvent> {
        return this._events;
    }

    markIEventsAsCommitted(): void {
        this._events = new Array<IEvent>();
    }

    loadFromHistory(IEvents: Array<IEvent>): void {
        IEvents.forEach((IEvent: IEvent) => this.apply(IEvent, false));
    }

    apply(event: IEvent, isNew = true): void {
        this._setState(event.payload);
        isNew && this._events.push(event);
    }

    private _setState<T extends IAggregate>(state: T): void {
        this._state = {
            ...this._state,
            ...state
        };
    }
}