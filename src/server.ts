import "reflect-metadata";
import { config } from "dotenv";
import * as bodyParser from "body-parser";
import App from "../shared/app";
import { router } from "./routes/user.routes";
import { MongoHelper } from "./event-store";

config();
const { PORT, API_PATH, MONGODB_URI } = process.env;

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
            await MongoHelper.connect(MONGODB_URI);
            console.info("Connected to Mongo");
        } catch (err) {
            console.error("Unable to connect to Mongo!", err);
        }
    })
    .catch((err: string) => console.log("Error while trying to initialize server", err));