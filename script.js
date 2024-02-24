// const operator = prompt('Enter +, -, *, or /: ');

// const number1 = Number(prompt('Enter first number: '));
// const number2 = Number(prompt('Enter second number: '));

// let result;


// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }


// alert(`${result}`);



// function append(){


// }

let doc = document

console.log(doc)

let calc = document.getElementById('calculator')

console.log(calc)

function appendToDisplay(value){
    document.getElementById('display').value += value;
}


function clearDisplay(){
    document.getElementById('display').value = ''

}

function calculateResult(){
    var result = eval(document.getElementById('display').value)
    document.getElementById('display').value = result
}