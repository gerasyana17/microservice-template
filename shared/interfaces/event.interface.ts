export interface IEvent {
    type: string;
    payload: {}
}

export interface IEventHandler<T extends IEvent = any> {
    handle(event: T);
}

export interface IEventBus {
    publish<T extends IEvent>(event: T): Promise<any> | void;
    subscribe(eventName: string): Promise<any> | void;
}