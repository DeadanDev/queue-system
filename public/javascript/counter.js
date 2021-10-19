const call = {
    num: 0,
    retries: 0,
    maxRetry: 3,
    disabled: true
};

const data = {
    wait: '0000', next: '0000', current: '0000'
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
const numTotalServed = document.querySelector('#displayTotalServed');
const numTotalWaiting = document.querySelector('#displayTotalWait');

// printer name
const printerNameCust = document.querySelector('#printerNameCust');
const printerNameKitc = document.querySelector('#printerNameKitc');

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

    numTotalServed.innerHTML = listComplete.querySelectorAll('.item').length;
    numTotalWaiting.innerHTML = queue.length + listSkipped.querySelectorAll('.item').length;
};

const updateQueue = () => {
    data.current = (queue[0]) ? queue[0] : '0000';
    data.wait = (queue[1]) ? queue[1] : '0000';
    data.next = (queue[2]) ? queue[2] : '0000';

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
        <div class="btn" onclick="onRecall('${num}');">
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
    if (call.retries <= call.maxRetry) {
        
        if (!call.disabled || call.retries === call.maxRetry) {
            client.publish('almarjan/call', JSON.stringify({
                queue, data, num: call.num
            }));
        }

        if (call.retries === call.maxRetry) {
            call.disabled = true;
            document.querySelector('#btnCall').classList.add('disabled');
        }
    }
};

const onRecall = num => {
    queue.unshift(num);

    updateQueue();
    updateDataDisplay();

    resetCall();

    client.publish('almarjan/recall', JSON.stringify({
        data, queue
    }));

    listSkipped.querySelector(`.item[data-num="${num}"]`).remove();
};

for (const btn of btns) {
    btn.onclick = () => {
        if (btn.dataset.action === 'call') {
            callNum();
        }
        if (btn.dataset.action === 'done') {
            if (data.current !== '0000') {
                listComplete.innerHTML += newDone(new Date().toString().split(' ')[4], data.current);

                queue.splice(queue.indexOf(data.current), 1);
                
                updateQueue();
                resetCall();
    
                client.publish('almarjan/done', JSON.stringify({
                    data, queue
                }));
            }
        }
        if (btn.dataset.action === 'skip') {
            queue.splice(queue.indexOf(data.current), 1)
            
            listSkipped.innerHTML += newSkip(new Date().toString().split(' ')[4], data.current);

            client.publish('almarjan/skip', JSON.stringify({
                data, queue
            }));
            
            updateQueue();
            resetCall();
        }
        if (btn.dataset.action === 'print') {
            addNumberBtn.innerHTML = 'PRINT';
            addNumberBtn.onclick = printNum;
        }
        if (btn.dataset.action === 'add') {
            addNumberBtn.innerHTML = 'ADD NUMBER';
            addNumberBtn.onclick = addNum;
            numInput.value = sequence;
        }
        if (btn.dataset.action === 'reset') {
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
            call.num = queue[0];
            call.retries = 0;
            call.disabled = false;
        }
    };
}

const printNum = () => {
    print4Customer(printerNameCust.value, numInput.value, data.current);
    print4Kitchen(printerNameKitc.value, numInput.value);
};

const addNum = () => {
    queue.push(numInput.value);

    updateQueue();
    updateDataDisplay();
    
    client.publish('almarjan/update', JSON.stringify({
        data, queue
    }));

    printNum();

    if (call.num !== data.current) {
        resetCall();
    }

    numInput.value = ++sequence;
};