interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// //! DropdownItem을 제네릭으로 쓰면, 아래 정의된 Email, ProductNumber, TrunFalse interface는 없어도 된다.
// interface Email {
//   value: string;
//   selected: boolean;
// }

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// interface TrunFalse {
//   value: boolean;
//   selected: boolean;
// }

//1. { value: string; selected: boolean }[]
//2. interface Email -> Email[]
//3. generic - DropdownItem<string>[]
const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// 1.{ value: number; selected: boolean }[]
// 2. interface ProdeuctNumber - ProductNumber[]
// 3. generic - DropdownItem<number>[]
const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

//1. item: { value: string; selected: boolean }
//2. 유니언 타입 정의 - item: { value: number; selected: boolean } | { value: string; selected: boolean }
//3. 인터페이스를 이용한 유니언 타입 정의 item: Email | ProductNumber
//4. generic의 유니언 타입 정의 item: DropdownItem<string> | DropdownItem<number>
//5. 함수 파라미터에 유니언이 들어가는 코드를 제네릭을 넘겨서 사용하면 더 깔끔.
/*
함수 호출시 타입을 같이 넘기고, 
createDropdownItem<string>(email)
function createDropdownItem<T>(item: DropdownItem<T>) 이런식으로 사용하여 유니언을 제거할 수 있다.
*/
//emails, numerOfProducts의 타입을 모두 수용할 수 있는 타입 정의가 필요.
//제네릭 활용
function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
});

/*
interface, union을 사용하면 여러 타입을 수용할 수 있지만 작성해야 하는 코드가 많아진다.
제네릭을 사용하여 코드량을 줄일 수 있다.
*/
