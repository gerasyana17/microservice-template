import { IEvent } from "../../../shared/interfaces";

export class UserCreatedEvent implements IEvent {
    type: string;
    payload: any;

    constructor(payload) {
        this.payload = payload;
    }
}