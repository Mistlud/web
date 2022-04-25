// dom pra

document.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    let name = document.getElementById('userName').value;
    let age = document.getElementById('userAge').value;
    if(!name || !age){
      alert('입력하세요');
      return;
    }
    let span1 = document.createElement('span'); //<span>이너HTML(이너텍스트)</span>
    span1.innerHTML = name;
    let span2 = document.createElement('span');
    span2.innerHTML = age;
    let div1 = document.createElement('div');
    div1.appendChild(span1);
    div1.appendChild(span2);

    document.getElementById('show').appendChild(div1);
  });
});
