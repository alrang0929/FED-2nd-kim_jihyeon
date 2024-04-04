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



/************************************************ 

[ 선언된 변수를 export default하기 ]

1. 일반적으로 선언과 할당을한 배열변수는 아래쪽에서 export default로
그 이름을 써주면 된다!
단! 받는 곳에서 import시 이름은 중요하지 않다! <내가 이름 지어줄 수 있음!!

ex)
const aa = [배열배열];
export default aa;

2. 변수 앞에 export default를 쓰게되면 변수선언과 변수명은 쓸 수 없다!

ex)
//배열인 경우
export default [배열];
//객체인 경우
export default {객체};
//함수인 경우
export default (함수)=>{};


************************************************/