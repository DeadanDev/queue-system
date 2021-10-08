const numpad = document.querySelector('#numpad');
const numpadBtns = numpad.querySelectorAll('.keypad button');
const screen = document.querySelector('#input-display');
const addNumBtn = document.querySelector('#add-Number');


const value = [];

numpadBtns.forEach(btn => {
    btn.onclick = () => {
        if (!btn.dataset.action) {
            value.push(btn.innerHTML);
        } else {
            value.pop();
        }
    
        screen.value = value.join('');
    };
});

addNumBtn.onclick = () => {
    console.log(screen.value);
    screen.value = '';
}