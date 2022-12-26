// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 
''''
1 + 2 = ${1 + 2}`);
console.log("ellie's \nbook");

// 2. Numiric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter : ${counter}`)
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1; 

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), 처음으로 true가 나오면 멈춘다. 그렇기에 복잡한 함수는 뒤에 놓는게 좋다.
console.log(`or: ${value1 || value2 || check()}`);
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10 ; i++) {
      // wasting time
      console.log('😊');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion(타입을 변경해서 비교한다.)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion(타입을 변경하지 않고 비교한다.)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // ellie1과 ellie2는 각각 다른 레퍼런스이기에 false.
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3); // ellie1이 가지는 레퍼런스를 ellie3에 할당했기에 true.

// equality - puzzler
// 0, '', null 은 다 false로 간주되어 질 수 있다. 하지만 boolean type이 아니기에, === 일때 false
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ? 
// condition ? value1 : value2; (true면 yes, false면 no)
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
}while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(짝수인 아이들만 출력)(use continue)
// my answer
for (let i = 0; 10 >= i; i++) {
  if (i % 2 == 1) {
    continue;
 } 
 console.log(`number: ${i}`);
}
// ellie's answer
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
// my answer
for (let i = 0; 10 >=i; i++) {
  console.log(`number: ${i}`);
  if (i == 8) {
    break;
  }
}
// ellie's answer
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}