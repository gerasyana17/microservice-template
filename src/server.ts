import { config } from "dotenv";
import * as bodyParser from 'body-parser';
import App from '../shared/utils/app';
import { router } from './app.routes';

config();
const { PORT } = process.env;

const app = new App({
    port: +PORT,
    routerOptions: {
        path: '/api/user',
        router
    },
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ]
})

app.listen();

import { eventBus} from "../shared/utils/event-bus";
import { UserCreatedEvent } from "./events/impl";

eventBus.subscribe(UserCreatedEvent.toString());