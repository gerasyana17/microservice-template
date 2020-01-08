import { inject, injectable } from "inversify";
import { AggregateRoot } from "./aggregate-root";
import { IRepository, IEventStore } from "../interfaces";
import { TYPES } from "../types";

@injectable()
export class Repository<T extends AggregateRoot> implements IRepository<T>  {
	@inject(TYPES.EventStore) 
	private readonly _eventStore: IEventStore;

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