import amqp from "amqplib/callback_api";

const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://localhost";

export const publishToQueue = (queue: string, message: any) => {
  amqp.connect(RABBITMQ_URL, (err, connection) => {
    if (err) {
      throw err;
    }
    connection.createChannel((err, channel) => {
      if (err) {
        throw err;
      }
      channel.assertQueue(queue, { durable: false });
      channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
      console.log(`Message sent to queue ${queue}:`, message);
    });
  });
};
