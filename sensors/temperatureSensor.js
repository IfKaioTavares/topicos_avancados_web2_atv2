import { connectToQueue } from "../shared/amqp.js";

const sendTemperature = async () => {
  const { channel } = await connectToQueue();
  setInterval(() => {
    const payload = {
      type: "temperature",
      value: (20 + Math.random() * 10).toFixed(2),
      timestamp: new Date().toISOString()
    };
    channel.sendToQueue(process.env.QUEUE_NAME, Buffer.from(JSON.stringify(payload)));
    console.log("[Temperature] Sent:", payload);
  }, 3000);
};

sendTemperature();
