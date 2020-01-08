import { IEventStore, IEvent } from "../shared/interfaces";

export class EventStore implements IEventStore {
	private _events: Array<IEvent>;

	constructor() {
		this._events = new Array<IEvent>();
	}

	save(aggregateId: string, events: Array<IEvent>): void {
		if (!this._events[aggregateId]) {
			this._events[aggregateId] = [];
		}

		events.forEach((event: IEvent) => this._events[aggregateId].push(event));
		//TODO replace with publish
	}

	getEventsByAggregateId(aggregateId: string): Array<IEvent> {
		return this._events[aggregateId];
	}
}

const eventStore = new EventStore();

export {
	eventStore
};