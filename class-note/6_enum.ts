//특정 값들의 집합을 의미하는 자료형
//초기값이 없으면 0부터 차례로 증가

enum Shoes {
  Nike,
  Adidas,
}

var myShoes = Shoes.Nike;
console.log(myShoes); //0

enum stringShoes {
  newBalance = '뉴발란스',
  crocs = '크록스',
}

var myStringShoes = stringShoes.newBalance;

console.log(myStringShoes); //뉴발란스

//예제

enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  }
  if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}

//enum에서 제공하는 값만 파라미터에 넘길 수 있다.
askQuestion(Answer.Yes);
