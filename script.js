const operator = input('Enter +, -, *, or /: ');

const number1 = float(input('Enter first number: '));
const number2 = float(input('Enter second number: '));

let result;


if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}


console.log(`${number1} ${operator} ${number2} = ${result}`);