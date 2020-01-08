import "reflect-metadata";
import { config } from "dotenv";

import * as bodyParser from "body-parser";
import App from "../shared/utils/app";
import { router } from "./app.routes";
import { UserCreatedEvent } from "./events";
import { TYPES } from "../shared/types";
import { IEventBus } from "../shared/interfaces";
import { EventBus } from "../shared/services/event-bus";
import { CreateUserCommandHandler, CreateUserCommand } from "./commands";
import { myContainer } from "../inversify.config";

config();
const { PORT, API_PATH } = process.env;

const app = new App({
    port: +PORT,
    routerOptions: {
        path: API_PATH,
        router
    },
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ]
});

app.listen();

/*
const eventBus = new EventBus();
eventBus.subscribe(UserCreatedEvent.toString());*/