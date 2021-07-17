function fetchItems(): string[] {
  var items = ['a', 'b', 'c'];
  return items;
}

var result = fetchItems();
console.log(result); //string 배열

//비동기 코드 실행 - Promise의 타입정의
function fetchItems2(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems2();
