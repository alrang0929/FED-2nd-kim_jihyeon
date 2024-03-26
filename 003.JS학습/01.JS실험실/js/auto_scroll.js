// 자동스크롤 JS - auto_scroll.js

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

//[새로고침시 스크롤바 위치 인덱싱 되므로 맨 위로 강제 이동하기 설정]
//scrollTo(x축, Y축 이동)
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

  // 우리는 휠 기본기능을 막고
  // 자동으로 스크롤을 하나씩 되게 할 것이다!
  e.preventDefault();
  // -> passive:false설정해야함!왜?window니까!

  // 02 광휠금지장치 //////
  if (stsWheel) return; // 돌아가!
  stsWheel = true; // 잠금!
  setTimeout(() => {
    stsWheel = false; // 잠금해제!
  }, 500);

  // 03. 휠방향 알아내기 /////
  let delta = e.wheelDelta;
  // 휠델타는 이벤트 객체에서 리턴해주는
  // 방향, 이동거리 등의 정보값이다!
  console.log("델타값:", delta);
  // -> 마이너스가 아랫방향임!

  // 4. 방향별 분기하기 ///////
  if (delta < 0) {
    // 아랫페이지로 가야하니까 페이지번호증가
    pgNum++;
    if (pgNum === totalCnt) {
      pgNum = totalCnt - 1;
      // 마지막페이지순번은
      // 전체개수 - 1
    } /// if ///
  } /// if ///
  else {
    // 반대는 윗방향이니까 페이지번호감소
    pgNum--;
    //한계쑤 체크(0보다 작으면 0고정)
    if (pgNum < 0) {
      pgNum = 0;
    }///if
  } /// else ///
  console.log("pgNum:", pgNum);
  
  //5. 페이지 이동하기
  //scrollTo(0,Y축 이동값)
  //offsetTop: 최상단에서 부터 거리
  let pos = elePage[pgNum].offsetTop;
  
  //5-1 이동할 위치 알아내기
  //-> .page 요소중 해당 순번 페이지 위치
  console.log("이동할 위치:", pos);
  //5-2 페이지 스크롤 위치 이동하기
  window.scrollTo(0, pos);
  
  //6-1. gnb 메뉴에 on빼기
  for(let x of gnb){
    x.parentElement.classList.remove('on');
  }//////for of//////
  gnb[pgNum].parentElement.classList.add('on');
  // parentElement는 선택요소의 부모요소다!
  // gnb[pgNum]은 해당순번의 메뉴a요소다!

  //6-2. indic 메뉴에 on빼기
  for(let x of indic){
    x.parentElement.classList.remove('on');
  }//////for of//////
  indic[pgNum].parentElement.classList.add('on');
  // parentElement는 선택요소의 부모요소다!
  // gnb[pgNum]은 해당순번의 메뉴a요소다!
  
} /////////// wheelFn 함수 ////////////////
///////////////////////////////////////////

/*************************************************** 
메뉴 클릭시 이벤트 처리하기 
***************************************************/


//이벤트 대상: .gnb a
const gnb = document.querySelectorAll(".gnb a");
console.log("gnb:", gnb);

//이벤트설정 + 기능 구현하기
gnb.forEach((ele, idx) => {
  ele.onclick = () => {
    //클릭시 자신의 순번 ㅣㅉㄱ기
    console.log("순번:", idx);
    //1. 전역페이지변수에 순번 업데이트
    pgNum = idx;
    //2. 전체 메뉴에 on뺴기
    for (let x of gnb) {
      x.parentElement.classList.remove("on");
    } ////////////for of///////////////

    //3. 해당 순번에 on 넣기
    ele.parentElement.classList.add("on");
    //parentElement: 선택요소의 부모요소
    //gnb[pgNum]은 해당순번의 a 요소
  }; ////click함수
}); /////////////////////forEach/////////////


  //이벤트 대상: .indic a
const indic = document.querySelectorAll(".indic a");
console.log("indic:", indic);

//이벤트설정 + 기능 구현하기
indic.forEach((ele, idx) => {
  ele.onclick = () => {
    //클릭시 자신의 순번 ㅣㅉㄱ기
    console.log("순번:", idx);
    //1. 전역페이지변수에 순번 업데이트
    pgNum = idx;
    //2. 전체 메뉴에 on뺴기
    for (let x of indic) {
      x.parentElement.classList.remove("on");
    } ////////////for of///////////////

    //3. 해당 순번에 on 넣기
    ele.parentElement.classList.add("on");
    //parentElement: 선택요소의 부모요소
    //indic[pgNum]은 해당순번의 a 요소
  }; ////click함수
  
}); /////////////////////forEach/////////////