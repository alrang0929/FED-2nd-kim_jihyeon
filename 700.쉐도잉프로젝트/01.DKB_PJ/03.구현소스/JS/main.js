// DKB PJ 메인 JS - main.js //////////////
// 모듈로 호출된 JS에서는 다른 외부JS를 import로 호출가능!
// import하려는 파일에서 반드시 함수,변수 등을 export해야함!

// 부드러운 스크롤 불러오기
import { startSS, setScrollPos } from "./smoothScroll23.js";
import myFn from "./my_function.js";
//////////////////////////////////////////////////////////////////////////
//데이터셋팅 불러오기
import * as dkbData from "../data/DKB_data.js";

//공통처리함수 불러오기: 가장먼저 호출!
import setElement from "./common.js";

setElement(); // 함수호출
////////////구현코드 파트///////////////////////


//1. 부드러운 스크롤 호출
startSS();

console.log("모듈로 메인JS호출!!!", document.querySelector(".top-menu"));



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

/****************************************** 
 
[코드의 지역화(코드랩핑)]

방법: (익명함수)() -> 바로 실행함
실제코드01: ((익명함수)=>{코드})()
실제코드02: (function(){코드})()
->이렇게 하는 목적: 변수,함수 충돌방지!

******************************************/

//2. 미리보기 파트 내용 넣기

//미리보기 구현 코드랩핑구역//////////////////////////
(() => {
  //대상: preview-box
  const previewBox = myFn.qs(".preview-box");
  //data: DKB_data.js의 배열 previewData
  const pData = dkbData.previewData;
  //데이터 원본 정렬을 내림차순으로 변경! sort
  //배열값인 객체의 idx키값을 기준으로 내림차순 정렬 할때 문자형 숫자이므로
  //Number(숫자형 매서드)로 싸서 숫자로써 비교하여 정확한 내림차순이 되게 한다
  pData.sort((a, b) =>
    Number(a.idx) == Number(b.idx) ? 0 : Number(a.idx) < Number(b.idx) ? 1 : -1
  );

  //콘솔로도 데이터 변경이 됨! sort는 원본 데이터를 변경!
  // console.log(
  // pData.sort((a,b)=>
  // Number(a.idx)==Number(b.idx)?0 : Number(a.idx)<Number(b.idx)?1:-1));

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

////////////3. 현장포토 파트////////////
(() => {
  //대상: live-box
  const liveBox = myFn.qs(".live-box");
  //data: DKB_data.js의 배열 previewData
  const lvData = dkbData.liveData;
  console.log("대상:", liveBox, lvData);
  //구조: ul > li > figure>img+figurecaption
  // 8개만 데이터를 구성하여 html에 넣는다
  //html 코드 변수
  let hcode = `<ul>`;
  lvData.forEach((v) => {
    // li구성을 hcode 변수에 대입연산자로 할당함!
    //liveData 배열은 총 8개, 모두 돌기 셋팅

    hcode += `
      <li>
        <figure>
          <img src="./images/live_photo/${v.imgName}.jpg" alt="${v.title}">
          <figcaption>${v.title}</figcaption>
        </figure>
      </li>
      `;
  }); //forEach//////////////////////////
  hcode += `</ul>`;

  //데이터 확인
  // console.log(hcode);
  // console.log('미리보기 data:',dkbData.liveData);

  //2. 화면출력하기 /////////////////
  liveBox.innerHTML = hcode;
})(); ////////////현장포토 파트 끝////////////////

////////////4. 대표이미지 파트////////////
(() => {
  //대상: live-box
  const posterBox = myFn.qs(".poster-box");
  //data: DKB_data.js의 배열 previewData
  const psData = dkbData.posterData;
  console.log("대상:", posterBox, psData);
  //구조: ul > li > figure>img+figurecaption
  // 8개만 데이터를 구성하여 html에 넣는다
  //html 코드 변수
  let hcode = `<ul>`;
  psData.forEach((v) => {
    // li구성을 hcode 변수에 대입연산자로 할당함!
    //posterData 배열은 총 5개, 모두 돌기 셋팅

    hcode += `
      <li>
        <figure>
          <img src="./images/poster_img/${v.imgName}.jpg" alt="${v.title}">
          <figcaption>${v.title}</figcaption>
        </figure>
      </li>
      `;
  }); //forEach//////////////////////////
  hcode += `</ul>`;

  //데이터 확인
  // console.log(hcode);
  // console.log('미리보기 data:',dkbData.posterData);

  //2. 화면출력하기 /////////////////
  posterBox.innerHTML = hcode;
})(); ////////////대표이미지 파트 끝////////////////

//5. 최신 동영상 파트 데이터 태그 구성하여 화면출력하기
//코드 랩핑구역///////////////////////////////////////
(()=>{

  //5-1)변경대상: .clip-box
  const clipBox = myFn.qs(".clip-box");
  //5-2) 생성코드 변수
  
  //5-3) 화면 출력하기
  //5-4) 데이터만큼 순회하여 li 코드 만들기!
  //데이터: dkbData.clipData
  
  let hcode = `<ul>`;
  dkbData.clipData.forEach(v=>{
  hcode +=`  
  <li>
  <div class="clip-mv-box">
    <img src="./images/clip_img/${v.idx}.jpg" alt="${v.subtit}">
  </div>
  <h4>${v.subtit}</h4>
  <h3>${v.title}</h3>
</li>
  `;
  })
  hcode += `</ul>`;

  clipBox.innerHTML = hcode;
 
})();/////////////최신 동영상 파트 종료
