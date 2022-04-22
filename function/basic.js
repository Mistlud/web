// function/basic.js

let sum = function (num1, num2) {
  return num1 + num2;
}

let result = sum(10, 20);
console.log(`결과는 ${result}`);

let fnc = (val1, val2) =>{
  var myval = 10;
  return val1 + val2 + myval;
}
// let fnc = function (val1, va2) {
// }


console.log(typeof fnc, fnc);
result = fnc(10, 20);
console.log(result);

const person1 = {
  fullName: 'Hong',
  age: 20,
  height: 175.3
}
const person2 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person3 = {
  fullName: 'Park',
  age: 22,
  height: 165.3
}

function myinfo(params) {
  var info =`${params.fullName}의 나이는 ${params.age}세이며, 키는 ${params.height}cm입니다.`
  return info
}
console.log(myinfo(person1));

const persons = [person1, person2, person3];
for (let person of persons) {
  let result = myinfo(person);
  console.log(result);
}

persons.forEach(function(val,ind,ary) {
  console.log(val, ind, ary);
  //console.log(myinfo(val));
});

console.clear();

let fncParam = function(val, ind, ary){
  console.log(myinfo(val, ind, ary));
};
persons.forEach(fncParam);
