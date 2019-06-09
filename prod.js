var short = require("short-uuid");
var kafka = require("kafka-node"),
  Producer = kafka.Producer,
  client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" }),
  producer = new Producer(client);

producer.on("ready", function() {
  setInterval(() => {
    payloads = [{ topic: "test-topic", messages: short.uuid() }];
    producer.send(payloads, function(err, data) {
      console.log(data);
    });
  }, 1000);
});

producer.on("error", function(err) {});
