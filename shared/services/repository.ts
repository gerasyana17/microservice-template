import { IRepository } from "../interfaces/repository.interface";
import { AggregateRoot } from "./aggregate-root";
import { IEventStore } from "../interfaces";

export class Repository<T extends AggregateRoot> implements IRepository<T>  {

	constructor(private readonly _eventStore: IEventStore) { }

	save(aggregate: T) {
		const { id, getUncommittedEvents } = aggregate;
		console.log('saving events')
		this._eventStore.save(id, getUncommittedEvents());
	}

	getById(id: string): T {
		//TODO : T instead of AggregateRoot
		const obj = Object.create(AggregateRoot.prototype);
		var event = this._eventStore.getEventsByAggregateId(id);
		obj.loadFromHistory(event);
		return obj;
	}
}