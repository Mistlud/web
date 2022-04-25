//String, https://blogpack.tistory.com/603

let str1 = "awf";
let str2 = new String('awf');

str1.substring(0,2);
str2.substring(0,2);

let result = str1.substring(0,2)
//result = str2.substring(0,2)

console.log(str1 === str2); //false(type)

const cal1 = '1+2*3';
const cal2 = new String('1+2*3');

console.log(eval(cal1));
console.log(eval(cal2));
//문자열이 아닌 객체를 파라메터로 받을 경우 객체를 그대로 반환
console.log(eval(cal2.valueOf()));

console.log(eval(cal1)===eval(cal2.valueOf())); //true

//trim, trimStart, trinEnd
//공백제거 정규식 (몰?름)
//slice, substring, substr (Depercated);

let num1 = 123; //type of => number
num1 = num1.toString(); //type of => string

let obj = {
  key:'Hong', value:15
}
console.log(typeof obj.toString());
console.log(typeof obj.value.toString());