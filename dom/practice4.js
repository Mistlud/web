// dom/pr4.js

document.addEventListener('DOMContentLoaded', function () {
  let showDiv = document.querySelector('#show');
  showDiv.style.width = '250px';
  showDiv.style.height = '250px';
  showDiv.style.background = 'lightgray'

  let inputTag = document.getElementById('userName');
  inputTag.addEventListener('change', function () {
    let span = document.createElement('span');

    span.style.display = 'inline-block'
    span.style.paddingLeft = '2px'
    span.style.paddingRight = '2px'
    span.style.margin = '2px';

    span.innerHTML = document.querySelector('#userName').value; //getid로 안됨
    showDiv.appendChild(span);

    document.querySelector('#userName').value = '';
  })

  let add = document.querySelector('#addBtn')
  add.addEventListener('click', function () {

  })
});