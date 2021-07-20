interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  //Developer와 Person이 모두 될 수 있는 속성
  return { name: 'tony', age: 33, skill: 'iron making' };
}

//function introduce(): Developer | Person
var tony = introduce();

//위의 코드에서 분명히 { name: 'tony', age: 33, skill: 'iron making' }; skill이 있었음에도
//skill을 출력하려면 없다고 함.
// ! console.log(tony.skill);
//유니언 타입은 타입들의 공통된 속성만 접근할 수 있기 때문.

//* 타입단언을 이용해 이 문제를 해결할 수 있다.
if ((tony as Developer).skill) {
  //이렇게 하면 skill에 접근할 수 있다.
  console.log((tony as Developer).skill);
} else if ((tony as Person).age) {
  //* 하지만 이렇게 다른 경우에 대해서도 작성해 주어야 한다.
  console.log((tony as Person).age);
}

// 타입가드를 통해 타입 단언을 사용했을 때 불편한 점을 해결할 수 있다.
//? 타입가드 - true or false
//target is Developer와 같이 return 값이 Developer인지를 구분.
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
