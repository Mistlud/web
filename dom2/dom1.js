let data = [{
    studNo: 101,
    studName: 'Firis',
    engScore: 80,
    korScore: 70
  },
  {
    studNo: 102,
    studName: 'Riane',
    engScore: 88,
    korScore: 90
  },
  {
    studNo: 103,
    studName: 'Ir',
    engScore: 92,
    korScore: 80
  },
  {
    studNo: 104,
    studName: 'Oscar',
    engScore: 81,
    korScore: 78
  }
];
let list = document.getElementById('list');
data.forEach((element) => {
  list.appendChild(makeTr(element));
});

let changeBtn = document.querySelector('input[type="button"]');
changeBtn.addEventListener('click', function (e) {
  let targetTr = document.querySelectorAll('#list>tr')
  //console.log(targetTr)
  let sno = document.getElementById('sno').value;
  let seng = document.getElementById('seng').value;
  let skor = document.getElementById('skor').value;

  targetTr.forEach(element => {
    if(element.children[0].innerHTML == sno){
      element.children[2].innerHTML = seng;
      element.children[3].innerHTML = skor;
    }
  });
});

function changeCallBack1(e) {
  e.preventDefault();
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let seng = document.getElementById('seng').value;
  let skor = document.getElementById('skor').value;
  if(!sno||!sname||!seng||!skor){
    alert('값을 찾을 수 없음')
    return;
  }
  let searchTr = document.getElementById(`sno_${sno}`);
  console.log(searchTr)
  searchTr.children[1].innerHTML = sname;
  searchTr.children[2].innerHTML = seng;
  searchTr.children[3].innerHTML = skor;
}



function makeTr(student) {
  let tr = document.createElement('tr');
  tr.setAttribute('id', `sno_${student.studNo}`);
  tr.addEventListener('click', function (e) {
    e.stopPropagation();
    //console.log(this.children[0].innerHTML);
    document.getElementById('sno').value = this.children[0].innerHTML;
    document.getElementById('sname').value = this.children[1].innerHTML;
    document.getElementById('seng').value = this.children[2].innerHTML;
    document.getElementById('skor').value = this.children[3].innerHTML;

  }, true)
  for (let field in student) {
    let td = document.createElement('td')
    td.innerHTML = student[field];
    tr.appendChild(td);
  }
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';

  btn.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.remove();
  }, true);
  let td = document.createElement('td');
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
}
