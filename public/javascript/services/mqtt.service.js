/* connect to mqtt broker */
const client = mqtt.connect('ws://localhost:9001');

client.on('connect', () => {
    console.log('connected to local MQTT broker');
});