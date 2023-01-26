// number, string, boolean, null, undefined
let number = 2;
let number2 = number;

console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// object는 객체이자 변수이다.
// object에 명명된 값을 properties라고 한다.
console.clear();
let obj = {
  name: "ellie",
  age: 5,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = "james";
console.log("-------");
console.log(obj.name);
console.log(obj2.name);

function add(num1, num2) {
  return num1 + num2;
}

function surprise(operator) {
  const result = operator(2, 3);
  console.log(result);
}
// surprise함수에 add함수를 operator로 할당
surprise(add);
