import { injectable } from "inversify";
import { Repository } from "../../shared/ddd/repository";
import { IEventStore} from "../../shared/cqrs/events";
import { UserAR } from "../domain/user.aggregate-root";
import { EventStore } from "../event-store";

@injectable()
export class UserRepository implements Repository<UserAR>{
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