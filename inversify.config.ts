
import { Container } from "inversify";

import { CommandBus } from "./shared/command-bus";
import { EventBus } from "./shared/event-bus";
import { ICommandBus, ICommandHandlersMapper } from "./shared/cqrs/commands";
import { IEventBus, IEventHandlersMapper } from "./shared/cqrs/events";
import { UserRepository } from "./src/repositories/user.repository";
import { Repository } from "./shared/ddd/repository";
import { AggregateRoot } from "./shared/ddd/aggregate-root";

import { handlersByCommandType } from "./src/commands/";
import { handlersByEventType } from "./src/events";

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

Injector.bind<Repository<AggregateRoot>>(REPOSITYPY_IDENTIFIER).to(UserRepository).inSingletonScope();


export default Injector;