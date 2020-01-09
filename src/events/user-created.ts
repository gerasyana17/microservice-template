import { injectable } from "inversify";
import { IEventHandler, IEvent } from "../../shared/interfaces/events";
import { User } from "../models/user.model";

@injectable()
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