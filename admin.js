const { kafka } = require('./client'); // ✅ Destructure 'kafka' from exported object

async function init() {
  const admin = kafka.admin();
  console.log('ADMIN CONNECTING.............');
  await admin.connect();
  console.log("Admin Connection Success...........");

  console.log('CREATING TOPIC [rider-updated]');
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updated",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Successfully: [rider-updated]");

  console.log("DISCONNECTING ADMIN....");
  await admin.disconnect();
}

init().catch((err) => {
  console.error("Error in admin script:", err);
});
