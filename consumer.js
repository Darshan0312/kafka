const { kafka } = require("./client");
const group = process.argv[2];

async function init() {
  const consumer = kafka.consumer({ groupId: group });
  await consumer.connect();

  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`GROUP: ${group} | TOPIC: ${topic} | PARTITION: ${partition} | MESSAGE: ${message.value.toString()}`);
    },
  });
}

init();