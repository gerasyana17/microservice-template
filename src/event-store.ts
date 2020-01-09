import { IEventStore, IEvent } from "../shared/cqrs/events";

export class EventStore implements IEventStore {
	private _events: Map<string, Array<IEvent>>;

	constructor() {
		this._events = new Map<string, Array<IEvent>>();
	}

	save(aggregateId: string, events: Array<IEvent>): void {	
		let aggregateEvents = this._events.get(aggregateId);

		if (!aggregateEvents) {
			aggregateEvents = new Array<IEvent>();;
		}

		events.forEach((event: IEvent) => aggregateEvents.push(event));
		this._events.set(aggregateId, aggregateEvents);
		console.log("publishing in progress");
		//TODO remove local stprage after real event bus
		//const eventBus = new EventBus();
		// eventBus.publish(new UserCreatedEvent(data));
	}

	getEventsByAggregateId(aggregateId: string): Array<IEvent> {
		return this._events.get(aggregateId);
	}
}