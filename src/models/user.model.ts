import { UserCreatedEvent } from "../events/impl";
import { AggregateRoot } from "../../shared/utils/aggregate-root";
import { eventBus } from "../../shared/utils/event-bus";
import { UserCreatedEventHandler } from "../events/handlers";

export class User extends AggregateRoot {
    _id: string; 
    
    create(data) {
        //TODO: reiew aggregate root/aggregate 
       
        eventBus.publish(new UserCreatedEvent(data));

        //apply(process) event from AggregateRoot base class (publish to event)
        //this.apply(new UserCreatedEvent(data));
    }
}