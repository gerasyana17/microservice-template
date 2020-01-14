import { injectable } from "inversify";
import { Guid } from "guid-typescript";
import { IEvent, IEventHandler } from "../../shared/cqrs";
import { User } from "../models/user.model";

@injectable()
class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent> {
    handle(event: UserCreatedEvent): void {
        console.log("handling UserCreatedEvent", event);
    }
}

class UserCreatedEvent extends IEvent {
    constructor(public readonly id: Guid, payload: User) {
        super(id, payload);
        this.type = "UserCreated";
    }
}

export {
    UserCreatedEventHandler,
    UserCreatedEvent
};