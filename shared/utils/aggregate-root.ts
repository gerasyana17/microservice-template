import { IEvent } from "../interfaces";
import { eventBus } from "./event-bus";
import getClassName from "./get-class-name";

export class AggregateRoot {

    apply(event: IEvent) {
        eventBus.publish(event);
    }
}
