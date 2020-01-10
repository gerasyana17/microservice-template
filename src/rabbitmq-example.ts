/* eslint-disable @typescript-eslint/no-unused-vars */
import amqp  from "amqplib";

amqp.connect("amqp://localhost", (error: any, connection: any) => {
    console.log(error);
    console.log(connection);
});