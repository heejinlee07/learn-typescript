interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

export enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

//각각에 export하는 대신 마지막에 한꺼번에 export할 수도 있다.
//* export {Contact, PhoneType};
