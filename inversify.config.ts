
import { Container } from "inversify";
import { CommandBus } from "./shared/cqrs/command-bus";
import { EventBus } from "./shared/cqrs/event-bus";
import { UserRepository } from "./src/repositories/user.repository";
import { AggregateRoot, IRepository } from "./shared/ddd";
import { EventStore } from "./src/event-store";

import {
	ICommandBus,
	IEventBus,
	IEventStore
} from "./shared/cqrs";

import {
	COMMAND_BUS_IDENTIFIER,
	EVENT_BUS_IDENTIFIER,
	REPOSITYPY_IDENTIFIER,
	EVENT_STORE_IDENTIFIER
} from "./shared/service-identifiers";

const Injector = new Container({ autoBindInjectable: true });
Injector.bind<ICommandBus>(COMMAND_BUS_IDENTIFIER).to(CommandBus).inSingletonScope();
Injector.bind<IEventBus>(EVENT_BUS_IDENTIFIER).to(EventBus).inSingletonScope();
Injector.bind<IEventStore>(EVENT_STORE_IDENTIFIER).to(EventStore).inSingletonScope();
Injector.bind<IRepository<AggregateRoot>>(REPOSITYPY_IDENTIFIER).to(UserRepository).inSingletonScope();

export default Injector;