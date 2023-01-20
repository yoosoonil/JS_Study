## JSON
### JSON이란? 
JavaScript Object Notation라는 뜻.

#### 1. Object to JSON
object를 json으로 변환 해주는 것이 `stringfy`이다.
```JavaScript
stringfy(obj)
let json = JSON.stringify(true);
console.log(json);
```
그리고 json은 object이기에 key와 value가 존재한다.
```JavaScript
json = JSON.stringify(['apple', 'banana']);
console.log(json);
// ("apple", "banana") 라고 출력된다.
```
한번 예시를 들어서 object를 json으로 변환해보자.
```JavaScript
const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  // new Date라는 object를 할당했기에 birthDate는 Date라는 object 그 자체이다.
  birthDate: new Date(), 
  jump: () => {
    // json에는 함수가 포함되지 않는다.
    console.log(`${name} can jump!`); 
  }
}
// rabbit이라는 object를 json으로 변환해주었다.
json = JSON.stringify(rabbit)
console.log(json);
// -> {
//     "name":"tori",
//     "color":"white",
//     "size":null,
//     "birthDate":"2023-01-20T12:23:31.880Z"
//    } 라는 json 생성

// array(배열)의 property(color)만 전달
json = JSON.stringify(rabbit, ['color']); 
console.log(json);
// -> {"color":"white"}

json = JSON.stringify(rabbit, (key, value) => {
  // 모든 key와 value들이 콜백함수에 전달.
  console.log(`key: ${key}, value: ${value}`); 
  return value;
})
// -> key: , value: [object Object]
//    key: name, value: tori
//    key: color, value: white
//    key: size, value: null
//    key: birthDate, value: 2023-01-20T12:28:00.476Z
//    key: jump, value: () => {
//     console.log(`${name} can jump!`);
//   }
// jump라는 object를 string 받았기 때문에, 함수자체가 string으로 출력된다.
// 즉, 함수가 아닌 것이고, 기능이 없다.
```

#### 2. JSON to Object
json을 object로 변환 해주는 것이 `parse`이다.

다시, rabbit이라는 object를 json으로 변환하고, `parse`를 이용하여 json을 object로 변환해보자.
```JavaScript
// rabbit이라는 object를 json으로 만듦.
json = JSON.stringify(rabbit); 
// 위 json을 출력 birthDate가 string형태로 만들어짐.
// 그러므로, 밑에 json을 parse할 때 birthDate가 string으로 할당 됨.

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
  // key가 birthDate라면 value를 새로운 Date라는 object로 만들거고,
  // key가 birthDate가 아니라면 원래 있던 value를 return할거야.
});
// object로 변환한 rabbit을 출력해보자.
console.log(obj);
// -> {
//    name: 'tori', 
//    color: 'white', 
//    size: null, 
//    birthDate: Fri Jan 20 2023 21:33:43 GMT+0900 (한국 표준시)
//   }
// 즉, name, color, size는 원래 있던 value를 return 한거다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
// -> 각각의 현재 날짜가 출력된다.
```
