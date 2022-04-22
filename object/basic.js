const member = {
  memberId: 'user1',
  memberName: 'Hong',
  getMemberName: function () {
    return '회원이름은 ' + this.memberName;
  },
  setMemberName: function (name) {
    this.memberName = name;
  }
}
console.log(member.memberId);
member.setMemberName('Hwang');
console.log(member.getMemberName());
member.getMemberName;
member.memberAge = 20;
delete member.memberAge;

member['memberPoint'] = 1000;
member.grade = function () {
  if (this.memberPoint > 500) {
    return 'gold';
  } else if (this.memberPoint > 1000) {
    return 'platinum'
  }
}
console.log(member.grade());

class Student{
  constructor(sno, sname){
    this.sno = sno;
    this.sname = sname;
  }
  get mathScore(){
    return this._mathScore;
  }
  set mathScore(score){
    this._mathScore = score;
  }
  getSno(){
    return this.sno;
  }
  setSno(sno){
    this.sno = sno;
  }
}

const s1 = new Student('1111', 'Hong');  // 변수선언 모듈이름 = new 생성자 (생성자에 해당한 파라메타)
const s2 = new Student('2222', 'Hwang');
console.log(`학생번호 ${s1.getSno()}`);
s1.engScore = 80;
s1.mathScore = 90;
console.log(s1.mathScore)

console.clear();

function Person (ssn, sname) {  // 자체가 생성자? 거시기라 식이 안먹힘
  this.ssn = ssn;
  this.sname = sname;
  this.getInfo = function(){
    return `주민번호 ${this.ssn}, 이름 ${this.sname}`
  }
};
const p1 = new Person('951111-1111111', 'Hong');
const p2 = new Person('971111-1111111', 'Hwang');
const p3 = new Person('991111-1111111', 'Park');

console.log(p1.getInfo());

