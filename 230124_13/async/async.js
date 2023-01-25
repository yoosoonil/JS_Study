// async & await
// clear style of using promise :)

// 1. async
// async라는 키워드르 쓰지 않을 때, promise 코드를 작성할 때, 지저분해진다.
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve("ellie");
//   });
// }
// async라는 키워드를 함수 앞에 사용하면 자동으로 promise로 바꿔준다.
async function fetchUser() {
  // fetchUser 함수는 ellie를 리턴한다.
  return "ellie";
}
const user = fetchUser(); // 변수 user에 fetchUser 함수를 할당한다.
user.then(console.log);
console.log(user);

// 2. await 🌟
function delay(ms) {
  //
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
