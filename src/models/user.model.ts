import { AggregateRoot } from "../../shared/ddd/aggregate-root";
import { UserCreatedEvent } from "../events";
import { IEntity } from "../../shared/ddd";
import { Guid } from "guid-typescript";

export class User implements IEntity {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public active?: boolean) {
    }
}

export class UserAR extends AggregateRoot {

    constructor(id?: Guid) {
        super(id);
    }

    create(data: User): void {
        this.apply(new UserCreatedEvent(Guid.create(), data));
    }
}