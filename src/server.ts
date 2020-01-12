import "reflect-metadata";
import { config } from "dotenv";
import * as bodyParser from "body-parser";
import App from "../shared/app";
import { router } from "./routes/user.routes";
import { EventBus } from "../shared/event-bus";
import { UserCreatedEvent } from "./events/user-created";
import Injector from "../inversify.config";
import { MongoHelper } from "./event-store";

config();
const {
    PORT,
    API_PATH,
    MONGODB_URI
} = process.env;

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

app.listen()
    .then(async () => {
        try {
            const d = await MongoHelper.connect(MONGODB_URI);
            console.log(d);
            console.info("Connected to Mongo!");
        } catch (err) {
            console.error("Unable to connect to Mongo!", err);
        }
    })
    .catch((err: string) => console.log("Error while trying to initialize server", err));

const eventBus = Injector.resolve(EventBus);
eventBus.subscribe(UserCreatedEvent.name); //TODO : new type EventType