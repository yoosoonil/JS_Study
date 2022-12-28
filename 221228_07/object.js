// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; object는 key와 value의 집합체

// 1. Literals and properties
const name = 'ellie';
const age = 4;
print(name, age);

function print(name, age) {
  console.log(name);
  console.log(age);
}
// 위와 같이 하나 씩 변수를 할당하다보면
// 변수가 늘어날 때 마다 반복적인 코드를 사용해서 비효율적임.

// 아래처럼  함수를 지정하고, object를 만들면 데이터 관리가 편함.
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = {name: 'ellie', age: 4 };
print(ellie);

// 위에서 property를 정의했는데 object를 하나 더 추가하고 싶음.
// 아래처럼 동적으로 object 추가 가능.
// 하지만, 유지보수가 힘드므로 잘 사용하지 않음.

ellie.hasJob = 'doctor';
console.log(ellie.hasJob);

// object 삭제도 가능. but, 잘 사용안함.
delete ellie.hasJob;
console.log(ellie.hasJob);


// 2. Computed properties
// key should be always string
// 보통 .을 써서 property를 불러오는데
// 실시간으로 불러올 때 []를 쓴다.
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = 'doctor';
console.log(ellie.hasJob);

// 나중에 key의 value를 받아올 때 유용하게 쓰일 수 있다.
function printValue(obj, key) {
  // console.log(obj.key); -> obj에 key라는 property가 들어있니? 없어~
  console.log(obj[key]); // computed property를 써서 출력
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30); // 4번째 사람을 추가할 때 이름과 나이를 써줘야하는 번거로움이 있음. 그래서 함수를 만들고 값만 넘겨주는게 편함.
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // name이라는 key가 ellie라는 object에 있는지 확인
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of literable)
const array1 = [1, 2, 4, 5];
for(let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}
const array2 = [1, 2, 4, 5];
for (value of array2) {
  console.log(value);
}

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder'; // ellie를 coder로 할당
console.log(user);

// old way
const user3 = {};
for (key in user) { // user의 key를 빙글빙글 돌건데, 1번째는 name, 2번째는 age를 볼거야.
  user3[key] = user[key] // 여기서 user3의 key는 user의 key와 같아.
}
console.clear();
console.log(user3);

// new way
const user4 = Object.assign({}, user);
console.log(user4);

// another example 
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 있는 것이 앞의 것의 property를 덮어 씌움.
console.log(mixed.color);
console.log(mixed.size);



