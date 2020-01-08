import { UserCreatedEvent } from "../events";
import { AggregateRoot } from "../../shared/services/aggregate-root";
import { NewUser } from "../dto/new-user";
import { EventBus } from "../../shared/services/event-bus";

enum UserState {
    Created,
    Activated,
    Disactivated,
    Verified,
}

export class User extends AggregateRoot {
    private _state: UserState;

    create(data: NewUser): void {
        this._state = UserState.Created;
        this.apply(new UserCreatedEvent(data));
        //TODO move to eventBus into event-store
        const eventBus = new EventBus();
        eventBus.publish(new UserCreatedEvent(data));
    }
}