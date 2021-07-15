class Persons {
  //클래스에서 사용할 멤버 변수 정의
  //private,public 키워드를 통해 변수의 접근 범위 지정
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
