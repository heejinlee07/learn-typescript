//? 타입단언
var a;
a = 20;
a = 'a';
// 맨 처음 선언된 변수 a의 타입이 any이고, 변수 a 대한 여러 연산이 있어서 값이 바꼈더라도,
//var b = a; 의 type은 여전히 any이다.

//* 개발자가 이미 타입을 알고 있고, 개발자가 정한 타입으로 간주하라는 것이 타입단언이다.
// a as string;이라고 단언했기 때문에 이제 b의 타입은 any가 아니라 string가 된다.
var b = a as string;

/* 
* DOM API 조작시 많이 사용된다.
<div id='app'>hi</div>
document.querySelector('div'); or document.querySelector('#app');
*/

//var div: HTMLDivElement
var div = document.querySelector('div');
//div.innerHTML, div.innerText 등으로 내부 속성에 접근 할 수 있음.

// 실무에서는 div를 querySelector로 가져오는 시점에 div가 있다고 보장되지 않음.
// 위의 코드처럼 이상적으로 사용할 수 없음.
// div가 있는지 확인을 한 다음에 조작을 하게됨.
// 특정 시점에 div 값이 HTMLDivElement가 아니라 null이 될 수 있음.
if (div) {
  div.innerText;
}

//? HTMLDivElement 타입단언예시
let div2 = document.querySelector('div');

//div 타입이 HTMLDivElement이거나 null일 수도 있다고 했기 때문에
//* Object is possibly 'null' 이라는 경고를 볼 수 있다.
div.innerText;
//따라서 null이 아님을 보장해준다.
// 타입단언을 이용해서 null이 아님을 보장해준다.
//* let div = document.querySelector('div') as HTMLDivElement;

if (div) {
  div.innerText;
}
