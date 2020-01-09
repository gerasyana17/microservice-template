import { IEntity } from "../../shared/interfaces/entity";
import { AggregateRoot } from "../../shared/aggregate-root";
import { UserCreatedEvent } from "../events";

enum UserState {
    Created,
    Activated,
    Disactivated,
    Verified,
}

export interface UserProps {
    firstName: string;
    lastName: string;
    email: string;
    active?: boolean;
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
        this.apply(new UserCreatedEvent(data));
    }
}