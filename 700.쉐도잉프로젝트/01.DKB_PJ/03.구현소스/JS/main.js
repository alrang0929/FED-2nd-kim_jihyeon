
// DKB PJ 메인 JS - main.js //////////////
// 모듈로 호출된 JS에서는 다른 외부JS를 import로 호출가능!
// import하려는 파일에서 반드시 함수,변수 등을 export해야함!
import slideFn from "./slide.js";
// 부드러운 스크롤 불러오기
import {startSS, setScrollPos} from"./smoothScroll23.js";
import myFn from"./my_function.js";
//////////////////////////////////////////////////////////////////////////


////////////구현코드 파트///////////////////////

//1. 부드러운 스크롤 호출
startSS();

console.log('모듈로 메인JS호출!!!', 
document.querySelector('.top-menu'));

// slideFn 슬라이드 기능함수 호출!
slideFn();

//. 인트로 동영상 클릭시 동영상 태그 넣기
//이벤트대상=변경대상 :intro-mv-img
const introMv = myFn.qs('.intro-mv-img');
introMv.onclick = () => {
console.log('클릭');

//1. 동영상넣기
introMv.innerHTML = `<video src="./images/intro_mv.mp4" autoplay="" controls=""></video>`;

//2. 클래스 off 지우기 (play 버튼 제거)
introMv.classList.remove('off');

}//////클릭 이벤트 함수