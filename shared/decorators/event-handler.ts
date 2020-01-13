import "reflect-metadata";
import { EVENT_HANDLER_METADATA_KEY } from "../constants/metadata-keys";
import { IEventHandler, IEvent } from "../cqrs";

export const EventHandler = (handler: new () => IEventHandler<IEvent>): ClassDecorator => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    return (target: object) => (Reflect.defineMetadata(EVENT_HANDLER_METADATA_KEY, handler, target));
};