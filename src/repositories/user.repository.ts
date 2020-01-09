import { injectable } from "inversify";
import { IRepository } from "../../shared/interfaces/repository";
import { IEventStore} from "../../shared/interfaces/events";
import { EventStore } from "../event-store";
import { UserAR } from "../models/user.model";

@injectable()
export class UserRepository implements IRepository<UserAR>{
	private _eventStore: IEventStore = new EventStore();

	save(aggregate: UserAR): void {
		console.log("saving events");
		this._eventStore.save(aggregate.id.toString(), aggregate.getUncommittedIEvents());
	}

	getById(id: string): UserAR {
        console.log("get aggregate with event history by id");
        const event = this._eventStore.getEventsByAggregateId(id);
		const userAR = new UserAR();
		userAR.loadFromHistory(event);
		return userAR;
	}
}