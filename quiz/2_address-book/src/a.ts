function fetchItems(): string[] {
  var items = ['a', 'b', 'c'];
  return items;
}

var result = fetchItems();
console.log(result); //string 배열

//비동기 코드 실행 - Promise의 타입정의
//Promise의 타입을 지정하지 않으면 Promise<unknown>
function fetchItems2(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems2();
