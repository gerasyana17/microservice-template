import { IRepository } from "../interfaces/repository.interface";
import { AggregateRoot } from "./aggregate-root";
import { IEventStore } from "../interfaces";

export class Repository<T extends AggregateRoot> implements IRepository<T>  {

	constructor(private readonly _eventStore: IEventStore) { }

	save(aggregate: T): void {
		console.log("saving events");
		this._eventStore.save(aggregate.id, aggregate.getUncommittedIEvents());
	}

	getById(id: string): T {
		//TODO : T instead of AggregateRoot
		const obj = Object.create(AggregateRoot.prototype);
		const event = this._eventStore.getEventsByAggregateId(id);
		obj.loadFromHistory(event);
		return obj;
	}
}