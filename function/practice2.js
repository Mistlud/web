//p2
const num1 = 10;
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

const persons = [person1, person2, person3];

//평균 출력
let avgAge = 0;
var sum = 0;
for (let person of persons) {
  sum += person.age;
}
avgAge = sum / persons.length;
console.log('평균 나이 : ' + avgAge)
sum = 0;


let avgAgeFnc = val => {
  sum += val.age;
}
let avgHeightFnc = val => {
  sum += val.height;
}

persons.forEach(avgHeightFnc);
const avg = sum / persons.length;
console.log('평균 : ' + avg)
sum = 0;

//이름, 나이, 키 출력
console.clear();

let tag = "";

let allPerson = ((val, idx) => {
  if (idx == 0) {
    tag += '<ul>';
  }
  tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
  if (idx == persons.length - 1) {
    tag += '</ul>';
  }
});
persons.forEach(allPerson);



console.log(tag);
document.write(tag);