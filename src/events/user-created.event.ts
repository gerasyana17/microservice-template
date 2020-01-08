import { IEventHandler, IEvent } from "../../shared/interfaces";
import { NewUser } from "../dto/new-user";

class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent> {
    handle(event: UserCreatedEvent): void {
        console.log("handling UserCreatedEvent", event);
    }
}

class UserCreatedEvent implements IEvent {
    payload: NewUser;

    constructor(payload) {
        this.payload = payload;
    }
}

export {
    UserCreatedEventHandler,
    UserCreatedEvent
};