//create a calculator funcgtion which accepts two numbers and an operator function (a callback)
//const add = (x, y) => x + y
// Create buttons on the page for Add, Multiply, and Divide, 
// and write a click event listener for each button, which calls the calculator
// with the correct x and y values and the correct callback function
// You will need two textboxes: one for x, and one for y.
const body = document.querySelector('body');

const xInput = document.createElement('input');
xInput.type = 'number';
xInput.placeholder = 'x values';
body.append(xInput)

const yInput = document.createElement('input');
yInput.type = 'number';
yInput.placeholder = 'y values'
body.append(yInput)


const addButton = document.createElement('button');
body.append(addButton);
addButton.className = 'Add';
addButton.append('Add');

const multiplyButton = document.createElement('button');
body.append(multiplyButton);
multiplyButton.className = 'Multipy';
multiplyButton.append('multiply');

const divideButton = document.createElement('button');
body.append(divideButton);
divideButton.className = 'Divide';
divideButton.append('divide')
//////////////////////////////////////////////////////
function add(x, y) {
    return x + y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

let CALCULATOR_POWER = 'off'
function calculator(x, y, equipment) {//callback
    return equipment(x, y)
    if (CALCULATOR_POWER === 'ON') {
        return equipment(x, y)
    } else {
        return null
    }
}
const addOutput = calculator(1, 2, add)
const multiplyOutput = calculator(1, 2, multiply)
console.log({ addOutput })
///////////////////////////////////////////////////
addButton.addEventListener('click', function () {
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    const result = calculator(x, y, add)
    console.log({ result })
})

multiplyButton.addEventListener('click', function () {
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    const result = calculator(x, y, multiply)
    console.log({ result })
})

divideButton.addEventListener('click', function () {
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    const result = calculator(x, y, divide)
    console.log({ result })
})