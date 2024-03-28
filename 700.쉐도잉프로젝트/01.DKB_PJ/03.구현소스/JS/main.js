//DKB PJ 메인 js - main.js////////////////////////////////////////////

//모듈로 호출된 JS에서 다른 외부KS를 import로 호출 가능!
// import하려는 파일에서 반드시 함수 변수 등을 export해야한다!
import slideFn from "./slide.js"; 

console.log('모듈로 메인js 호출!',
document.querySelector('.top-menu'));


//slideFn 슬라이드 기능함수 호출!
slideFn();
