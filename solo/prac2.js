/**
 * post.js
 */


function addStudent(e) {
  e.preventDefault();
  console.log('Answer1')

  let no = document.querySelector('input[name="sno"]').value;
  let name = document.querySelector('input[name="sname"]').value;
  let eng = document.querySelector('input[name="eScore"]').value;
  let kor = document.querySelector('input[name="kScore"]').value;

  let xhtp = new XMLHttpRequest();
  xhtp.open('get', `addStudentServlet?sno=${no}&sname=${name}&eScore=${eng}&kScore=${kor}`);
  xhtp.send()
  xhtp.onload = function () {
    console.log(xhtp.responseText);
    let result = JSON.parse(xhtp.responseText);
    if (result.retCode == 'Success') {
      //successCallBack();
      successCallBack2(result);
    } else if (result.retCode == 'Fail') {
      failCallBack();
    }
  }
}

function makeTr(student) {
  let tr = document.createElement('tr');
  for (let field in student) {
    let td = document.createElement('td');
    td.innerHTML = student[field];
    tr.appendChild(td);
  }
  return tr;
}

function successCallBack2(retObj) {
  let obj = {
    studNo: retObj.studNo,
    studName: retObj.studName,
    engScore: retObj.engScore,
    korScore: retObj.korScore
  }
  document.getElementById('list').appendChild(makeTr(obj));


}

function successCallBack() {
  let no = document.querySelector('input[name="sno"]').value;
  let name = document.querySelector('input[name="sname"]').value;
  let eng = document.querySelector('input[name="eScore"]').value;
  let kor = document.querySelector('input[name="kScore"]').value;

  let obj = {
    sno: no,
    sname: name,
    engScore: eng,
    korScore: kor
  };
  let row = makeTr(obj);
  document.getElementById('list').appendChild(row);

}

function failCallBack() {
  alert('에러 발생');

}
