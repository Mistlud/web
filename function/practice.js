// practice.js

//Object, forEach 연습

const number = [23, 45, 32, 55, 34, 72];
let sum = 0;

let evenSum;
number.forEach(params => {
  if (params % 2 == 0) {
    sum += params;
  }
  evenSum = sum;
});
console.log(`짝수합 : ${evenSum}`);
sum=0;

let oddSum;
number.forEach(params => {
  if (params % 2 == 1) {
    sum += params;
  }
  oddSum = sum;
});
console.log(`홀수합 : ${oddSum}`);
sum=0;

number.forEach(params => {
  sum += params;
});
console.log(`전체합 : ${sum}`);
sum=0;
