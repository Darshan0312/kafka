const { kafka } = require("./client");

async function init() {
  const producer = kafka.producer();

  try {
    console.log('Connecting Producer...');
    await producer.connect();
    console.log('Producer Connected Successfully');

    await producer.send({
      topic: "rider-updated", // ✅ make sure this matches admin.js and consumer.js
      messages: [
        {
          partition: 0,
          key: "location-update",
          value: JSON.stringify({ name: "Darshan", loc: "Bangalore" }),
        },
      ],
    });

    console.log("Message sent successfully");
  } catch (err) {
    console.error("Producer error:", err);
  } finally {
    await producer.disconnect();
    console.log("Producer disconnected");
  }
}

init();
