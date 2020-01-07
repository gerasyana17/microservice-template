export interface IEvent { }

export interface IEventHandler<T extends IEvent> {
    handle(event: T);
}

export interface IEventBus {
    publish<T extends IEvent>(event: T): Promise<any> | void;
    subscribe(eventName: string): Promise<any> | void;
}

export interface IEventStore {
    save(aggregateId: string, events: Array<IEvent>);
    getEventsByAggregateId(aggregateId: string);
}