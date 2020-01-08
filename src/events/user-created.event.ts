import { IEventHandler, IEvent } from "../../shared/interfaces";
import { NewUser } from "../dto/new-user";

class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent> {
    handle(event: UserCreatedEvent): void {
        console.log("handling UserCreatedEvent", event);
    }
}

class UserCreatedEvent implements IEvent {
    constructor(public payload: NewUser) { }
}

export {
    UserCreatedEventHandler,
    UserCreatedEvent
};