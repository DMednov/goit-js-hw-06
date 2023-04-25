const rangeInput = document.getElementById('font-size-control');
const textChange = document.getElementById('text');
textChange.style.fontSize = `${rangeInput.value}px`;
rangeInput.addEventListener('input', onRangeChange);
function onRangeChange(event) {
  textChange.style.fontSize = `${event.currentTarget.value}px`
}