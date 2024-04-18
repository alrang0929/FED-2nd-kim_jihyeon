// 드래그 기능 메인 페이지 JS - drag_main.js
//[1]모듈함수 불러오기 파트//////////////////////////
import mFn from "./my_function.js";
// 드래그 기능 함수 호출하기
import setDrag from "./slide_drag.js";
//슬라이드 기능 함수 호출하기
import setSlide from "./slide_Fn.js";
//드래그 대상 클래스 이름만 보내준다

//[2]기능구현 파트 ///////////////////////////////
//1. 슬라이드 기능함수 호출하기
setSlide('banbx');

//2. 드래그 기능 함수 호출하기
setDrag('slide');