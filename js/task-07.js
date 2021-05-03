const valueInput = document.querySelector('#font-size-control');
const textLabel = document.querySelector('#text');

valueInput.addEventListener('input', onInputChange);

function onInputChange() {
    textLabel.style.fontSize = valueInput.value + 'px'; 
};