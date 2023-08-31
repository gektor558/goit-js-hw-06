const inputTxt = document.querySelector("#validation-input");

inputTxt.addEventListener('blur', () => {
    
    if (inputTxt.dataset.length === inputTxt.value.length.toString()) {
        inputTxt.classList.remove('invalid');
        inputTxt.classList.add('valid');
    } else {
        inputTxt.classList.remove('valid');
        inputTxt.classList.add('invalid');
    }
});