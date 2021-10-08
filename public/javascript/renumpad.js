const numpad = document.querySelector('#numpad');
const numpadBtns = numpad.querySelectorAll('.keypad button');
const screen = document.querySelector('#input-display');
const addNumBtn = document.querySelector('#add-Number');

const value = [];

for (const btn of numpadBtns) {
    btn.onclick = () => {
        !btn.dataset.action && value.push(btn.innerHTML) || value.pop();
    
        screen.value = value.join('');
    };
};

addNumBtn.onclick = () => {
    console.log(screen.value);
    screen.value = '';
}