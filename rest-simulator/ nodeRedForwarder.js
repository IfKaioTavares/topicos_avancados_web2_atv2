import axios from "axios";

const NODE_RED_URL = "http://localhost:1880/from-sensor";

setInterval(async () => {
  const payload = {
    type: "http-temperature",
    value: (15 + Math.random() * 10).toFixed(2),
    timestamp: new Date().toISOString()
  };
  try {
    await axios.post(NODE_RED_URL, payload);
    console.log("[HTTP Sensor -> Node-RED] Sent:", payload);
  } catch (error) {
    console.error("[HTTP Sensor -> Node-RED] Error:", error.message);
  }
}, 7000);
