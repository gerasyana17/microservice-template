import { Guid } from "guid-typescript";
import { IEvent } from "../cqrs/";

export abstract class AggregateRoot {
    private _events: Array<IEvent>;
    protected _id: Guid;

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

    apply(IEvent: IEvent, isNew = true): void {
        if (isNew) {
            this._events.push(IEvent);
        }
    }
}