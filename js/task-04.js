const button = {
    inc: document.querySelector('[data-action="increment"]'),
    dec: document.querySelector('[data-action="decrement"]'),
    span: document.querySelector('#value'),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;

  button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  
  button.span.textContent = counterValue;
};

button.inc.addEventListener("click", increment);
button.dec.addEventListener("click", decrement);
