function add(a: number,b:number): number {
  return a+b;
}

//Argument of type 'string' is not assignable to parameter of type 'number'.
var result = add(10, 20);

//result.까지만 입력해도 자동완성으로 api 사용가능
result.toLocaleString();

