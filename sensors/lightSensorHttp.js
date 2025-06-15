import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

setInterval(async () => {
  const payload = {
    type: "light",
    value: Math.floor(Math.random() * 100),
    timestamp: new Date().toISOString()
  };
  try {
    await axios.post(process.env.NODE_RED_URL, payload);
    console.log("[Light Sensor -> Node-RED] Sent:", payload);
  } catch (err) {
    console.error("[Light Sensor -> Node-RED] Error:", err.message);
  }
}, 8000);
