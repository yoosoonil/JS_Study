// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing -> 하나의 함수는 한가지의 일만 하도록.
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234); // 타입을 정해줘야 함. 타입스크립트 참고

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
  console.log(`${message} by ${from}`)
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
// 요소들을 하나씩 뽑아내서 나타낸다.
// 파이썬의 리스트를 for으로 돌린 것과 유사.
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
// 자식함수는 부모함수의 변수를 받을 수 있음.
// 하지만 부모함수는 자식함수의 변수를 받을 수 없음.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); error
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// Early return, early exit
// bad code. 조건이 맞을 때 함수를 실행하라하면
// if문 블럭안의 코드가 길어짐.
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}
// good code. 역으로 업그레이드 상황이 아닐 때
// 빨리 리턴(멈춤)하고, 업그레이드 상황일 때
// 로직 실행!
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
  console.log('print');
};
print(); // 함수를 print에 할당하게 되면, print();는 함수를 호출한다.
const printAgain = print; 
printAgain(); // 다시 print 함수를 호출.
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
// 정답에 따라 콜백함수 printYes, printNo를 호출
function randomQuiz(answer, printYes, printNo) {
  if ( answer === 'love you') { // 정답이 'love you'라면 printYes라는 콜백함수를 호출해.
    printYes();
  } else {
    printNo();
  }
}
// annonymous function
const printYes = function () { // printYes라는 변수에 함수를 할당
  console.log('yes');
}

// named function
// better debugging in debugger's stack traces 디버깅할 때 함수이름이 나오게 함
// recursions = 함수안에서 함수 자신 스스로를 부르는 것
const printNo = function print() { // printNo라는 변수에 함수를 할당
  console.log('no');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint');
// };

const simplePrint = () => console.log('simplePrint');

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})(); // 함수 선언함과 동시에 호출

// Fun quiz time🎯
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  if ( command == 'add' ) {
    console.log(a + b);
  } else if ( command == 'substract' ) {
    console.log(a - b);
  } else if ( command == 'divide' ) {
    console.log(a / b);
  } else if ( command == 'multiply') {
    console.log(a * b);
  } else if ( command == 'remainder') {
    console.log(a % b);
  }
};

calculate('multiply', 3, 4);