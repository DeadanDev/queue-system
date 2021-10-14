const client = mqtt.connect('ws://localhost:52791');

client.on('connect', () => {
    console.log('connected to local MQTT broker');
});

/* DOMS */
const numEls = [
    document.querySelector('#numCurrent'),
    document.querySelector('#num1'),
    document.querySelector('#num2'),
    document.querySelector('#num3'),
    document.querySelector('#num4')
];

let data = {
    wait: 0, next: 0, current: 0
};
let queue = [];

let timeout;
// notification sound
const notiSound = new Audio('./res/audio/noti.mp3');
notiSound.loop = true;
notiSound.muted = false;

const updateDisplay = () => {
    numEls.forEach((el, x) => {
        el.innerHTML = (queue[x]) ? queue[x] : '-';
    });
};

client.on('connect', () => {
    client.subscribe('almarjan/call');
    client.subscribe('almarjan/update');
    client.subscribe('almarjan/done');
    client.subscribe('almarjan/skip');
});

let skips = 0;
client.on('message', (topic, message) => {
    let payload = {};
    try  {
        payload = JSON.parse(message);
    } catch (e) {}

    data = payload.data;

    queue.splice(1, queue.length - 1);

    skips = 0;
    payload.queue.forEach((q, x) => {
        if (parseInt(q) === parseInt(queue[0])) {
            skips++;
            return;
        };
        queue[x + (1 - skips)] = q;
    });

    updateDisplay();

    if (topic === 'almarjan/call') {
        // notify sound
        notiSound.currentTime = 0;
        notiSound.play();

        if (!queue[0]) {
            queue[0] = queue.splice(1, 1);
        }

        numEls[0].innerHTML = (queue[0]) ? queue[0] : '-';

        updateDisplay();

        /* add and remove animation class within 10s */
        numCurrent.classList.add('animate__tada');
        timeout = setTimeout(() => {
            numCurrent.classList.remove('animate__tada');
            notiSound.pause();

            updateDisplay();
        }, 10000);
    }

    if (topic === 'almarjan/done') {
        delete queue[0];

        numCurrent.classList.remove('animate__tada');
        notiSound.pause();

        clearTimeout(timeout);

        updateDisplay();
    }

    if (topic === 'almarjan/skip') {
        delete queue[0];

        numCurrent.classList.remove('animate__tada');
        notiSound.pause();

        clearTimeout(timeout);

        updateDisplay();
    }
});

