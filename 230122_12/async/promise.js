"use strict";

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fullfilled or rejected
// Producer vs Consumer

// 1. Producer
// 불필요한 네트워크 통신 할때 : 새로운 Promise가 만들어질 때,
// 우리가 전달한 executor가 자동적으로 실행이 된다.
// 시간이 걸리는 일들은 promise에 넣어서 비동기적으로 처리.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve('ellie');
    reject(new Error("no network")); // 에러를 발생시키 때 에러 원인을 잘 알려줘야함.
  }, 2000);
});

// 2. Consumers: then, catch, finally를 이용해서 값을 받아옴.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // finally는 값이 전달되든 안되든 오류가 나든 실행되는 것.
    console.log("finally");
  });

// 3. Promise chaining
// fetchNumber라는 것에 new Promise를 할당
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // resolve값에 1 전달.
});

fetchNumber
  .then((num) => num * 2) // 전달받은 1에 곱하기 2
  .then((num) => num * 3) // 전달받은 2에 곱하기 3
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    }); // 결국, 6을 전달받고 5를 출력. 최종적으로 2초걸린다.
  })
  .then((num) => console.log(num));

// 4. Error Handling
// const getHen = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve("🐔"), 1000);
//   });
// const getEgg = (hen) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${hen} => 🥚`), 1000);
//   });
// const cook = (egg) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${egg} => 🍳`), 1000);
//   });

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then(hen => getEgg(hen))
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal));
// 한가지 값만 받아서 그대로 전달할 경우 생략 가능.
// prettier format에서 한줄로 작성 가능.
// gethen() //
//   .then(getEgg)
//   .then(cook)
//   .then(console.log)
//   .catch(console.log);
getHen()
  .then(getEgg)
  .catch((error) => {
    return "🥖"; // 계란을 받아오늘 걸 실패한다면, 빵을 return해서 최종 결과값을 출력한다.
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
