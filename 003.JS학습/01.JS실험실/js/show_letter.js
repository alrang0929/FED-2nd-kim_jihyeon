// 글자등장1 JS - show_letter.js

// DOM 함수 객체 //////////////
const domFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////

//1. 구현요구사항:
// - 글자를 박스에 넣고 하나씩 일어나면서 등장함(.style3)

//2. 대상선정: .stage-letters
const stage = domFn.qs(`.stage-letters`);
console.log("대상:", stage);

//3. 글자 데이터 변수 할당하기
const myText = `김치전 먹구 싶당`;

//4. 데이터 글자 한 글자씩 태그로 싸기
//for of 사용!

//html태그변수
let hcode = '';

//지연시간 계산을 위한 순번증가
let seqNum = 0;

for(let x of myText){
// console.log(x);
if(x===' '){ //스페이스 공백처리
  hcode += `&nbsp;&nbsp;`;
}///////if

else{
hcode += `
<span style="transition-delay: ${seqNum*0.1}s"
>${x}</span>`;
}//else 글자일 경우 span처리

//중요!!! 지연시간에 곱해질 순번 증가하기!!!
seqNum++;

}////////////for of///////////////////

//5. 스테이지에 코드 출력하기
stage.innerHTML = hcode;

//6. 일정 시간 후 등장클래스 .on넣기

setTimeout(() => {
  
stage.classList.add('on');

}, 2000);
