const movingPointer = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
movingPointer.addEventListener("input", () => {
    text.style.fontSize = movingPointer.value.toString() + 'px';
})