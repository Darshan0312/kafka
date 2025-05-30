const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.1.31:9092"],
});

module.exports = { kafka }; // ✅ Export as an object with named key
