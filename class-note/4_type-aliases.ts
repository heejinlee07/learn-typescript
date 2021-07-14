//interface와 비교
interface Person {
  name: string;
  age: number;
}

// type 키워드 사용
type Person2 = {
  name: string;
  age: number;
};

//인터페이스를 이용한 타입정의
var seho: Person = {
  name: 'seho',
  age: 30,
};

//type별칭을 통한 타입정의
var seho2: Person2 = {
  name: 'seho',
  age: 30,
};

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
  return todo;
}
