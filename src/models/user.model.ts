import { UserCreatedEvent } from "../events";
import { AggregateRoot } from "../../shared/services/aggregate-root";
import { NewUser } from "../dto/new-user";
import { eventBus } from "../../shared/services/event-bus";

enum UserState {
    Created,
    Activated,
    Disactivated,
    Verified,
}

export class User extends AggregateRoot {
    private _state: UserState;

    create(data: NewUser) {
        this._state = UserState.Created;
        this.apply(new UserCreatedEvent(data));
        //TODO move to eventBus into event-store
        eventBus.publish(new UserCreatedEvent(data));
    }
}