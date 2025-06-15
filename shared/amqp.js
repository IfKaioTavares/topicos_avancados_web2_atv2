import amqplib from "amqplib";
import dotenv from "dotenv";
dotenv.config();

export async function connectToQueue(queueName = process.env.QUEUE_NAME) {
  const connection = await amqplib.connect(process.env.AMQP_URL);
  const channel = await connection.createChannel();
  await channel.assertQueue(queueName);
  return { connection, channel };
}
