import { Connection, Message, Exchange, Queue } from "amqp-ts";
import { config } from "dotenv";
import { injectable } from "inversify";
import { IEventBus, IEvent } from "../../shared/cqrs";

config();
const {
    RABBITMQ_URI,
    RABBITMQ_QUEUE,
    RABBITMQ_EXCHANGE_TYPE,
    RABBITMQ_EXCHANGE_NAME
} = process.env;

@injectable()
export class RabbitMQEventBus implements IEventBus {
    private _connection: Connection;
    private _exchange: Exchange;
    private _queue: Queue;

    constructor() {
        this._connect();
    }

    private _connect(): void {
        if (!this._connection || !this._connection.isConnected) {
            this._connection = new Connection(RABBITMQ_URI);
            this._exchange = this._connection.declareExchange(RABBITMQ_EXCHANGE_NAME, RABBITMQ_EXCHANGE_TYPE, { durable: true });
            this._queue = this._connection.declareQueue(RABBITMQ_QUEUE);
            this._queue.bind(this._exchange);
            console.log("Success");
        }
    }

    publish(events: Array<IEvent>): void {
        if (!this._exchange) {
            throw Error(`${RABBITMQ_EXCHANGE_TYPE} exchange not declared`);
        }

        events.forEach((event: IEvent) => this._exchange.send(new Message(JSON.stringify(event))));
    }

    subscribe(event: string): void {
        if (!this._queue) {
            throw Error(`${RABBITMQ_QUEUE} not not declared`);
        }

        this._queue.activateConsumer((message) => {
            console.log("Message received: " + message.getContent());
        }, {
            noAck: true
        });
    }
}