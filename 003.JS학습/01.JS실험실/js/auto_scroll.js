// 자동스크롤 JS - auto_scroll.js

//일반함수를 생성자 함수로 만드는 가장 쉬운 방법!!
//1. 함수 이름을 대문자로 시작!
//2. 호출시 new 키워드를 사용하여 인스턴스 생성
//   =>> 일반함수와 차이점은 개별적인 객체 인스턴스로 함수가 개별화 되기 때문
// 운용상 독립적 프로세스를 확립 ->대충 다른 이름 저장하기 느낌ㅁ..
// this 키워드를 사용하는 경우: new로 생성된 인스턴스 객체에서
// 함수 내부에 있는 변수나 함수를 직접 호출해야할 경우 사용


//자동스크롤 기능 함수///////////////////////////////////
export default function AutoScrollFn() {

  //기본 초기화 css 설정/////////////////////////////////////////
  //html: 부드러운 스크롤
  //body: overflow hidden
  document.querySelector('html').style.scrollBehavior = "smooth";
  document.querySelector('body').style.overflow = "hidden";

  /********************************************** 
    [ 자동스크롤 기능정의 ]
    1. 스크롤바가 없는 상태에서 또는 스크롤기능을 
    막아놓은 상태에서 마우스 휠 작동시
    아래와 같이 기능구현됨
    (1) 휠 내림 : 다음페이지로 이동
    (2) 휠 올림 : 이전페이지로 이동

    2. 스크롤바 첫페이지와 끝페이지에서 이동안함

    [ 자동스크롤 이벤트 ]
    -> wheel 이벤트
    -> 마우스 휠 작동시 발생!
    (이전 이벤트명: 
        mousewheel / DOMMouseScroll(파이어폭스))
    (주의: wheel이벤트는 scroll이벤트와는 다름!
        마우스의 바퀴를 돌릴때 발생함!)
**********************************************/

  // 1.  전역변수 설정하기 /////////////
  // 1-1. 페이지변수
  let pgNum = 0;
  // 1-2. 휠상태변수(true는 막기/false는 통과)
  let stsWheel = false;
  // 1-3. .page클래스 요소
  const elePage = document.querySelectorAll(".page");
  // 1-4. 전체페이지수
  const totalCnt = elePage.length;
  console.log("대상:", elePage, totalCnt, "개");

  // 2. 이벤트 등록하기 /////////////
  // 대상: window
  // 전체 페이지 휠 이벤트의 대상은 window다!
  // 휠이벤트설정
  window.addEventListener("wheel", wheelFn, { passive: false });
  /* 
    [ window / document / body 세가지는
    기본막기불가 설정되어있음! ]
    -> 이벤트 등록시 패지스모드가 true로 설정됨
    셋팅방법:
    요소.addEventListener(이벤트명,함수,{passive:true})
    -> 기존엔  passive:false 였는데 이것의
    기본값이 true로 변경됨. 의미는 기본기능막기
    못하게 설정됨!

    우리가 변경하여 사용해야함!
    요소.addEventListener(이벤트명,함수,{passive:false})
*/

  // [ 새로고침시 스크롤바 위치 인덱싱이 되므로
  // 맨위로 강제 이동하기설정 ]
  // scrollTo(x이동,y이동)
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 500);

  // 3. 함수 구현하기 ////////////////////

  /*************************************** 
    함수명: wheelFn
    기능 : 마우스 휠 작동시 페이지이동
***************************************/
  function wheelFn(e) {
    // 이벤트전달변수(자동)
    // 함수호출확인!
    console.log("휠~~~!");

    // 1.우리는 휠 기본기능을 막고
    // 자동으로 스크롤을 하나씩 되게 할 것이다!
    e.preventDefault();
    // -> passive:false설정해야함!왜?window니까!

    // 2.광휠금지장치 //////
    if (stsWheel) return; // 돌아가!
    stsWheel = true; // 잠금!
    setTimeout(() => {
      stsWheel = false; // 잠금해제!
    }, 500);

    // 3. 휠방향 알아내기 /////
    let delta = e.wheelDelta;
    // 휠델타는 이벤트 객체에서 리턴해주는
    // 방향, 이동거리 등의 정보값이다!
    console.log("델타값:", delta);
    // -> 마이너스가 아랫방향임!

    // 4. page이동 호출하기
    movePage(delta);

  } /////////// wheelFn 함수 ////////////////
  ///////////////////////////////////////////

  /************************************************ 
  
  함수명: movePage
  기능: DT나 mobile 모두 페이지 이동시 호출하여
        실제 페이지를 이동시키고 메뉴 변경함수 호출
  
  ************************************************/
 function movePage(delta){ //delta: 방향을 나타내는 양수/ 음수

    // 1. 방향별 분기하기 ///////
    if (delta < 0) {
      // 아랫페이지로 가야하니까 페이지번호증가
      pgNum++;
      // 한계수체크(끝번호고정)
      if (pgNum === totalCnt) {
        pgNum = totalCnt - 1;
        // 마지막페이지순번은
        // 전체개수 - 1
      } /// if ///
    } /// if ///
    else {
      // 반대는 윗방향이니까 페이지번호감소
      pgNum--;
      // 한계수 체크(0보다 작으면 0고정)
      if (pgNum < 0) {
        pgNum = 0;
      } /// if ///
    } /// else ///
    console.log("pgNum:", pgNum);

    // 2. 페이지 이동하기 //////
    // 2-1.이동할 위치알아내기
    // -> .page 요소중 해당 순번페이지위치
    let pos = elePage[pgNum].offsetTop;
    // offsetTop은 최상단에서 부터 거리
    console.log("이동할위치:", pos);
    // 2-2.페이지 스크롤 위치 이동하기
    // scrollTo(0, y축이동값)
    window.scrollTo(0, pos);

    //3. 해당메뉴 순번 on넣기 / 나머지 on빼기
    chgMenu(pgNum);

 }///////////movePage함수//////////////////////////

  /******************************* 
    메뉴 클릭시 이벤트 처리하기 
*******************************/
  // 이벤트 대상: .gnb a
  const gnb = document.querySelectorAll(".gnb a");
  // 이벤트 대상: .indic a
  const indic = document.querySelectorAll(".indic a");
  console.log("gnb:", gnb, "/indic:", indic);

  // 이벤트 설정하기 + 기능구현하기
  gnb.forEach((ele, idx) => {
    ele.onclick = () => {
      // 메뉴 변경함수 호출
      chgMenu(idx);
    }; /// click함수 ///
  }); //// forEach ///

  indic.forEach((ele, idx) => {
    ele.onclick = () => {
      // 메뉴 변경함수 호출
      chgMenu(idx);
    }; /// click함수 ///
  }); //// forEach ///

  // [ 메뉴 변경함수 : .gnb + .indic ] /////
  function chgMenu(idx) {
    // idx - 순번
    // 클릭시 자신의 순번찍기
    console.log("순번:", idx);

    // 1.전역페이지변수에 순번 업데이트
    pgNum = idx;

    // 2.전체 메뉴에 on빼기
    gnb.forEach((ele, seq) => {
      // ele - a요소 / seq - 순번
      if (idx === seq) {
        // 선택순번과 같으면 on넣기
        ele.parentElement.classList.add("on");
        indic[seq].parentElement.classList.add("on");
      } /// if ///
      else {
        // 기타의 경우 on 지우기
        ele.parentElement.classList.remove("on");
        indic[seq].parentElement.classList.remove("on");
      } /// else ///
    }); //// forEach ///////

    // for (let x of gnb) {
    //   x.parentElement.classList.remove("on");
    // } /// for of ///

    // 3.해당순번에 on넣기
    // ele.parentElement.classList.add("on");
    // parentElement는 선택요소의 부모요소다!
  } //////////// chgMenu 함수 //////////

  ////////////////////////////////////////////////////////
