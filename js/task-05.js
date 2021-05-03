const input = document.querySelector('#name-input');
let outputName  = document.querySelector('#name-output');

input.oninput = () => {
    if (input.value === '') {
        outputName.textContent = 'незнакомец';
    } else{
        outputName.textContent = input.value;
    }
    
};

    

