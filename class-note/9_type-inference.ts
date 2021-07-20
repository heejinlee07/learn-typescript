//? 타입 추론 기본 1
//* 타입추론: 변수를 선언하거나 초기화 할 때 타입이 추론된다.(변수, 속성, 인자의 기본 값, 한수의 반환값 등의 설정에서 타입추론 발생)
//let x = 3;
//x에 대한 타입을 지정하지 않아도 x는 number로 간주된다.

//a의 타입을 지정하지 않았으므로 any
var a;

//function getB(b?:number):string
// b(number)와 c(string)를 더했기 때문에 return 값이 string
//e.g. 10 + '10' = 1010
function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

//? 타입 추론 기본2 - 제네릭
interface Dropdown<T> {
  value: T;
  title: string;
}

//Dropdown<string>라고 사용했기 때문에 추론에 의해 value는 string타입으로 추론된다.
var shoppingItem: Dropdown<string> = {
  value: 'shoes',
  title: 'nike',
};

//? 타입 추론 기본3 - 제네릭이 2개 이상일 때
interface Dropdown2<T> {
  value: T;
  title: string;
}

//DetailedDropdown에 들어간 type이 tag에 정의되고, Dropdown2의 속성도 가져옴과 동시에 Dropdown2의 value에도 DetailedDropdown에서 받은 type이 들어간다.
interface DetailedDropdown<K> extends Dropdown2<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'hi',
  tag: 'a',
};

//? Best Common Type
//? 몇 개의 표현식을 이용하여 가장 근접한 타입을 추론.
//var arr = [1, 2, 3]; => var arr: number
//var arr = [1, 2, true]; => var arr: (number | boolean)[]
//var arr = [1, 2, true, true, 'a']; => var arr: (number | boolean | string)[]
var arr = [1, 2, true, true, 'a'];
