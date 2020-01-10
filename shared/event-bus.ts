import { injectable, inject } from "inversify";
import { IEventBus, IEvent, IEventHandler, IEventHandlersMapper } from "./interfaces/events";
import { EVENT_HANDLER_MAPPER_IDENTIFIER } from "./service-identifiers";
import getClassName from "./utils/get-class-name";

@injectable()
export class EventBus implements IEventBus {
    private readonly _handlers: Map<string, new () => IEventHandler<IEvent>>;

    constructor(@inject(EVENT_HANDLER_MAPPER_IDENTIFIER) mapper: IEventHandlersMapper) {
        //TODO throw error is mapping is not set
        this._handlers = mapper.handlersByEventType;
    }

    publish<T extends IEvent>(event: T): void {
        const eventName = getClassName(event);
        //this.emit(eventName, event);
    }

    subscribe(event: string): void {
         //TODO throw error is handler is not found
        const handler = this._handlers.get(event);

        //TODO inject EvemntStore
        /*this.on(event, (data) => {
             const eventHandler: IEventHandler<IEvent> = _handlers.get(eventName);
             eventHandler.handle(data);
        });*/
    }
}