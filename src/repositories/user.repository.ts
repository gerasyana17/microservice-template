import { injectable, inject } from "inversify";
import { Guid } from "guid-typescript";
import { UserAR } from "../models/user.model";
import { EVENT_STORE_IDENTIFIER } from "../../shared/service-identifiers";
import { IRepository } from "../../shared/ddd";
import { IEventStore } from "../../shared/cqrs";

@injectable()
export class UserRepository implements IRepository<UserAR>{
	@inject(EVENT_STORE_IDENTIFIER)
	private _eventStore: IEventStore;

	save(aggregate: UserAR): void {
		console.log("saving events");
		this._eventStore.save(aggregate.getUncommittedIEvents());
	}

	getById(id: Guid): UserAR {
        console.log("get aggregate with event history by id");
        const event = this._eventStore.getEventsByAggregateId(id);
		const userAR = new UserAR();
		userAR.loadFromHistory(event);
		return userAR;
	}
}