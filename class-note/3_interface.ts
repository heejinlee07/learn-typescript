//반복되는 타입을 interface로 작성
interface User {
  age: number;
  name: string;
}

//변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호',
};

//함수에 인터페이스 활용
//자주 쓰게되는 형식
//이 함수는 항상 특정 형식을 가지는 데이터만 받음.
function getUser(user: User) {
  console.log(user);
}

const capt = {
  age: 20,
  name: '캡틴',
};

getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;

sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0]; //'a'
// arr[0] = 10 -> 10은 string 타입이 아니기 때문에 에러발생.

//인터페이스 딕셔너리 패턴
// 인덱싱과 유사한 방식
//왼쪽 속성의 타입은 string, 오른쪽은 RegExp
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

//value는 자동으로 string로 타입이 추론됨.
Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장 - OOP, 프로토타입의 느낌으로 인터페이스를 상속받아서 사용
interface Person {
  name: string;
  age: number;
}

// interface Developer {
//   name: string;
//   age: number;
//   language: string;
// }

//위에서 중복되는 코드는 Person의 상속을 받아서 사용할 수 있다. 키워드는 extends
interface Developer extends Person {
  language: string;
}

var captain: Developer = {
  name: 'hi',
  age: 100,
  language: 'ts',
};
