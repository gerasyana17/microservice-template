import { injectable } from "inversify";
import { Guid } from "guid-typescript";
import { IEventHandler } from "../../shared/cqrs/events";
import { User } from "../models/user.model";
import { IEvent } from "../../shared/cqrs/event";

@injectable()
class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent> {
    handle(event: UserCreatedEvent): void {
        console.log("handling UserCreatedEvent", event);
    }
}

class UserCreatedEvent extends IEvent {
    constructor(id: Guid, payload: User) {
        super(id, payload);
        this.type = "UserCreated";
    }
}

export {
    UserCreatedEventHandler,
    UserCreatedEvent
};