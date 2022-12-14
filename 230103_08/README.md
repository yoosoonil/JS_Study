## Array ๐ฏ

### 1. Declaration
```javascript
const arr1 = new Array();
const arr2 = [1, 3];
```
### 2. Index position
```javascript
const fruits = ['๐', '๐'];
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
for (let fruit of fruits) { // let ๋ค์ fruit๋ผ๊ณ  ํ ๋น
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));
```

### 4. Addition, deletion, copy
- push: add an item to the end
```javascript
fruits.push('๐', '๐');
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
fruits.unshift('๐', '๐');
console.log(fruits);
```
- shift: remove an item from the beninning
```javascript
fruits.shift();
console.log(fruits);
```

**note! shift, unshift are slower than pop, push**
> shift์ unshift๋ ์ ์ฒด๋ฐฐ์ด์ ์ฎ๊ฒผ๋ค๊ฐ ์์ ์ธ๋ฑ์ค๋ฅผ ์์ ํ๊ธฐ ๋๋ฌธ์ ๋๋ฆฌ๋ค. pop๊ณผ push๋ฅผ ์ฌ์ฉํ์.

```javascript
fruits.push('๐', '๐', '๐');
console.log(fruits);
fruits.splice(1, 1); // ์ธ๋ฑ์ค [1]์ ์ง์
console.log(fruits);
fruits.splice(1, 1, '๐','๐');
console.log(fruits);

// combine two arrays
const fruits2 = ['๐','๐'];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);
```

### 5. Searching
- indexOf: find the index
```javascript
console.log(fruits);
console.log(fruits.indexOf('๐'));
console.log(fruits.indexOf('๐')); // ๋ฐฐ์ด์์ ํด๋น ๊ฐ์ด ์์ผ๋ฉด -1 ์ถ๋ ฅ

// includes
console.log(fruits.includes('๐'));
console.log(fruits.includes('๐'));

// lastIndexOf
console.clear();
fruits.push('๐');
console.log(fruits);
console.log(fruits.indexOf('๐'));
console.log(fruits.lastIndexOf('๐'));// Array ๐ฏ
```