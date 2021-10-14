const call = {
    num: 0,
    retries: 0,
    maxRetry: 3,
    disabled: true
};

const data = {
    wait: 0, next: 0, current: 0
};

const info = {
    totalServed: 0,
    totalWaiting: 0
};

let queue = [];
let sequence = 1001;

/* DOMS */

// display
const numNext = document.querySelector('#displayNext');
const numWait = document.querySelector('#displayWait');
const numCurr = document.querySelector('#displayCurrent');
const numTotalServed = document.querySelector('#displayCurrent');
const numTotalWaiting = document.querySelector('#displayWa');

// list
const listComplete = document.querySelector('#listComplete');
const listSkipped = document.querySelector('#listSkipped');

// inputs
const numInput = document.querySelector('#input-display');
const btns = document.querySelectorAll('#q-button-all > .btn-lg');
const addNumberBtn = document.querySelector('#add-Number');

const updateDataDisplay = () => {
    numNext.innerHTML = data.next;
    numWait.innerHTML = data.wait;
    numCurr.innerHTML = data.current;
};

const updateQueue = () => {
    data.current = (queue[0]) ? queue[0] : '-';
    data.wait = (queue[1]) ? queue[1] : '-';
    data.next = (queue[2]) ? queue[2] : '-';

    client.publish('almarjan/update', JSON.stringify({
        data, queue
    }));
};

const resetCall = () => {
    call.retries = 0;
    call.num = 0;

    if (queue.length) {
        call.num = data.current;
        call.disabled = false;
        document.querySelector('#btnCall').classList.remove('disabled');
    } else {
        call.disabled = true;
        document.querySelector('#btnCall').classList.add('disabled');
    }
};

const newSkip = (time, num) => (
    `<div class="item" data-num="${num}">
        <div class="time">
            <i class='bx bx-time' ></i>
            <div class="value">${time}</div>
        </div>
        <div class="num">
            <i class='bx bx-hash' ></i>
            <div class="value">${num}</div>
        </div>
        <div class="btn" onclick="onRecall(${num});">
            <div class="btn-redo">
                <i class='bx bx-redo'></i>
            </div>
        </div>
    </div>`
);

const newDone = (time, num) => (
    `<div class="item" data-num="${num}">
        <div class="time">
            <i class='bx bx-time' ></i>
            <div class="value">${time}</div>
        </div>
        <div class="num">
            <i class='bx bx-hash' ></i>
            <div class="value">${num}</div>
        </div>
        <div class="btn">
            <div class="btn-done">
                <i class='bx bx-check'></i>
            </div>
        </div>
    </div>`
);


const callNum = () => {
    call.retries++;
    if (call.retries < call.maxRetry) {
        
        client.publish('almarjan/call', JSON.stringify({
            queue, data, num: call.num
        }));
        
        return;
    }
    call.disabled = true;
    document.querySelector('#btnCall').classList.add('disabled');
};

const onRecall = num => {
    queue.unshift(num);

    updateQueue();
    updateDataDisplay();

    resetCall();

    listSkipped.querySelector(`.item[data-num="${num}"]`).remove();
};

for (const btn of btns) {
    btn.onclick = () => {
        if (btn.dataset.action == 'call') {
            if (!call.disabled) {
                callNum();
            }
        }
        if (btn.dataset.action == 'done') {
            listComplete.innerHTML += newDone(new Date().toString().split(' ')[4], data.current);

            queue.splice(queue.indexOf(data.current), 1);
            
            updateQueue();
            resetCall();

            client.publish('almarjan/done', JSON.stringify({
                data, queue
            }));
        }
        if (btn.dataset.action == 'skip') {
            queue.splice(queue.indexOf(data.current), 1)
            
            listSkipped.innerHTML += newSkip(new Date().toString().split(' ')[4], data.current);

            client.publish('almarjan/skip', JSON.stringify({
                data, queue
            }));
            
            updateQueue();
            resetCall();
        }
        if (btn.dataset.action == 'add') {
            numInput.value = sequence;
        }
        if (btn.dataset.action == 'reset') {
            sequence = 1001;
            queue = [];
            
            call.disabled = true;
            document.querySelector('#btnCall').classList.add('disabled');

            listComplete.innerHTML = '';
            listSkipped.innerHTML = '';

            updateQueue();
            updateDataDisplay();
        }
        
        updateDataDisplay();
        
        if (!queue.length && data.current !== call.num) {
            console.log(queue);
            call.num = queue[0];
            call.retries = 0;
            call.disabled = false;
        }
    };
}

addNumberBtn.onclick = () => {
    queue.push(numInput.value);

    updateQueue();
    updateDataDisplay();
    
    client.publish('almarjan/update', JSON.stringify({
        data, queue
    }));

    if (call.num !== data.current) {
        resetCall();
    }

    numInput.value = ++sequence;
};