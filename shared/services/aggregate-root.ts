import { IEvent } from "../interfaces";

export abstract class AggregateRoot {
    private _id: string;
    private _events: Array<IEvent> = new Array<IEvent>();

    get id(): string {
        return this._id;
    }

    getUncommittedEvents(): Array<IEvent> {
        return this._events;
    }

    markEventsAsCommitted() {
        this._events = new Array<IEvent>();
    }

    loadsFromHistory(events: Array<IEvent>) {
        events.forEach((event: IEvent) => this.apply(event, false));
    }

    // push atomic aggregate changes to local history for further processing (EventStore.SaveEvents)
    apply(event: IEvent, isNew: boolean = true) {
        // this.AsDynamic().Apply(@event);
        if (isNew) {
            this._events.push(event);
        }
    }
}
