import {  injectable } from "inversify";
import { MongoClient, MongoError } from "mongodb";
import { IEventStore, IEvent } from "../shared/interfaces/events";

@injectable()
class MongoHelper {
	public static client: MongoClient;

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
					console.log('r');
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

class EventStore implements IEventStore {
	private _events: Map<string, Array<IEvent>>;

	save(aggregateId: string, events: Array<IEvent>): void {
		console.log("saving in mongodb");
		/*const aggregateEvents = this._events.get(aggregateId);
		
		if (!aggregateEvents) {
			return;
		}*/

		console.log(MongoHelper.client);
		MongoHelper.client.db("eventbus_example").collection("test").insert({ test : "eee"}, (err) => {
			console.log(err);
		});

		/*
		events.forEach((event: IEvent) => aggregateEvents.push(event));
		this._events.set(aggregateId, aggregateEvents); */

		console.log("TODO: publishing in rabbitmq");
		//TODO remove local stprage after real event bus
		//const eventBus = new EventBus();
		// eventBus.publish(new UserCreatedEvent(data));
	}

	getEventsByAggregateId(aggregateId: string): Array<IEvent> {
		return this._events.get(aggregateId);
	}
}

export {
	MongoHelper,
	EventStore
};