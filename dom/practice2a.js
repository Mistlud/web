// prac2

// element table에 attribute border=1
// thead/이름, 나이
// tbody/tr id=101/td홍길동, 20살
//      /tr id=102/td김길동, 22살

document.addEventListener('DOMContentLoaded', function () {
//  function callbackFnc() {
    let div = document.createElement('div');
    let table = document.createElement('table')
    table.setAttribute('border', '1')
    let thead = document.createElement('thead')
    let th1 = document.createElement('th')
    th1.innerHTML = '이름'
    let th2 = document.createElement('th')
    th2.innerHTML = '나이'
    let tbody = document.createElement('tbody')
    let tr1 = document.createElement('tr')
    tr1.setAttribute('id', '101')
    let tr2 = document.createElement('tr')
    tr2.setAttribute('id', '102')

    let id101Table = ['홍길동', '20살']
    let id102Table = ['김길동', '22살']
    id101Table.forEach(element => {
      let td = document.createElement('td')
      td.innerHTML = element;
      tr1.appendChild(td)
    });
    id102Table.forEach(element => {
      let td = document.createElement('td')
      td.innerHTML = element;
      tr2.appendChild(td)
    });


    div.appendChild(table);
    table.appendChild(thead);
    table.appendChild(th1);
    table.appendChild(th2);
    table.appendChild(tbody);
    tbody.appendChild(tr1);
    tbody.appendChild(tr2);
    document.getElementById('lili').appendChild(div);
//  }
})
