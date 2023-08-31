const counterValueSpan = document.querySelector('#value')
const counter = document.querySelector("#counter");
const addListenerBttn = document.querySelector('button[data-action="increment"]');
const removeListenerBttn = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
const handleClickIncr = () => { 
    counterValue += 1;
    counterValueSpan.textContent = counterValue;
    }
const handleClickDecr = () => { 
    counterValue -= 1;
    counterValueSpan.textContent = counterValue;
    }
addListenerBttn.addEventListener('click', handleClickIncr);
removeListenerBttn.addEventListener('click', handleClickDecr);