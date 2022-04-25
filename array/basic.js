// 배열
// =[], new Array();

let arr = [10, 20];
let newarr = [3, 4, 5, 6]

// push(마지막 위치), unshift(첫번째 위치)

arr.push(3);
arr.unshift(2);

// pop(마지막 위치 지움), shift(첫번째 위치 지움)
arr.pop();
arr.shift();

newarr.forEach(element => {
  arr.push(element);
});

//.splice(위치, 크기, 대체값)

console.log(arr.toString());


let names = [];
let lo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
lo.split(' ').forEach(element => {
  names.push(element);
});
console.log(names.toString());

// foreach(반환없음), map(각 요소를 매핑-다른형태로 반환), filter(리턴조건을 만족한 값만 반환)

console.clear();

let result = names.map(params=> {
  return params.toUpperCase();
});
console.log(result);

// result = result.filter(function (params) {
//   return params.length>=10;
// });

result = names.map(params => {
  return params.toUpperCase();
}).filter(params => {
  return params.length >= 10;
});

console.log(result);
