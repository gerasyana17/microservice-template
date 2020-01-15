import { Guid } from "guid-typescript";
import { UserCreatedEvent } from "../events";
import { IAggregate, AggregateRoot } from "../../shared/ddd";

export class User implements IAggregate {
    public firstName: string;
    public lastName: string;
    public email: string;
    public active?: boolean;
}

export class UserAR extends AggregateRoot<User> {
    constructor(id?: Guid) {
        super(id);
    }

    create(data: User): void {
        const event = new UserCreatedEvent(this._id, {
            ...data,
            active: false
        });
        this.apply(event);
    }
}