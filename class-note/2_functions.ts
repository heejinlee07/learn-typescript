//TS 함수 - 파라미터의 타입을 정의, 리턴 값의 타입 정의
function tsSum(a: number, b: number) {
  return a + b;
}

tsSum(10, 20);

//TS 함수 - 리턴 값의 타입 정의
function add(): number {
  return 10;
}

// 함수의 타입을 정의하는 기본적인 방식
function func(a: number, b: number): number {
  return a + b;
}

func(10, 20); //30

// 지정된 파라미터 개수보다 적거나 큰 인자를 전달하면 에러 발생
// Expected 0-2 arguments, but got 4.
// sum(10, 20, 30, 40);

//함수의 옵셔널 파라미터 - 선택적 파라미터
//물음표를 사용하여 작성하면 지정된 파라미터 개수보다 적거나 클 때도 에러가 발생하지 않는다.
function log(a: string, b?: string) {}

log('hello world');
log('hello world', 'abc');
