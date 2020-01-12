export interface IEvent { }

export interface IEventHandler<T extends IEvent> {
    handle(event: T): void;
}

export interface IEventBus {
    publish<T extends Event>(event: T): void;
    subscribe(event: string): void;
}

export interface IEventStore {
    save(aggregateId: string, events: Array<IEvent>): void;
    getEventsByAggregateId(aggregateId: string): Array<IEvent>;
}