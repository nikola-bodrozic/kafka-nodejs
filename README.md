# Kafka producer and consumer in NodeJS

## Install & run kafka

```shell
java -version
sudo apt install openjdk-8-jre-headless
wget https://www-eu.apache.org/dist/kafka/2.2.0/kafka_2.11-2.2.0.tgz
tar -xzf kafka_2.11-2.2.0.tgz
cd kafka_2.11-2.2.0/
```

first terminal:
```shell
bin/zookeeper-server-start.sh config/zookeeper.properties
```

second terminal:
```shell
bin/kafka-server-start.sh config/server.properties
```

third terminal creates **test-topic**:
```shell
bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test-topic
```

## Install & run node app

```shell
yarn install
```

4th. terminal start producer
```shell
node prod.js
```

5th. terminal start consumer
```shell
node cons.js
```