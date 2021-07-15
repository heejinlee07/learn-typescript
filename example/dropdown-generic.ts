interface Email {
  value: string;
  selected: boolean;
}

//1. { value: string; selected: boolean }[]
//2. interface Email
const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

interface ProductNumber {
  value: number;
  selected: boolean;
}

interface TrunFalse {
  value: boolean;
  selected: boolean;
}

// 1.{ value: number; selected: boolean }[]
// 2. interface ProdeuctNumber
const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

//1. item: { value: string; selected: boolean }
//2. 유니언 타입 정의 - item: { value: number; selected: boolean } | { value: string; selected: boolean }
//3. 인터페이스를 이용한 유니언 타입 정의 item: Email | ProductNumber

//emails, numerOfProducts의 타입을 모두 수용할 수 있는 타입 정의가 필요.
//제네릭 활용
function createDropdownItem(item: Email | ProductNumber) {
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
