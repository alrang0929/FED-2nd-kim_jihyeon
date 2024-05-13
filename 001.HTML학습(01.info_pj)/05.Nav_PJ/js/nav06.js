// 네비게이션 유형6 JS - nav06.js
// 가로네비 서브별 드롭다운 전체창

//import영역///////////////////////////////////////////////////
import mFn from "./my_function.js";
import dragSlide from "./dragslide.js";
import makeMenu  from "./gnb_menu.js";
///////////////////////////////////////////////////////////


/* 서브배너 리스트 설정 */

//[2] 기능구현 파트

//메뉴구현 호출하기
makeMenu(mFn.qs(".gnb"));

//바로실행 구역함수1
(()=>{

//[2] 기능구현 파트
//배너리스트 세팅
//대상: .slide
const slideBox = mFn.qs(".ban-slide");

//슬라이드 코드변수
let slideCode = "";
//1. 배너 리스트 셋팅하기
//1) 대상: .slide
//2) 슬라이드li 코드 만들기
for (let i = 12; i <= 24; i++) {
  let temp = i > 13 ? i - 13 : i;
  //끝번호들 12, 13번 부터 시작 1부터 11까지 나열

  //세번째 슬라이드(이미지1번)만 class on 넣기
  slideCode += `
<li ${temp === 1 ? 'class= "on"' : ""}>
<img src="./images/img_nav06/ban${temp}.png" alt="시코르 배너" />
</li>
`;
} //////for

//3)list코드 요소에 출력하기
slideBox.innerHTML = slideCode;

})();


//바로실행 구역함수2
(()=>{

//배너리스트 세팅
//대상: .sub-slide
const slideBox = mFn.qs(".sub-slide");

//슬라이드 코드변수
let slideCode = "";
//1. 배너 리스트 셋팅하기
//1) 대상: .slide
//2) 슬라이드li 코드 만들기
for (let i = 6; i <= 12; i++) {
  let temp = i > 12 ? i - 12 : i;
  //6, 7부터 시작하고 1부터 5까지 나열

  //세번째 슬라이드(이미지1번)만 class on 넣기
  slideCode += `
<li ${temp === 1 ? 'class= "on"' : ""}>
<img src="./images/img_nav06/sban${temp}.jpg" alt="시코르 배너" />
</li>
`;
} //////for

//3)list코드 요소에 출력하기
slideBox.innerHTML = slideCode;

})();



//[3]기능호출////////////////////////////////////////////////
dragSlide("banbx");
