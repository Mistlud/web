//p2

let sso = ['970101-1234567', '970101 2234567', '9701011234567', '970101/1234567']

let ssn = '';
sso.forEach(val => {
  if (val.length == 13) {
    ssn += val+' ';
  } else {
    ssn += val.replace(/\D/, '')+' ';
  }
});
ssn = ssn.trim();

function checkGender(ssn) {
  if (ssn.charAt(6)==2) {
    return console.log('여자')
  }else{
  return console.log('남자')
  }
}

ssn.split(' ').forEach(val => {
  console.log(val)
  checkGender(val);
});


// function genderCheck(ssn) {
//   let gender = ssn.replace(/\D/, '').charAt(6);
//   if(gender ==1 || gender ==3){
//     '남자'
//   }else{
//     '여자'
//   }
// }
// sso.forEach(element => {
//   let result = checkGender(element);
//   console.log(result)
// });
