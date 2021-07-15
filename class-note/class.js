//* 생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const capt = new Person('캡틴', 100);

//* 클래스, ES6 - ES2015문법
class Person {
  // 클래스 로직
  // 인스턴스 생성
  constructor(name, age) {
    //초기화 메서드
    console.log('생성되었습니다.');
    this.name = name;
    this.age = age;
  }
}

//seho라는 변수에 클래스로 초기화시킨(인스턴스를 만들어낸 객체)를 담는다.
const seho = new Person('세호', 30); // 생성되었습니다
console.log(seho);
/*
Person: {
  "name": "세호",
  "age": 30
} 
*/

//? Person()과 클래스 Person은 똑같다.
//? 생성자 함수의 synthetic sugar가 클래스다.

//자바스크립트 프로토타입
//자바스크립트는 프로토타입 기반의 언어

const user = { name: 'capt', age: 100 };
//user의 속성 + admin을 덧붙임
// const admin = { name: 'capt', age: 100, role: 'admin' };

// user의 정보를 admin에서 재활용할 수 있도록 admin의 prototype 작성

const admin = {};
// 프로토타입의 상위에 유저객체를 준다.
// user에서 가지고 있던 속성을 내려받아서(상속받아서) 사용할 수 있음.
admin.__proto__ = user;
//상속받은 속성 + role 속성 추가
admin.role = 'admin';

//object - 기본적으로 제공되는 api나 메서드를 쓸 수 있다. 빌트인 자바스크립트 api
const obj = { a: 10 };
Object.keys(obj); //["a"]
