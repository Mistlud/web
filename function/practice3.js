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

const newPersons = persons.map((val, idx) => {
  let newObj = {}; // {} <= 오브젝트 타입 선언 필요
  newObj.index = idx + 1;
  newObj.fullName = val.fullName
  newObj.age = val.age
  newObj.height = val.height
  return newObj; // 두개 값 리턴x => 새 오브젝트를 선언해 한목에 담아 리턴해야
});
console.log(newPersons);

function tableList(personAry) {
  document.write('<table border>')
  document.write(`<th>순번</th><th>이름</th><th>나이</th><th>신장</th>`)
  for (let person of personAry) {
    document.write('<tr>')
    for (let field in person) {
      document.write(`<td>${person[field]}</td>`)
    }
    document.write('</tr>')
  }
  document.write('</table>')
}
tableList(newPersons);
