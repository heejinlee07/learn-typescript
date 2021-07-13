// function sum(a,b) {
//   return a + b;
// }

// sum(10, '20'); //30을 기대했는데 1020이 출력된다.
// var result = sum(10,20);

// //TS처럼 api를 자동완성으로 사용할 수 없다. toLocaleString를 모두 입력해야한다.
// result.toLocaleString();


//JS에서 jsdoc과 ts-check로 ts처럼 사용하기
// @ts-check

/**
 * 
 * @param {number} a 첫번째 숫자 
 * @param {number} b 두번째 숫자
 * @returns 
 */

function sum(a,b){
  return a+b;
}

sum(10, 20);