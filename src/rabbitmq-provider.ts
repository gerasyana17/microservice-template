/* eslint-disable @typescript-eslint/no-unused-vars */
import amqp from "amqplib";
import { config } from "dotenv";

config();
const { RABBITMQ_URI, RABBITMQ_QUEUE } = process.env;

amqp.connect(RABBITMQ_URI, (error: any, connection: any) => {
    console.log(error);
    if (error) {
        throw error;
    }

    connection.createChannel((error1: any, channel: any) => {
        if (error1) {
            throw error1;
		}
		
        const msg = "Hello world";

        channel.assertQueue(RABBITMQ_QUEUE, {
            durable: false
        });

        channel.sendToQueue(RABBITMQ_QUEUE, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });
});