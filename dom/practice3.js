// dom/practice3.js

let data = [{
  id: 101,
  name: '홍길동',
  age: 20
}, {
  id: 102,
  name: '김길동',
  age: 22
}, {
  id: 103,
  name: '박길동',
  age: 25
}];

document.addEventListener('DOMContentLoaded', callbackFnc);

function callbackFnc() {
  // 사용하는 변수선언.
  let table, thead, tbody, tr, td, text;
  // table 생성.
  table = document.createElement('table'); // <table>
  table.setAttribute('border', 1); // <table border=1>
  // thead에 하위요소를 작성한 다음 table 하위요소로 추가.
  thead = makeHead();
  table.appendChild(thead);
  tbody = makeBody(data);
  table.appendChild(tbody);
  // show 요소의 하위 table append.
  document.getElementById('show').appendChild(table);
  
  //buttev
  let btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    let obj = {};
    let userName = document.getElementById('userName').value;
    obj.name = userName;
    let userAge = document.getElementById('userAge').value;
    obj.age = userAge;
    obj.id = 110;

    document.querySelector('table>tbody').appendChild(makeTr(obj));
  })

  let newObj = {
    id: 105,
    name: '김민수',
    age: 25
  }
  document.querySelector('table>tbody').appendChild(makeTr(newObj));
}

function makeTr(obj) {

  let fields = ['name', 'age'];
  // 첫번째 라인
  let tr = document.createElement('tr');
  tr.setAttribute('id', obj.id);


  fields.forEach(field => {
    let td = document.createElement('td');
    let text = document.createTextNode(obj[field]+`${field=="age"?"살":""}`);
    td.appendChild(text);
    td.appendChild(td);
  });
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.addEventListener('click', function (eve) {
    eve.target.parentElement.parentElement.remove()
  })
  let td = document.createElement('td');

  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
}

function makeBody(objAry) {

  // [{name, age},{},{},{}]
  // tbody 생성.
  let tbody = document.createElement('tbody');

  objAry.forEach(function (obj) {

    // obj => {name:'', age: }
    // 첫번째 라인.
    let tr = document.createElement('tr');
    tr.setAttribute('id', obj.id);
    let td = document.createElement('td');
    let text = document.createTextNode(obj.name);
    td.appendChild(text); // <td>홍길동</td>
    tr.appendChild(td); // <tr><td>홍길동</td></tr>

    td = document.createElement('td');
    text = document.createTextNode(obj.age + '살');
    td.appendChild(text); // <td>20살</td>
    tr.appendChild(td); // <tr><td>홍길동</td><td>20살</td></tr>

    tbody.appendChild(tr); // <tbody><tr><td>홍길동</td><td>20살</td></tr></tbody>

  });
  return tbody;
}

function makeHead() {
  // thead 생성.
  let thead = document.createElement('thead');

  let tr = document.createElement('tr');
  let td = document.createElement('th');
  let text = document.createTextNode('이름');
  td.appendChild(text); // <td>이름</td>
  tr.appendChild(td); // <tr><td>이름</td></tr>

  td = document.createElement('th');
  text = document.createTextNode('나이');
  td.appendChild(text); // <td>나이</td>
  tr.appendChild(td); // <tr><td>이름</td><td>나이</td></tr>

  thead.appendChild(tr); // <thead><tr><td>이름</td><td>나이</td></tr></thead>

  return thead;
}

function deleteCallBack() {
  
}
