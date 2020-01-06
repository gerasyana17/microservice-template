import { UserCreatedEvent } from "../impl";
import { IEventHandler } from "../../../shared/interfaces";

export class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent> {
    handle(event: UserCreatedEvent) {
        console.log('handling UserCreatedEvent', event);
    }
}