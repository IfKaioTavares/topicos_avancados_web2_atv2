import express from "express";
import dotenv from "dotenv";
import { connectToQueue } from "../shared/amqp.js";

dotenv.config();
const app = express();
app.use(express.json());

// HTTP - Receber de sensores HTTP ou simuladores
app.post("/sensor", (req, res) => {
  console.log("[Central HTTP] Received:", req.body);
  res.sendStatus(200);
});

// AMQP - Receber mensagens dos sensores
const startAMQP = async () => {
  const { channel } = await connectToQueue();
  channel.consume(process.env.QUEUE_NAME, (msg) => {
    if (msg !== null) {
      const data = JSON.parse(msg.content.toString());
      console.log("[Central AMQP] Received:", data);
      channel.ack(msg);
    }
  });
};

startAMQP();

app.listen(process.env.HTTP_PORT, () => {
  console.log(`HTTP Server running on port ${process.env.HTTP_PORT}`);
});
