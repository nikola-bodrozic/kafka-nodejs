var kafka = require("kafka-node"),
  Consumer = kafka.Consumer,
  client = new kafka.KafkaClient({ kafkaHost: "localhost:9092", fromOffset: 'latest' }),
  consumer = new Consumer(
    client,
    [
      {
        topic: "test-topic"
      }
    ]
  );

consumer.on("message", function(message) {
  console.log(message);
});
