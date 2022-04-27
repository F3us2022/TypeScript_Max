console.log('Time to get started...');

/*
function add(number1: number, number2: number, showResult: boolean, phrase: string) {
    const result = number1 + number2;
    if (showResult) { 
        console.log(phrase ,result);
    }
}
 
const n1 = 5;
const n2= 6;
const showReslt = true;
const phrase = 'Result is : ';
add(n1,n2,showReslt,phrase);
*/

//

//

//**------------------------------------------------------ TUPLES -------------------------------------------------------- */

//

//

/*

const person: {
    name:string,
    age:number,
    hobbie: string[],
    roles:[number,string]
} = {
    name:'Max',
    age:30,
    hobbie:['Sketch','Cooking'],
    roles:[10,'author']
}

console.log(person.roles);
person.roles = [2, 'user'];
console.log(person);

*/

//

//

//**------------------------------------------------------ ENUMS -------------------------------------------------------- */

//

//

/*

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person= {
    name:'Max',
    age:30,
    hobbie:['Sketch','Cooking'],
    roles: Role.ADMIN
}

console.log(person.roles);
if (person.roles === Role.ADMIN) {
    console.log(person);
}

*/

//

/*

enum Role { ADMIN='Admin', READ_ONLY=100, AUTHOR='Author' };

const person= {
    name:'Max',
    age:30,
    hobbie:['Sketch','Cooking'],
    roles: Role.ADMIN
}

console.log(person.roles);
if (person.roles === Role.ADMIN) {
    console.log(person);
}

*/

//

//

//**------------------------------------------------------ UNION -------------------------------------------------------- */

//

//

/*

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);

*/

//

//

//**--------------------------------------------------- LITERAL TYPE ------------------------------------------------------ */

//

//

/*

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

*/

//

//

//**---------------------------------------------------- TYPE ALIAS ------------------------------------------------------ */

//

//

/*
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

*/

//

//

//**--------------------------------------------- FUNCTION TYPES & CALLBACKS ----------------------------------------------- */

//

//

/*

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});

*/

//

//

//**-------------------------------------------------- UNKNOWN TYPES ----------------------------------------------------- */

//

//

//-------***********  While using 'ANY'  *******---

/*

let userInput : any;
let userName: string;

userInput = 10;
userInput = 'Max';
userName = userInput; // allow as 'any' isnot strict type

*/

//--------***********  While using 'UNKNOWN'  ***---

/*
let userInput : unknown;
let userName: string;

userInput = 10;
userInput = 'Max';
//userName = userInput; // wont allow as 'unknow is strict type'

if (typeof userInput === 'string') { 
    userName = userInput;
}
*/

//

//

//**-------------------------------------------------- NEVER TYPES ----------------------------------------------------- */

//

//

/*

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError('An error occurred!', 500);
*/

//

//