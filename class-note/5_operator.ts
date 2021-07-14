function logOnlyStringMessage(value: string) {
  console.log(value);
}

logOnlyStringMessage('hello');
// logOnlyStringMessage(100); 에러발생

//* 에러가 나지 않게 하려면
// type: any로 지정하면 되지만 그렇게 되면 타입을 따로 지정해주는 의미가 없어진다.

//Note: union Type -> |로 표시, or의 역할
// 이 경우 string 또는 number를 파라미터로 받을 수 있다.
// 타입가드: 특정타입으로 타입의 범위를 좁혀나가는(필터링) 과정
function logMessage(value: string | number) {
  console.log(value);
  if (typeof value === 'number') {
    // 이 안에 작성되는 value의 타입은 무조건 number
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    // 이 안에 작성되는 value의 타입은 무조건 string
    value.toString();
  }

  // value의 type이 number나 string이 아닌 경우 에러처리를 할 수 있다.
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  //Developer 또는 Person이 가지고 있는 속성을 모두 뱉어줄 것이라 생각된다. someone.name, someone.skill, someone.age
  //! 하지만 실질적으로는 두 인터페이스가 공통적으로 가지고 있는 someone.name에만 접근할 수 있다.
  someone.name;
}

function askSomeBody(someone: Developer & Person) {
  //eveloper 또는 Person이 가지고 있는 속성을 모두 사용가능.
  someone.name;
  someone.skill;
  someone.age;
}

//인터섹션 타입 : & - &로 묶인 것을 모두 포함하는 타입
var seho: string | number | boolean;
var seho2: string & number & boolean;

askSomeone({ name: 'ts', skill: '웹개발자' });
askSomeone({ name: 'javascript', age: 100 });
