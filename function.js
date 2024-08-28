const display = document.getElementById('display');
function appendToDisplay(value) {
    if (value === '.' && display.value.includes('.')) return;
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculateResult() {
    try {
        const result = new Function('return ' + display.value)();
        display.value = isFinite(result) ? result : 'Error';
    } catch (e) {
        display.value = 'Error';
    }
}
