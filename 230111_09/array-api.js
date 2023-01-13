// Q1. make a string out of an array(주어진 배열을 str으로 변환)
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string(주어진 str을 배열로 변환)
{
  const fruits = '🍎, 🍉, 🍒, 🍌';
  const result = fruits.split(',', 2);
  console.log(result);
}
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); // 배열자체를 거꾸로 return
  console.log(result);
}
// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find(function(student, index) {
    return student.score === 90;
  });
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{ // map -> mapping api
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  // 어떤 한 항목이 조건에 맞으면 된다.
  const result1 = students.some((student) => student.score < 50);
  console.log(result1);

  // 모든 항목이 조건에 맞아야 된다.
  // '!'는 true를 false로, false를 true로 바꾼다.
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. comput students' average score
{
  console.clear();
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result/students.length); 
  // return하는 값이 prev로 순차적으로 전달되어진다.
}

// Q10. make a string containing all the scores
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // sort()라는 method는 오름차순으로 바꿔준다.
  const result = students
      .map((student) => student.score)
      .sort((a, b) => b - a)
      .join();
  console.log(result);
}