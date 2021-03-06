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

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", RABBITMQ_QUEUE);
        channel.consume(RABBITMQ_QUEUE, (msg: any) => {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});