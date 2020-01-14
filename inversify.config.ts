
import { Container } from "inversify";
import { CommandBus } from "./shared/cqrs/";
import { UserRepository } from "./src/repositories/user.repository";
import { IRepository, RepositoryType } from "./shared/ddd";
import { EventStore, RabbitMQEventBus } from "./src/event-store/";

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
Injector.bind<IEventBus>(EVENT_BUS_IDENTIFIER).to(RabbitMQEventBus).inSingletonScope();
Injector.bind<IEventStore>(EVENT_STORE_IDENTIFIER).to(EventStore).inSingletonScope();
Injector.bind<IRepository<RepositoryType>>(REPOSITYPY_IDENTIFIER).to(UserRepository).inSingletonScope();

export default Injector;