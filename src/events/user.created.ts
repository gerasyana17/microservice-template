import { IEventHandler, IEvent } from "../../shared/cqrs/events";
import { User } from "../domain/user.entity";

class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent> {
    handle(event: UserCreatedEvent): void {
        console.log("handling UserCreatedEvent", event);
    }
}

class UserCreatedEvent implements IEvent {
    constructor(public payload: User) { }
}

export {
    UserCreatedEventHandler,
    UserCreatedEvent
};