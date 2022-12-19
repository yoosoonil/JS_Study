'use strict';
// why? JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
// use strict 선언함으로써, strict모드로 개발
// JavaScript 엔진이 효율적으로 돌아감

// 2. Variable, rw(read/write)
// 변수. 변경될 수 있는 값.
// js에서 변수를 만들 때 let을 사용.
// let (added in ES6)
let globalName = 'global name'; 
{
    let name = 'ellie';
    // let을 이용해서 name이라는 변수를 선언. 'ellie'라는 변수의 값을 할당.
    console.log(name);
    name = 'Hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);
// 어플리케이션을 실행하게 되면
// app에 메모리가 할당되어짐.
// 이 메모리는 텅텅 비어있는 박스들.
// 쓸 수 있는 박스들은 제한적.
// let name -> box(ellie)

// Block scope
// block 안에서 선언된 변수는 밖에서 노출 안됨.
{
  let name = 'ellie';
  console.log(name);
  name = 'Hello';
  console.log(name);
}

// 2. var(don't ever use this!)
// var hoisting
// hoisting은 뭔가?
// hoisting : 변수를 어디에 선언했는가 상관없이 항상 제일 위로 선언을 끌어 올리는 것
// has no block scope : block을 철저히 무시
age = 4;
var age;

// 3. Constants, r(read only)
// const는 값을 한번 할당하면 절대 바뀌지 않는다.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze()) [데이터 타입을 절대 변경 못함]
// Mutable data types: all objects by default are mutable in JS [자스에서 모든 객체는 변경이 가능함]
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
// function도 변수에 할당이 가능함.
// js에서는 number라고 type을 설정해주지 않아도 됨.
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // typeof는 변수에 대한 type 알려줌
console.log(`value: ${size}, type: ${typeof size}`);  // console.log = python의 print

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123345234645636452n; // number의 범위 = (-2**53 ~ 2 * 53) 
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean : 참과 거짓
// false: 0, null, underfined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create usique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
// 위 두 symbol은 같지않아
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20 };
ellie.age = 21;// name과 age는 box안의 값이기에 변경이 가능하다. const의 영향x


// 5. Dynamic typing: dynamically typed language
// 선언할 때 어떤 타입인지 선언하지 않고, 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경될 수 있는 것을 의미.
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);// string으로 타입을 변경해서 75로 표현. str임.
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));

