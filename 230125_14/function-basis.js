// Don't give up
// 포기하지 말자
// 중꺽마

// 함수 선언
function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}
// 함수 호출
doSomething(add);

const result = add(1, 2);
console.log(result);

const addFun = add;
console.log(add);
addFun(1, 2);
