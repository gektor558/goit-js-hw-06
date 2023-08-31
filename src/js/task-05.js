


const inputTxt = document.querySelector('#name-input');
const outputTx = document.querySelector('#name-output');

inputTxt.addEventListener("input", (event) => {
  outputTx.textContent = event.currentTarget.value;
    if (outputTx.textContent === '') {
      outputTx.textContent = 'Anonymous';
    }
});
