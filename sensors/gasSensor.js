import { connectToQueue } from "../shared/amqp.js";

const sendGasLevel = async () => {
  const { channel } = await connectToQueue();
  setInterval(() => {
    const payload = {
      type: "gas",
      value: (Math.random() * 100).toFixed(2),
      timestamp: new Date().toISOString()
    };
    channel.sendToQueue(process.env.QUEUE_NAME, Buffer.from(JSON.stringify(payload)));
    console.log("[Gas] Sent:", payload);
  }, 5000);
};

sendGasLevel();
