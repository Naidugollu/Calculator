let currentValue = '';
let storedValue = '';
let currentOperator = null;

function appendValue(value) {
    currentValue += value;
    updateDisplay(currentValue);
}

function setOperator(operator) {
    if (currentValue === '') return;
    if (storedValue !== '') calculate();
    currentOperator = operator;
    storedValue = currentValue;
    currentValue = '';
}

function calculate() {
    if (storedValue === '' || currentValue === '' || currentOperator === null) return;
    let result;
    const num1 = parseFloat(storedValue);
    const num2 = parseFloat(currentValue);

    if (currentOperator === '+') {
        result = num1 + num2;
    } else if (currentOperator === '-') {
        result = num1 - num2;
    } else if (currentOperator === '*') {
        result = num1 * num2;
    } else if (currentOperator === '/') {
        result = num2 !== 0 ? num1 / num2 : 'Error';
    } else {
        return;
    }

    currentValue = result.toString();
    currentOperator = null;
    storedValue = '';
    updateDisplay(currentValue);
}

function clearEntry() {
    currentValue = '';
    updateDisplay(currentValue);
}

function clearAll() {
    currentValue = '';
    storedValue = '';
    currentOperator = null;
    updateDisplay('');
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}