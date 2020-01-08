import { IEvent } from "../interfaces";

export abstract class AggregateRoot {
    private _id: string;
    private _events: Array<IEvent> = new Array<IEvent>();

    get id(): string {
        return this._id;
    }

    getUncommittedIEvents(): Array<IEvent> {
        return this._events;
    }

    markIEventsAsCommitted(): void {
        this._events = new Array<IEvent>();
    }

    loadsFromHistory(IEvents: Array<IEvent>): void {
        IEvents.forEach((IEvent: IEvent) => this.apply(IEvent, false));
    }

    // push atomic aggregate changes to local history for further processing (IEventStore.SaveIEvents)
    apply(IEvent: IEvent, isNew = true): void {
        // this.AsDynamic().Apply(@IEvent);
        if (isNew) {
            this._events.push(IEvent);
        }
    }
}
