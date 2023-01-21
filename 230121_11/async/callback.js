'use strict';

// JavaScript is synchronous.
// Execute the cod block in order after histing.
// hoisting: var, function declaration -> 선언들이 제일 위로 올라가는 것
console.log('1');
// 우리가 지정한 시간이 지나면, 콜백함수 호출
setTimeout(function() {
    console.log('2');
}, 1000); // 1000 = 1000ms = 1s
console.log('3');
// 결국 1 -> 3 -> 2 출력. 이것이 async(비동기적)인 실행 방법

// Synchronous callback(동기적)
// 함수의 선언은 hoisting 된다. 즉, 함수가 맨위에 올라간다.
// 하지만, printImmediately()가 console.log('1')과 console.log('3') 뒤에 있기에 1, 3 출력 후 'hello'가 출력된다.
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback(비동기적)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id); // id와 password가 포함되어있다면 id 전달
      } else { // 포함되어 있지 않다면 'not found' 출력
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({name: 'ellie', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

// userStorage라는 변수를 선언
// callback chein의 문제점 : 가독성 떨어짐, 비즈니스 로직을 이해하는데 어려움.
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password, 
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
    )
  },
  error => {console.log(error)}
);