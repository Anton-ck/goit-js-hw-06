const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

output.style.fontSize = `${input.value}px`;

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  output.style.fontSize = `${input.value}px`;
}