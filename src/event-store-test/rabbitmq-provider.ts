/* eslint-disable @typescript-eslint/no-unused-vars */
import amqp from "amqplib/callback_api";
import { config } from "dotenv";

config();
const { RABBITMQ_URI, RABBITMQ_QUEUE } = process.env;

amqp.connect(RABBITMQ_URI, function (error: any, connection: any) {
    if (error) {
        throw error;
    }

    connection.createChannel(function (error1: any, channel: any) {
        if (error1) {
            throw error1;
        }

        const msg = "Hello world";
        setInterval(() => {
            channel.sendToQueue(RABBITMQ_QUEUE, Buffer.from(msg));
            console.log(" [x] Sent %s", msg);
        }, 5000);
    });
});


/*
channel.assertQueue(RABBITMQ_QUEUE, {
    durable: false
});
*/