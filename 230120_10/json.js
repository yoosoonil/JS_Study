// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(), // Date라는 object 그 자체
  jump: () => {
    console.log(`${name} can jump!`); // json에는 함수가 포함되지 않는다.
  }
}
json = JSON.stringify(rabbit)
console.log(json);

json = JSON.stringify(rabbit, ['color']); // array(배열)의 property(color)만 전달
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`); // 모든 key와 value들이 콜백함수에 전달.
  return value;
})

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit); // rabbit이라는 object를 json으로 만듦.
console.log(json); // 위 json을 출력 birthDate가 string형태로 만들어짐.
// 그러므로, 밑에 json을 parse할 때 birthDate가 string으로 할당 됨.
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
  // key가 birthDate라면 value를 새로운 Date라는 object로 만들거고,
  // key가 birthDate가 아니라면 원래 있던 value를 return할거야.
});
console.log(obj);
rabbit.jump(); // rabbit에는 jump라는 함수가 할당되어 있다.
// obj.jump(); obj는 rabbit을 string한 후 parse한 것이기에, string할 때 함수가 없어진다. 그래서 함수가 없다는 오류가 뜬다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

