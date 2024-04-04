//구체적인 데이터 구성처리를 위한 js : msg_format.js

//1. 선언적 함수를 만들어 아래쪽에서 export default 하기

//내용 메세지를 구성하는 함수
// function makeMessage(name,age){
// return`
//   나의 이름은 ${name}입니다.
//   나이는 ${age}살 입니다. 반갑습니다 ༼ つ ◕_◕ ༽つ
//   <br><br>
// `;
// }///makeMessage함수//////////////

//내보내기
// export default makeMessage;

//2. 선언적 함수를 만들고 함수 앞에서 export default 하기
// -> 선언적 함수의 형태가 그대로 유지되어야 한다! 그러나!!!! 이름은 중요하지 않다
// export default
// //내용 메세지를 구성하는 함수
// function makeMessage(name,age){
// return`
//   나의 이름은 ${name}입니다.
//   나이는 ${age}살 입니다. 반갑습니다 ༼ つ ◕_◕ ༽つ
//   <br><br>
// `;
// }///makeMessage함수//////////////




//3. 익명함수를 만들고 함수 앞에서 export default 하기
// -> 함수명이 중요하지 않으므로 익명함수로 내보내기를 해도 무관하다!
// export default
// //내용 메세지를 구성하는 함수
// function (name,age){
// return`
//   나의 이름은 ${name}입니다.
//   나이는 ${age}살 입니다. 반갑습니다 ༼ つ ◕_◕ ༽つ
//   <br><br>
// `;
// }///makeMessage함수//////////////


//4. 화살표 함수를 만들고 함수 앞에서 export default 하기
// -> 함수명이 중요하지 않으므로 화살표 함수로 내보내기를 해도 무관하다!
// 이떄! 화살표 함수는 return 키워드 생략이 가능할 경우 이를 생략!
export default
//내용 메세지를 구성하는 함수
(name,age) => 
`나의 이름은 ${name}입니다.
  나이는 ${age}살 입니다. 반갑습니다 ༼ つ ◕_◕ ༽つ
  <br><br>
`;
