 
import { Container } from "inversify";

import { CommandBus } from "./shared/command-bus";
import { EventBus } from "./shared/event-bus";
import { ICommandBus } from "./shared/cqrs/commands";
import { IEventBus } from "./shared/cqrs/events";
import { UserRepository } from "./src/repositories/user.repository";
import { Repository } from "./shared/ddd/repository";
import { AggregateRoot } from "./shared/ddd/aggregate-root";

console.log("bindind dependencies");

const Injector = new Container();
Injector.bind<ICommandBus>(Symbol.for("ICommandBus")).to(CommandBus);
Injector.bind<IEventBus>(Symbol.for("IEventBus")).to(EventBus);
Injector.bind<Repository<AggregateRoot>>(Symbol.for("Repository")).to(UserRepository);

export default Injector;