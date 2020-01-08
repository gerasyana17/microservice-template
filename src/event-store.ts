import { injectable } from "inversify";
import { IEventStore, IEvent } from "../shared/interfaces";

@injectable()
export class EventStore implements IEventStore {
	private _events: Map<string,Array<IEvent>>;

	constructor() {
		this._events = new Map<string,Array<IEvent>>();
	}

	save(aggregateId: string, events: Array<IEvent>): void {
		const aggregateEvents = [] = this._events.get(aggregateId);
		events.forEach((event: IEvent) => aggregateEvents.push(event));
		//TODO replace with publish
		this._events.set(aggregateId, aggregateEvents);
	}

	getEventsByAggregateId(aggregateId: string): Array<IEvent> {
		return this._events.get(aggregateId);
	}
}
