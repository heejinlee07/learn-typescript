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

//* 제네릭의 타입 제한 - T는 반환하지 않고 생략해도 되지만 명시적으로 선언한 것.
//1. logTextLength<T>(text:T):T 라고 사용하면 logTextLength('hi');를 넘겼더라도 console.log(text.length);에서 에러가 난다.
//TS 입장에서는 이 시점에 length가 있는지 없는지 알지 못하기 때문.
//2. 타입을 배열로 작성하면 length를 구할 수 있다.
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength(['hi', 'abc']);

//* 제네릭의 타입 제한 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

//제네릭으로 받은 타입은 항상 LengthType의 하위 타입이므로 LengthType 에 있는 속성이 있는 상태에서 추가되는 것.
function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength2('a'); //o
logTextLength2(10); //x length가 제공되지 않기 때문.
logTextLength2({ length: 10 }); //o

//* 제네릭의 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  stock: number;
}

//ShoppingItems에 있는 key 중 한 가지가 제네릭이 된다
function getShoppingItemOption<T extends keyof ShoppingItems>(
  itemOption: T
): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption('a');

getShoppingItemOption('name');