///////////모바일 설정////////////////////////////////////
////////////////////////////////////////////////////////
/********************************************************* 
    [ 모바일 이벤트처리 ]
    
    [ 모바일 터치 스크린에서 사용하는 이벤트 종류 ]
    1. touchstart - 손가락이 화면에 닿을때 발생
    2. touchend - 손가락이 화면에서 떨어질때 발생
    3. touchmove - 손가락이 화면에 닿은채로 움직일때 발생
    
    [ 화면터치 이벤트관련 위치값 종류 ]
    1. screenX, screenY : 
        디바이스 화면을 기준한 x,y 좌표
    2. clientX, clientY : 
        브라우저 화면을 기준한 x,y 좌표(스크롤미포함)
    3. pageX, pageY : 
        스크롤을 포함한 브라우저 화면을 기준한 x,y 좌표
*********************************************************/

//1. 모바일 이벤트 등록하기//////////////////////
//대상: window
window.addEventListener("touchstart",touchStartFn);
window.addEventListener("touchend",touchEndFn);

//2. 모바일 이벤트 함수 만들기
//터치시 위치값 변수// mposStart: 시작위치, mposEnd: 끝위치
let mposStart = 0, mposEnd = 0;

//2-1 터치 시작함수
function touchStartFn(e){

//y축 터치위치 알아오기
mposStart = e.touches[0].screenY;
//모바일 이벤트값 객체: touchs[0]
console.log(mposStart)

}/////////////touchStartFn함수////////////////////////////

//2-2 터치 끝함수
function touchEndFn(e){
  //y축 터치위치 알아오기
  mposEnd = e.changedTouches[0].screenY;
  //모바일 이벤트값 객체: touchs[0]
  // but 같은 이벤트가 반복될 경우: 변경된 값을 불러오는 changedTouches 사용

  //2. 처음 터치위치와 마지막 위치의 차 구하기
  // 끝값 - 시작값 = 음수가 아랫방향 이동으로 맞추기 위해
  let diffValue = mposEnd - mposStart;
  //분석결과: 양수: 아래-> 위->아래 <-> 음수: 위 페이지 이동

  console.log(mposEnd,"차이수:",diffValue)

  //3. 페이지 이동함수 호출
  movePage(diffValue);

}/////////////touchEndFn함수////////////////////////////




















} /////////////autoScrollFn함수///////////////////////////


