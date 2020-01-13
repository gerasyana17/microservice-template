import { injectable } from "inversify";
import { Guid } from "guid-typescript";
import { MongoClient, MongoError, Db } from "mongodb";
import { IEventStore } from "../shared/cqrs/events";
import { IEvent } from "../shared/cqrs/event";

@injectable()
class MongoHelper {
	private static client: MongoClient;

	static get db(): Db {
		return MongoHelper.client.db("eventbus_example") ;
	}

	static connect(url: string): Promise<MongoClient> {
		if (MongoHelper.client) {
			return Promise.resolve(MongoHelper.client);
		}

		return new Promise<MongoClient>((resolve, reject) => {
			MongoClient.connect(url,
				{
					useNewUrlParser: true,
					useUnifiedTopology: true
				}, (err: MongoError, client: MongoClient) => {
					if (err) {
						reject(err);
					} else {
						MongoHelper.client = client;
						resolve(client);
					}
				});
		});
	}

	static disconnect(): void {
		if (!MongoHelper.client) {
			MongoHelper.client.close();
		}
	}
}

@injectable()
class EventStore implements IEventStore {
	private db: Db;

	constructor() {
		this.db = MongoHelper.db;
	}

	save(events: Array<IEvent>): void {
		console.log("saving in mongodb");
		this.db.collection("test").insertMany(events, (err) => {
			console.log(err);
		});

		//TODO remove local stprage after real event bus
		//const eventBus = new EventBus();
		// eventBus.publish(new UserCreatedEvent(data));
	}

	getEventsByAggregateId(_id: Guid): Array<IEvent> {
		return null;
		//TODO
		//return this.db.collection("test").find({ _id }).toArray();
	}
}

export {
	MongoHelper,
	EventStore
};