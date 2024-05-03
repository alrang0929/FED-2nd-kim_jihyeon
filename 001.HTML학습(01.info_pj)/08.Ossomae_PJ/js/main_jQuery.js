//옷소매 갤러리PJ 메인 js : main_jQuery.js
import mFn from "./my_function.js";

/*********************************************************** 
1. 기능정의:

버튼 클릭시 갤러리박스를 잘라서 앞/뒤로 이동함

1-1. 오른쪽버튼 클릭시 - 맨앞div 맨뒤로 이동
    ->제이쿼리 append(맨앞자식div)
1-2. 왼쪽버튼 클릭시 - 맨뒤div 맨앞으로 이동
    -> 제이쿼리 prepend(맨뒤자식div)
 ***********************************************************/

//1.대상선정
//1-1 이벤트 대상: .abtn (이동버튼들)
//1-2 변경 대상: .gbx(갤러리 부모박스)

//2. 변수설정하기/////////////////
//2-1. 광클금지 변수 (true = 금지, false = 허용)
let stopClick = false;
//애니 시간(=잠금시간)
const TIME_SLIDE = 400;
//변경대상
let gbx = $(".gbx");

//3. 이벤트 및 기능구현하기
$(".abtn").click(function(){
    //버튼 자신은 this 키워드 사용!
    console.log("나야나",$(this).is(".rb"));

    //find :  하위요소를 모두 선택,
    //참고) 직계요소만 선택할 때는 children()을 사용
    //is매서드는 선택요소의 ciass등 확인기능
    //first는 첫번쨰, last는 마지막번째
    //eq(n) 는 n번쨰 요소를 선택

    //1.오른쪽 버튼 분기: 맨앞div 맨뒤이동
    if($(this).is(".rb")){
        gbx.append(gbx.find("div").first());
    }///////if
    
    //2.왼쪽버튼: 맨뒤div 맨앞으로 이동
    else{
        gbx.prepend(gbx.find("div").last());
    }/////////////else


    if(stopClick)return;
    stopClick = true;
    setTimeout(() => {
        stopClick = false;
        
    }, TIME_SLIDE);
    
});/////////////////////click



