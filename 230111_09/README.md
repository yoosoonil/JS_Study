## Array 🎯

### 1. Declaration
```javascript
const arr1 = new Array();
const arr2 = [1, 3];
```
### 2. Index position
```javascript
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
```

### 3. Looping over an array
- print all fruits
```javascript
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) { // let 뒤에 fruit라고 할당
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));
```

### 4. Addition, deletion, copy
- push: add an item to the end
```javascript
fruits.push('🍓', '🍑');
console.log(fruits);
```

- pop: remove an item from the end
```javascript
fruits.pop();
fruits.pop();
console.log(fruits);
```
- unshift: add an item to the beginning
```javascript
fruits.unshift('🍓', '🍑');
console.log(fruits);
```
- shift: remove an item from the beninning
```javascript
fruits.shift();
console.log(fruits);
```

**note! shift, unshift are slower than pop, push**
> shift와 unshift는 전체배열을 옮겼다가 앞에 인덱스를 수정하기 때문에 느리다. pop과 push를 사용하자.

```javascript
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); // 인덱스 [1]을 지움
console.log(fruits);
fruits.splice(1, 1, '🍎','🍉');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍒','🍐'];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);
```

### 5. Searching
- indexOf: find the index
```javascript
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉')); // 배열안에 해당 값이 없으면 -1 출력

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🍒'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));// Array 🎯
```