import { Container } from "inversify";
import { IEventStore, IRepository } from "./shared/interfaces";
import { EventStore } from "./src/event-store";
import { User } from "./src/models/user.model";
import { CommandBus } from "./shared/services/command-bus";
import { Repository } from "./shared/services/repository";
import { TYPES } from "./shared/types";

const myContainer = new Container();
myContainer.bind<CommandBus>(TYPES.CommandBus).to(CommandBus).inSingletonScope();
myContainer.bind<IEventStore>(TYPES.EventStore).to(EventStore).inSingletonScope();
myContainer.bind<IRepository<User>>(TYPES.Repository).to(Repository).inSingletonScope();

export { myContainer };
