
import { Container } from "inversify";
import { CommandBus } from "./shared/command-bus";
import { EventBus } from "./shared/event-bus";
import { UserRepository } from "./src/repositories/user.repository";
import { AggregateRoot } from "./shared/aggregate-root";
import { handlersByCommandType } from "./src/commands/";
import { handlersByEventType } from "./src/events";
import {
	ICommandBus,
	ICommandHandlersMapper,
	IEventBus,
	IEventHandlersMapper,
	IRepository
} from "./shared/interfaces/";

import {
	COMMAND_HANDLER_MAPPER_IDENTIFIER,
	COMMAND_BUS_IDENTIFIER,
	EVENT_HANDLER_MAPPER_IDENTIFIER,
	EVENT_BUS_IDENTIFIER,
	REPOSITYPY_IDENTIFIER
} from "./shared/service-identifiers";

const Injector = new Container({ autoBindInjectable: true });
Injector.bind<ICommandBus>(COMMAND_BUS_IDENTIFIER).to(CommandBus).inSingletonScope();
Injector.bind<ICommandHandlersMapper>(COMMAND_HANDLER_MAPPER_IDENTIFIER).toConstantValue({
	handlersByCommandType
});

Injector.bind<IEventBus>(EVENT_BUS_IDENTIFIER).to(EventBus).inSingletonScope();
Injector.bind<IEventHandlersMapper>(EVENT_HANDLER_MAPPER_IDENTIFIER).toConstantValue({
	handlersByEventType
});

Injector.bind<IRepository<AggregateRoot>>(REPOSITYPY_IDENTIFIER).to(UserRepository).inSingletonScope();


export default Injector;