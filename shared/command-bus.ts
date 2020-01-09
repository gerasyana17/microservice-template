import { injectable, inject } from "inversify";
import { ICommandBus, ICommand, ICommandHandler, ICommandHandlersMapper } from "./cqrs/commands";
import { COMMAND_HANDLER_MAPPER_IDENTIFIER} from "./service-identifiers";
import Injector from "../inversify.config";

@injectable()
export class CommandBus implements ICommandBus {
    private readonly _handlers: Map<ICommand, new () => ICommandHandler<ICommand>>;

    constructor(@inject(COMMAND_HANDLER_MAPPER_IDENTIFIER) mapper: ICommandHandlersMapper) {
        //TODO throw error is mapping is not set
        this._handlers = mapper.handlersByCommandType;
    }

    execute<T extends ICommand>(command: T): void {
        //TODO throw error is handler is not found
        const { constructor } = Object.getPrototypeOf(command);
        const handler = this._handlers.get(constructor);
        const commandHandler: ICommandHandler<ICommand> = Injector.resolve(handler);
        commandHandler.execute(command);
    }
}