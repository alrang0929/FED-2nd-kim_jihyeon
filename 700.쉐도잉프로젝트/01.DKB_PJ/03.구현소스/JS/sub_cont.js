////메인페이지 서브컨텐츠 띄우는 구현코드 -  sub_cont.js///////////////////////////
import myFn from "./my_function.js";

export default function showSubBox(){
console.log("부르면 서브보임");
//1. 서브컨텐츠 보이기 기능 구현
//1)대상선정
//  이벤트 대상:
//미리보기: .preview-box li
//현장포토 .live-box li
const subViewBox = 
$(".preview-box li, .live-box li");
console.log("나야나d",subViewBox);

//1-2) 변경대상: .sub-cont
const subContBox = $(".sub-cont");

//2. 이벤트 설정 및 함수 구현하기 ///////////////
subViewBox.click(function(){

    console.log("나야나",this);

});

}//////////////////showSubbox함수/////////
