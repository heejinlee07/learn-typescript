//JS 문자열 선언방식
const str = 'hello';

//TS 문자열, 숫자 선언방식
const tsStr: string = 'hello';
const tsNum: number = 10;

//TS 배열 선언방식 <>안에 작성된 타입만이 배열의 요소로 사용가능
//<string>으로 작성되었는데 number를 넣으면 에러 발생.
const tsArr: Array<number> = [1, 2, 3];
const heroes: Array<string> = ['Capt', 'hulk', 'thor'];
//배열 리터럴을 통해 선언할 수도 있다.
const items: number[] = [1, 2, 3];

//TS 튜플 - 배열의 특정 위치와 타입까지 설정.
const locations: [string, number] = ['gangnam', 100];

//TS 객체
const obj: object = {};
const person: object = {
  name: 'capt',
  age: 100,
};

//객체의 구체적인 타입 설정
const tsPerson: { name: string; age: number } = {
  name: 'capt',
  age: 100,
};

//진위값
const show: boolean = true;
