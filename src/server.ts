import { config } from "dotenv";
import * as bodyParser from "body-parser";
import App from "../shared/utils/app";
import { router } from "./app.routes";
import { eventBus } from "../shared/services/event-bus";
import { UserCreatedEvent } from "./events";

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

eventBus.subscribe(UserCreatedEvent.toString());