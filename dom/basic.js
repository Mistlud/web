//dom

//DOM = 문서 객체 모델 의 생성, 삭제, 속성, 상속관계

document.addEventListener('DOMContentLoaded', function () {
  let h3tag = document.getElementsByTagName('h3');
  console.log(h3tag);
  h3tag[1].innerHTML = 'content changed.';

  let first = document.getElementById('first');//ele
  console.log('first');
  first.innerHTML = 'Git Changed.';

  //HTMLCollection 바이엘리먼츠바이태그네임/클래스네임, 바이엘리먼트바이아이디
  //NodeList 쿼리셀렉트(올)

  let newList = document.createElement('li');
  newList.innerHTML = 'Mango';
  console.log(newList);

  let ultag = document.querySelector('ul')
  ultag.append(newList);


}); //이벤트리스너의 매개값('이벤트명' 이벤트핸들러)
