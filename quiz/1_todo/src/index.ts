// * any: 모든 타입에 대해 허용
// 가급적 쓰지 않아야 하지만, 정말 모를때는 any라도 사용.
// "noImplicitAny": true

//할일 목록을 받는 object가 들어가는 배열
// 1. let todoItems: object[]
// 2. 구체적인 타입지정 let todoItems: { id: number; title: string; done: boolean }[];
// 3. 타입 별칭
/*
* 타입 별칭
{ id: number; title: string; done: boolean } 이 코드가 중복되기 때문에 아래와 같이 타입별칭으로 작성하여 코드중복을 줄일 수 있다.
type Todo = {
  id: number; title: string; done: boolean
}

let todoItems: Todo[]
*/
//?4. interface 사용

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[];

// api
//1. object[]
//2. 구체적인 타입지정 { id: number; title: string; done: boolean }[]
//3. interface 사용
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

//* void: return 값이 없다.
//1. 'todo: object'
//2. 구체적인 타입지정 { id: number; title: string; done: boolean }
//3. interface 사용
function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

// 1. 'todo:object'라고 타입 지정할 경우 todo의 object안에 done이 있다는 것이 보장되지 않고 있어서 에러발생.
// 2. 구체적인 타입지정 { id: number; title: string; done: boolean }
//3. interface 사용
function completeTodo(index: number, todo: Todo) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter((item) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: '아이템 4',
    done: false,
  };

  addTodo(item1);
  addTodo({
    id: 5,
    title: '아이템 5',
    done: false,
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
