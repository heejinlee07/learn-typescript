interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

// api
//* api를 호출해와서 응답에 대한 규칙, 또는 스펙을 정의할 때 제네릭을 가장 많이 사용한다.
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  //클래스의 constructor는 기본적인 타입 정의가 되지 않게 되어있다.
  constructor() {
    this.fetchData();
  }

  //fetchData는 api 함수 실행과 비동기 처리 후 셋업이지, return이 있는 것이 아니므로 void
  fetchData(): void {
    fetchContacts().then((response) => {
      this.contacts = response;
    });
  }

  // TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요
  findContactByName(name: string): Contact[] {
    return this.contacts.filter((contact) => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter((contact) => contact.address === address);
  }

  /*
  phones안에 여러가지 형태가 들어올 수 있는데,
  home, office, studio 등 때에 따라 다른 값이 들어온다.
  phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
  */

  //PhoneType은 enum
  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      (contact) => contact.phones[phoneType].num === phoneNumber
    );
  }

  //문자열을 전달할 때 오탈자가 발생할 수 있다.
  //이를 방지하기 위해 변수를 지정하여 타입제한을 해주는 것이 좋다.
  //이때 home, office, studio등 특정 형식이 들어올 것이니까
  //* enum으로 타입을 제한해주면 좋다.
  // findContactByPhone('homme');
  // findContactByPhone('officee');
  //* findContactByPhone(PhoneType.phone); 이런식으로 enum을 이용하여 호출한다.

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map((contact) => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map((contact) => contact.address);
  }
}

//var div: HTMLDivElement | null
let div = document.querySelector('div');

//div 타입이 HTMLDivElement이거나 null일 수도 있다고 했기 때문에
//* Object is possibly 'null' 이라는 경고를 볼 수 있다.
//!div.innerText;
//따라서 null이 아님을 보장해준다.
// 타입단언을 이용해서 null이 아님을 보장해준다.
//* let div = document.querySelector('div') as HTMLDivElement;

if (div) {
  div.innerText;
}

new AddressBook();
