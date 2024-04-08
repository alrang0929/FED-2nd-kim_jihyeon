// DKB PJ 메인 JS - main.js //////////////
// 모듈로 호출된 JS에서는 다른 외부JS를 import로 호출가능!
// import하려는 파일에서 반드시 함수,변수 등을 export해야함!
import slideFn from "./slide.js";
// 부드러운 스크롤 불러오기
import { startSS, setScrollPos } from "./smoothScroll23.js";
import myFn from "./my_function.js";
//////////////////////////////////////////////////////////////////////////
//데이터셋팅 불러오기
import * as dkbData from "../data/DKB_data.js";

////////////구현코드 파트///////////////////////

//1. 부드러운 스크롤 호출
startSS();

console.log("모듈로 메인JS호출!!!", document.querySelector(".top-menu"));

// slideFn 슬라이드 기능함수 호출!
slideFn();

//. 인트로 동영상 클릭시 동영상 태그 넣기
//이벤트대상=변경대상 :intro-mv-img
const introMv = myFn.qs(".intro-mv-img");
introMv.onclick = () => {
  console.log("클릭");

  //1. 동영상넣기
  introMv.innerHTML = `<video src="./images/intro_mv.mp4" autoplay="" controls=""></video>`;

  //2. 클래스 off 지우기 (play 버튼 제거)
  introMv.classList.remove("off");
}; //////클릭 이벤트 함수

//2. 미리보기 파트 내용 넣기
//로딩시 바로 실행됨 -> 실행코드를 지역화 하고자할 때 함수로 만들고 이를 호출하면됨. 그러나 불편함!

// [코드의 지역화(코드랩핑)]
//익명함수로 만들고 바로 실행하게 하면 된다
//방법: (익명함수)() -> 바로 실행함
//실제코드01: ((익명함수)=>{코드})()
//실제코드02: (function(){코드})()
//->이렇게 하는 목적: 변수,함수 충돌방지!

//미리보기 구현 코드랩핑구역//////////////////////////
(() => {
  //대상: preview-box
  const previewBox = myFn.qs(".preview-box");
  //data: DKB_data.js의 배열 previewData
  const pData = dkbData.previewData;
  //구조: ul > li > h3 + p
  // 8개만 데이터를 구성하여 html에 넣는다
  //html 코드 변수
  let hcode = `<ul class="fx-box">`;

  // li구성을 hcode 변수에 대입연산자로 할당함!
  for (let i = 0; i < 8; i++) {
    hcode += `
    <li>
        <h3>${pData[i].title}</h3>
        <p>${pData[i].story}</p>
    </li>
    `;
  } ////for///////
  hcode += `</ul>`;
  //데이터 확인
  // console.log(hcode);
  // console.log('미리보기 data:',dkbData.previewData);

  //2. 화면출력하기 /////////////////
  previewBox.innerHTML = hcode;
})(); ///////////////미리보기 코드 랩핑구역/////////////////
