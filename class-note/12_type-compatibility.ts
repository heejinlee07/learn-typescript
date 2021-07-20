// ? 타입호환 - 특정 타입이 다른 타입에 잘 맞는지를 점검.

//todo: 인터페이스
interface Developers {
  name: string;
  skill: string;
}
interface Persons {
  name: string;
}

//Developers와 Persons이 호환되는가?
var developer: Developers;
var person: Persons;

//오른쪽에 있는 타입 person이 왼쪽에 있는 타입 developer보다 구조적으로 더 커야 할당이 가능하다.
//developers의 속성은 2개(name: string; skill: string;)이고, persons의 속성은 1개(name:string);
//! Property 'skill' is missing in type 'Persons' but required in type 'Developers'.
//! 그렇기 때문에 developer = person으로 할당할 수 없다.

//이 경우는 person의 속성이 더 많기 때문에 할당이 가능하다.
person = developer;

//todo: 클래스
class People {
  name: string;
}

//Developer와 People이 호환되는가?
var developer: Developers;
var people: People;

//! developer = new People(); - 에러발생
//! Property 'skill' is missing in type 'People' but required in type 'Developers'.
//클래스도 동일하게 좌항의 속성보다 우항의 속성이 더 적을 때 할당하려고 하면 할당되지 않는다.

//todo: 함수
//파라미터 개수의 차이가 있고, num보다 sum이 구조적으로 더 큰 함수다.
var num = function (a: number) {
  console.log(a);
};

var sum = function (a: number, b: number) {
  console.log(a + b);
};

//! num = sum; - 에러발생
//!Type '(a: number, b: number) => void' is not assignable to type '(a: number) => void'

sum = num;

//todo: 제네릭
interface Empty<T> {}

var empty1: Empty<string>;
var empty2: Empty<number>;

//* interface Empty는 비어있기 때문에 어떤 값이 들어와도 동일하다고 간주된다.(호환된다.)
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

//동일한 속성이 있지만 타입이 달라진다.
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

//!notEmpty1 = notEmpty2; - 에러 발생
//!Type 'NotEmpty<number>' is not assignable to type 'NotEmpty<string>'. Type 'number' is not assignable to type 'string'
//!notEmpty2 = notEmpty1; - 에러 발생
//!Type 'NotEmpty<string>' is not assignable to type 'NotEmpty<number>'. Type 'string' is not assignable to type 'number'.
