/* eslint-disable @typescript-eslint/no-unused-vars */
import amqp from "amqplib";
import { config } from "dotenv";

config();
const { RABBITMQ_URI } = process.env;

amqp.connect(RABBITMQ_URI, (error: any, connection: any) => {

    if (error) {
        throw error;
    }

    connection.createChannel((error1: any, channel: any) => {
        if (error1) {
            throw error1;
        }

        channel.assertQueue("test_queue", {
            durable: true
        });

        //сообщения будут записываться на диск { persistent: true }
        //сообщения передаются в определенную queue напрямую (используется nameless exchange)
        channel.sendToQueue("test_queue", Buffer.from("Hello"), {
            persistent: true
        });
        console.log(" [x] Sent '%s'", "Hello");
    });
});