import "reflect-metadata";
import { config } from "dotenv";
import * as bodyParser from "body-parser";
import App from "../shared/app";
import { router } from "./routes/user.routes";
import { EventBus } from "../shared/event-bus";
import { UserCreatedEvent } from "./events/user-created";
import Injector from "../inversify.config";

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

const eventBus = Injector.resolve(EventBus);
eventBus.subscribe(UserCreatedEvent.name); //TODO : new type EventType