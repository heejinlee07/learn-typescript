/*
todo: 맵드타입
기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법. 
마치 자바스크립트 map() API 함수를 타입에 적용한 것과 같은 효과
*/

/*
맵드타입 기본문법
{ [ P in K ] : T }
{ [ P in K ] ? : T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ? : T }
*/

//? 맵드타입예제
type Heroes = 'Hulk' | 'Capt' | 'Thor';

//for in 반복문 코드
var arr = ['a', 'b', 'c'];
for (var key in arr) {
  //arr 각각의 요소에 접근
  console.log(arr[key]);
}

type HeroAges = { [K in Heroes]: number };

//? 기존에 존재하는 타입을 맵드타입의 문법을 이용하여 새로운 타입으로 변환시킴.
const ages: HeroAges = {
  Hulk: 100,
  Capt: 100,
  Thor: 1000,
};
