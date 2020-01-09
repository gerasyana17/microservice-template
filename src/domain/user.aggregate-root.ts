import { AggregateRoot } from "../../shared/ddd/aggregate-root";
import { Guid } from "guid-typescript";
import { User } from "./user.entity";
import { UserCreatedEvent } from "../events/user.created";

enum UserState {
    Created,
    Activated,
    Disactivated,
    Verified,
}

export class UserAR extends AggregateRoot {
    private _state: UserState;
    
    constructor(id?: Guid) {
        super(id);
        this._state = UserState.Created;
    }

    create(data: User): void {
        this.apply(new UserCreatedEvent(data));
    }
}