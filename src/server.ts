import { config } from "dotenv";
import * as bodyParser from "body-parser";
import App from "../shared/app";
import { router } from "./routes";
import { EventBus } from "../shared/event-bus";
import { UserCreatedEvent } from "./events/user.created";

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

const eventBus = new EventBus();
eventBus.subscribe(UserCreatedEvent.toString());