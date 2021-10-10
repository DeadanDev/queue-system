const mqtt = require('mqtt');

const client = mqtt.connect(`mqtt://localhost`, {
    port: 1883
});

client.on('connect', () => {
    console.log('Connected to MQTT broker');

    client.publish('test', 'test');
});

module.exports = client;