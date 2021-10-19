const numpad = document.querySelector('#numpad');
const numpadBtns = numpad.querySelectorAll('.keypad button');
const screen = document.querySelector('#input-display');
const addNumBtn = document.querySelector('#add-Number');

let value = [];

const update = () => screen.value = value.join('');

for (const btn of numpadBtns) {
    btn.onclick = () => {
        value = screen.value.split('');
        !btn.dataset.action && value.push(btn.innerHTML) || value.pop();
    
        update();
    };
};

addNumBtn.onclick = () => {
    value = [];
    update();
}