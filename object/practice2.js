// ob/pr2.js

// 달력

let year = 2022;
let month = 4;
document.write(`<h3>${year}년 ${month}월의 달력<h3>`)
document.write('<table border="1"><thead><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></thead>')
document.write('<tbody><tr>');
for (let i = 0; i < getFirstday(year, month); i++) {
  document.write('<td></td>')
}
for (let i = 1; i <= getLastDay(year, month); i++) {
  document.write(`<td>${i}</td>`)
  if ((i + getFirstday(year,month)) % 7 == 0) {
    document.write('</tr><tr>')
  }
}
document.write('</tr></tbody></table>')

function getLastDay(year, month) {
  //말일 정보를 취득하는 함수
  switch (month) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
  }

}

function getFirstday(year, month) {
  switch (month) {
    case 1:
      return 6;
    case 2:
      return 2;
    case 3:
      return 2;
    case 4:
      return 5;
  }
}
