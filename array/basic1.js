//arr basic1

//reduce() 결과값이 지정하는 값으로 string, number, 배열
//reduce 누산기, 최후 괄호 안에 초기값 지정(빈 배열 가능)
//배열 길이만큼 첫 번째 인수가 돌며, 두 번째 인수가 돌고 있는 현재값
//세 번째 인수는 현재 값의 인덱스, 네 번째 인수는 현재 배열 전체

const arr = [23, 4, 77, 51, 63, 34, 62, 92];

let result = arr.reduce((acc, e, i, a) => {
  acc += e;
  return acc;
});

result = arr.reduce((acc, now) => {
  acc.push(now * 2);
  return acc;
}, []);

result = arr.reduce((acc, now) => {
  if (now >= 50) {
    acc.push(now)
  }
  return acc;
}, []);

console.log(result);
