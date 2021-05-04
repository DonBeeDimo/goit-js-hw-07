const valueInput = document.querySelector("#validation-input");
const validLength = valueInput.getAttribute("data-length");
const intValidLength = parseInt(validLength, 10);

valueInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (valueInput.value.length === intValidLength) {
    valueInput.classList.remove("invalid");
    valueInput.classList.add("valid");
  }
  if (valueInput.value.length === 0) {
    valueInput.classList.remove("valid");
    valueInput.classList.remove("invalid");
  }
  if (valueInput.value.length !== intValidLength && valueInput.value.length !== 0) {
    valueInput.classList.remove("valid");
    valueInput.classList.add("invalid");
  }
};