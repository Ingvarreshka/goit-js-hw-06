const inputRangeEl = document.querySelector('#font-size-control');
const inputTextEl = document.querySelector('#text')

inputRangeEl.addEventListener('input', (event) => {
    inputTextEl.style.fontSize = `${inputRangeEl.value}px`;

})