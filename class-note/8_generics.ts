//text는 any로 추론되어서 어떤 타입도 다 받음.
function logJsText(text) {
  console.log(text);
  return text;
}

logJsText(10);
logJsText('10');
logJsText(true);

//* 제네릭
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// 함수 호출시 파라미터에 대한 타입도 지정해서 값을 넘긴다.
logText<string>('hi');

//*유니언
function logUnionText(text: string | number) {
  console.log(text);
  return text;
}

const a = logUnionText('a');
//a는 여전히 string|number
//string|number이기 때문에 string을 사용하는 split같은 함수는 쓸 수 없다.
logUnionText(10);

//* 제네릭을 이용한 함수 선언
function logGenericText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logGenericText<string>('abc');
str.split(''); //string으로 썼기 때문에 split를 써도 에러발생하지 않음.

const login = logGenericText<boolean>(true);

logGenericText('a');
logGenericText(10);

//* 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj: Dropdown = { value: 'a', selected: false };

// todo: value 값이 언제든 바뀔 수 있다면, 제네릭으로 정의를 하는(타입을 선언하는 시점에) 타입을 추가적으로 넘겨서 GenericDropdown의 type을 바꿔보겠다.
interface GenericDropdown<T> {
  value: T;
  selected: boolean;
}

//<string>이면 value 값의 타입은 string이 되고, <number>이면 value 값의 타입은 number이다.
const obj2: GenericDropdown<string> = { value: 'a', selected: false };
