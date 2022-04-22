// ob/pr.js
const jsonObj =
  `[{"id":1,"first_name":"Armin","last_name":"Bradforth","email":"abradforth0@state.gov","gender":"Male","ip_address":"119.31.135.166"},
{"id":2,"first_name":"Jeffie","last_name":"Salterne","email":"jsalterne1@ning.com","gender":"Male","ip_address":"7.123.4.237"},
{"id":3,"first_name":"Ardis","last_name":"Chesterfield","email":"achesterfield2@ucoz.com","gender":"Female","ip_address":"239.15.9.107"},
{"id":4,"first_name":"Evvy","last_name":"Ziemecki","email":"eziemecki3@telegraph.co.uk","gender":"Female","ip_address":"164.47.118.250"},
{"id":5,"first_name":"Binnie","last_name":"Spillane","email":"bspillane4@salon.com","gender":"Polygender","ip_address":"129.238.158.15"},
{"id":6,"first_name":"Bunni","last_name":"Brader","email":"bbrader5@seattletimes.com","gender":"Female","ip_address":"53.158.86.98"},
{"id":7,"first_name":"Sallyanne","last_name":"Bailey","email":"sbailey6@sogou.com","gender":"Female","ip_address":"71.240.64.234"},
{"id":8,"first_name":"Minny","last_name":"Marle","email":"mmarle7@telegraph.co.uk","gender":"Female","ip_address":"5.110.228.69"},
{"id":9,"first_name":"Adamo","last_name":"McQuilty","email":"amcquilty8@naver.com","gender":"Male","ip_address":"194.108.241.55"},
{"id":10,"first_name":"Dion","last_name":"Doubrava","email":"ddoubrava9@jigsy.com","gender":"Male","ip_address":"32.118.155.253"},
{"id":11,"first_name":"Christen","last_name":"Gradon","email":"cgradona@prweb.com","gender":"Female","ip_address":"247.161.218.109"},
{"id":12,"first_name":"Kippie","last_name":"Wormleighton","email":"kwormleightonb@admin.ch","gender":"Agender","ip_address":"82.125.103.191"},
{"id":13,"first_name":"Archer","last_name":"Pauer","email":"apauerc@engadget.com","gender":"Male","ip_address":"214.107.40.99"},
{"id":14,"first_name":"Hieronymus","last_name":"Staveley","email":"hstaveleyd@sphinn.com","gender":"Male","ip_address":"167.221.144.99"},
{"id":15,"first_name":"Mareah","last_name":"O'Toole","email":"motoolee@webmd.com","gender":"Female","ip_address":"202.30.152.96"}]`

const objAry = JSON.parse(jsonObj);

let fields = ['id', 'first_name', 'last_name', 'email'];

function showTable(ary) {
  let tableTag = '';
  // <table>
  //   <thead><tr><th></th> ... </tr></thead>
  //   <tbody><tr><td></td> ... </tr> ... </tbody>  
  // </table>
  tableTag += '<table border>';
  tableTag += createHead();
  tableTag += createBody(ary);

  tableTag += '</table>';

  document.write(tableTag);

}

function createHead() {
  let headTag = '';
  headTag += '<thead><tr>';
  fields.forEach(val => {
    headTag += `<th>${val}</th>`
    console.log(headTag);
  });
  headTag += '</tr></thead>';

  return headTag;
}

function createBody(ary) {
  let bodyTag = '';
  bodyTag += '<tbody>'

  ary.forEach(val => {
    bodyTag += '<tr>';
    fields.forEach(field => {
      bodyTag += `<td>${val[field]}</td>`
    });
    bodyTag += '</tr>';
  });

  bodyTag += '</tbody>'

  return bodyTag;
}

showTable(objAry);