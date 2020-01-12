
import { Container } from "inversify";
import { CommandBus } from "./shared/command-bus";
import { EventBus } from "./shared/event-bus";
import { UserRepository } from "./src/repositories/user.repository";
import { AggregateRoot } from "./shared/aggregate-root";

import {
	ICommandBus,
	IEventBus,
	IRepository
} from "./shared/interfaces/";

import {
	COMMAND_BUS_IDENTIFIER,
	EVENT_BUS_IDENTIFIER,
	REPOSITYPY_IDENTIFIER
} from "./shared/service-identifiers";

const Injector = new Container({ autoBindInjectable: true });
Injector.bind<ICommandBus>(COMMAND_BUS_IDENTIFIER).to(CommandBus).inSingletonScope();
Injector.bind<IEventBus>(EVENT_BUS_IDENTIFIER).to(EventBus).inSingletonScope();
Injector.bind<IRepository<AggregateRoot>>(REPOSITYPY_IDENTIFIER).to(UserRepository).inSingletonScope();

export default Injector;