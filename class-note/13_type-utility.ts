/*
todo: 유틸리티 타입
이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 타입 문법. 
유틸리티 타입을 꼭 쓰지 않더라도 기존의 인터페이스, 제네릭 등의 기본 문법으로 충분히 타입을 변환할 수 있지만 
유틸리티 타입을 쓰면 훨씬 더 간결한 문법으로 타입을 정의할 수 있다.
*/

//? Omit - 특정 타입에서 지정된 속성만 제거한 타입을 정의
interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
  name: '재택근무',
  phone: 12342223333,
  company: '내 방',
};

const chingtao: Omit<AddressBook, 'address' | 'company'> = {
  name: '중국집',
  phone: 44455557777,
};

//? Pick - 특정 타입에서 몇 개의 속성을 선택(pick)하여 타입을 정의
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

//상품목록을 받아오기 위한 api 함수
// function fetchProducts(): Promise<Product[]> {}

//interface Product의 일부만 가져옴.
//중복된 코드가 생겨남.
interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

//상품 목록 중 특정 아이템을 클릭했을 때
//*interface를 쓰는 경우
// function displayProductDetail(shoppingItem: ProductDetail) {}

//*유틸리티를 쓰는 경우
//특정 상품의 상세 정보를 나타내기 위한 함수
// Pick <대상타입, 가져다 쓸 key>
function displayProductDetail(
  shoppingItem: Pick<Product, 'id' | 'name' | 'price'>
) {}

//? Partial - 특정 타입의 부분 집합을 만족하는 타입.
interface Address {
  email: string;
  address: string;
}

type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {}; // 가능
const you: MayHaveEmail = { email: 'test@abc.com' }; // 가능
const all: MayHaveEmail = { email: 'capt@hero.com', address: 'Pangyo' }; // 가능

interface UpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}

//상품정보 업데이트(PUT)하는 함수
//상품정보를 모두 받을 수 있게 하되, 업데이트 하고자 하는 아이템만 업데이트 되도록.
//* 그러나 UpdateProduct와 Product에 불필요하게 중복된 코드가 생긴다.
// function updateProductItem(productItem: UpdateProduct) {}

//* Partial을 이용해서 코드중복을 줄인다.
// interface UpdateProduct에 정의된 것과 동일한 효과가 있다.
function updateProductItem(productItem: Partial<Product>) {}

//? 유틸리티 타입 구현 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

//1. 타입별칭
type UserProfileUpdate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
};

//2. 축약
//안에 있는 속성들은 반복문 돌리는 것과 같음.
//맵드타입
type UserProfileUpdate2 = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
};

type UserProfileKeys = keyof UserProfile;

//3. keyof를 통해 한번 더 축약
type UserProfileUpdate3 = {
  [p in keyof UserProfile]?: UserProfile[p];
};

//4. 제네릭 사용
type Subset<T> = {
  [p in keyof T]?: T[p];
};

//? Partial의 구현체
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
