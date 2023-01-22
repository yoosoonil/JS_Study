'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fullfilled or rejected
// Producer vs Consumer

// 1. Producer
// 불필요한 네트워크 통신 할때 : 새로운 Promise가 만들어질 때,
// 우리가 전달한 executor가 자동적으로 실행이 된다.
// 시간이 걸리는 일들은 promise에 넣어서 비동기적으로 처리.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
      resolve('ellie');
    }, 2000);
});