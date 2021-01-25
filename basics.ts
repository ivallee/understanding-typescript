
function add(n1: number, n2: number, showResult: boolean, resultMessage: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(resultMessage + result);
  } else {
    return n1 + n2;
  } 
}

// core types
let number1: number; // define on declaration if value is to be assigned later
number1 = 6;
const number2 = 5.7; // type definition is implicit on declaration
const printResult = true;
const resultMessage = 'The result is: ';

const result = add(number1, number2, printResult, resultMessage);
console.log(result);