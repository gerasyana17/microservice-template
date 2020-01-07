import { IEventHandler, IEvent } from "../../shared/interfaces";

class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent> {
    handle(event: UserCreatedEvent) {
        console.log('handling UserCreatedEvent', event);
    }
}

class UserCreatedEvent implements IEvent {
    payload: any;

    constructor(payload) {
        this.payload = payload;
    }
}

export {
    UserCreatedEventHandler,
    UserCreatedEvent
}