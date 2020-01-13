import { AggregateRoot } from "../../shared/ddd/aggregate-root";
import { UserCreatedEvent } from "../events";
import { IEntity } from "../../shared/ddd";

enum UserState {
    Created,
    Activated,
    Disactivated,
    Verified,
}

export class User implements IEntity {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public active?: boolean) {
    }
}

export class UserAR extends AggregateRoot {
    private _state: UserState;

    constructor() {
        super();
        this._state = UserState.Created;
    }

    create(data: User): void {
        this.apply(new UserCreatedEvent(this._id, data));
    }
}