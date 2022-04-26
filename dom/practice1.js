document.addEventListener('DOMContentLoaded', function () {

  let menus = ['아이스 아메리카노', '카페 라테', '레몬 에이드', '카페 모카']
  let ultag = document.createElement('ul')

  // for (let i = 0; i < menus.length; i++) {
  //   let litag = document.createElement('li');
  //   litag.innerHTML = menus[i];
  //   ultag.appendChild(litag);
  // }
  menus.forEach(element => {
    let litag = document.createElement('li');
    litag.innerHTML = element;
    ultag.appendChild(litag);
  });


  document.getElementById('lili').appendChild(ultag);
});