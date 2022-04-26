
document.addEventListener('DOMContentLoaded',function () {
  let div = document.createElement('div');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  span1.innerHTML = '홍길동';
  span1.setAttribute('id', 'name');
  span2.innerHTML = '20';
  span2.setAttribute('class', 'age')
  let hi = document.createTextNode(' - ')

  div.appendChild(span1);
  div.appendChild(hi);
  div.appendChild(span2);
  
  document.getElementById('lili').appendChild(div);

})