// 가로 방향 스크롤 구현 JS

//1. 대상요소: html body
//제이쿼리에서 전체 스크롤 or 휠 이벤트 작성시 
//대상은 항상 html,body로 두개 모두 잡아준다
//참고) document, window는 사용안됨

//이벤트 메서드: on(이벤트명, 함수)
//유의사항: wheel이벤트는 모바일과 무관! 따라서 터치 가로스크롤은
//가로 스크롤바만 살려주면 자연스럽게 된다!


/////////////////////////////////////////////////////////
//스크롤 이벤트 함수 구현하기//////////////////////////////
/////////////////////////////////////////////////////////

const scTarget = $("html,body");
let scPos = 0;
//한번에 이동거리
//상수: 전부 대문자, 언더바로 구분(스네이크 작명법)
const MOVE_NUM = 100;

//pgCnt: 페이지 개수
let pgCnt = $(".page").length;
//winW: 윈도우 가로크기
let winW, maxLimit; 

const chgLimit = () =>{
    winW = $(window).width()
    //maxLinit: 최대한계값
    maxLimit = (winW*pgCnt) - winW;

    console.log("window크기:",winW,
    "\n 페이지수:",pgCnt, 
    "\n 최대 한계값",maxLimit);
}///////////////chgLimit 함수 /////////



//chgLimit 최초 호출
chgLimit();

//윈도우 사이즈 변경시 한계깞 업데이트
$(window).resize(chgLimit);
//제이쿼리용 resize() 메서드: 리사이즈 이벤트 함수


scTarget.on("wheel",(e)=>{
    
    // 휠방향 알아내기(전체 이벤트 객체로 부터 얻어오기)
    //(1)event.wheelDelta값 : 기본이동 100px + 앞뒤 예비공백 10px*2 = 전체 표시수치 120px
    //방향: - 위, + 아래
    // let delta = event.wheelDelta;

    //(2) event.deltaY : 기본이동 크기(=100px)만 표시
    // 방향: + 위, - 아래
    // wheelDelta 보다 나중에 나온 실질적인 표시객체
    let delta = event.deltaY;
    
    //2. 스크롤 이벤트 설정 및 기능 구현하기
    //스크롤 이동을 위한 제이쿼리 속성
    //1. scrollTop : 세로스크롤바 위치
    //2. scrollLeft : 가로스크롤바 위치 
    
    //애니메이션 이동
    // 대상.animate({CSS설정},시간,이징,함수);
    //stop() : Q에 쌓인 애니메이션을 지운다 < 중간에 쌓인 애니 삭제, 최종 애니만 실행
    
      //deltaY 양수가 위 : wheelDelta = 양수 아래
    if(delta <0) scPos -= MOVE_NUM;
    else scPos += MOVE_NUM;

    //한계값 체크
    //1)최소 한계값 보정
    if(scPos<=0) scPos = 0;

    //2)최대 한계값 보정 : 전체이동박스크기 - 화면 가로크기
    if(scPos>=maxLimit) scPos = maxLimit;

    scTarget.stop().animate({
        scrollLeft: scPos+"px"},2000, "easeOutQuart")
        
    console.log("스크롤 위치",scPos, "\n 델타Y",delta);
})/////wheel event area