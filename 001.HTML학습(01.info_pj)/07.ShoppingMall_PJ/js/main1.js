// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window, "DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

// 전역변수구역 //////////
/* 
    (참고: JS에서 이름짓는 일반규칙)
    1. 변수/함수 : 캐믈케이스(첫단어소문자 뒷단어 대문자시작)
    2. 생성자함수/클래스 : 파스칼케이스(모든첫글자 대문자)
    3. 상수 : 모든글자 대문자(연결은 언더스코어-스네이크 케이스)
*/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
  console.log("로딩완료!");

  //이동버튼 대상: .abtn
  const abtn = qsa(".abtn");
  //변경대상: #slide, 블릿
  const slide = document.querySelector("#slide");
  //블릿버튼: .indic
  let indic = document.querySelector(".indic");
  //console.log(abtn,slide));

  ////초기셋팅하기//////////
  //5개의 슬라이드와 블릿 생성
  for (let i = 0; i < 5; i++) {
    //슬라이드 넣기
    slide.innerHTML += `
        <li><img src="images/slide0${i+1}.jpg"
        data-seq="${i}"
        alt="slide"></li>
        `;///////////slide
    //블릿 넣기
    indic.innerHTML += `
        <li ${i===0 ?'class="on"':""}>
        <img src="images/dot1.png" alt="흰색">
        <img src="images/dot2.png" alt="회색">
         </li>`;/////////indic
  }////////////for

  //li를 생성한 후 그 li를 다시 수집한다
  //블릿의 li까지 수집! indic 변수
  indic = document.querySelectorAll('.indic li');

  let snum = 0;
  //2. 버튼을 모두  이벤트 설정하기

  for (let x of abtn) {
    x.onclick = goslide;
  } ////////////////for of////////////////

  // //오른쪽 버튼 클릭
  // abtn[1].onclick = () =>{
  // };//오른쪽 버튼 클릭시

  // abtn[0].onclick = () =>{

  // };//왼쪽 버튼 클릭시

  // /************************************************

  // 함수명: goslide
  // 기능: 슬라이드 이동

  // ************************************************/
  //광클 금지변수

  let prot = false; //1=true불허, 0=false 허용

  function goslide() {
    //광클금지 설정//////////////////////////////
    //클릭시도를 막아서 못들어오게 하고
    //일정시간 후 다시 열어준다!

    if (prot) return; //돌아가(함수나감)
    prot = true; //잠금(뒤의 호출은 모두 막힘)

    setTimeout(() => {
      prot = false; //0.6초후 해제
    }, 600);

    //오른쪽 버튼인 .ab2인가?
    let isRbtn = this.classList.contains("ab2");
    /////////////////////////////////////////////

    //[classList객체의 contains() 메소드]
    //해당 요소의 특정 클래스인지 여부를 리턴함
    //해당 클래스가 있으면 true, 없으면 false를 리턴함.

    //this = 호출한 버튼 자신!
    console.log("나 슬라이드야", this, isRbtn);

    //오른쪽 버튼일 경우
    if (isRbtn) {
      //1. 먼저 왼쪽으로 이동하기
      slide.style.left = "-100%";
      //맨 앞li 맨 뒤로 이동하기
      //appendChlide(요소)
      //-> 원래 뒤의 요소 추가기능임!
      // 기존에 있는 요소를 선택시 맨 뒤로 이동시킴!
      // 맨 앞에 앞 요소를 선택하여 맨 뒤로 보냄!
      slide.style.transition = ".2s ease-in-out";

      //2. 이동하는 시간 0.6초간 기다림
      setTimeout(() => {
        //2-1맨앞 li 맨 뒤로 이동!
        slide.appendChild(
          slide.querySelectorAll("li")[0],
          //2-2이때 슬라이드 left값 -100% 이므로 left값을 0으로 변경!
          (slide.style.left = "0"),
          //2-3 left 트렌지션 없애기
          (slide.style.transition = "none")
        );
      }, 600);
    } ///////if문

    //2-2.왼쪽 버튼일 경우
    else {
      //하위 li수집
      let list = slide.querySelectorAll("li");
      // (1)맨뒤 li 맨 앞으로 이동하기
      // 놈놈놈 시리즈!
      //insertBefore(넣을놈, 넣을놈전놈)
      //insertBefore(맨뒤li, aosdkvㅣㅑ)
      slide.insertBefore(list[list.length - 1], list[0]);
      //(2) left값을 -100%로 변경하여 맨 앞으로 온 것을 숨긴다!
      //왼쪽에서 슬라이드 들어올 준비!!!
      slide.style.left = "-100%";

      ///////////////////////////////////////
      //같은 left값을 변경하기 떄문에 코드 처리 구역을 분리하여 준다!
      //이때 사용되는 매서드는 settimeout
      //시간은여? 0을 줘도 코드를 분리하여 처리하므로
      //동시처리가 아닌 비동기 처리하기 때문에 코드가 잘 작동한다!

      setTimeout(() => {
        //(3)left값을 0으로 transition하여 들어오기!
        slide.style.left = "0";
        slide.style.transition = "none";
        //트렌지션이 한번 버튼 클릭 후 생기므로 제거해줌!
      }, 0);
    } //////else///////////////

    
    //5- 블릿표시 변경하기
    //모든 class on 지우기 + 현 순번 클래스 넣기
    indic.forEach((ele,idx)=>{
      //현재 순번은 몇번쨰 슬라이드에 데이터-seq값이다!
      let seq =
      slide.querySelectorAll('li')(isRbtn?1:0)
      .getQttribute('data-seq');

        //ele-각각의 li(요소), idx - 각각의 순번
        if(idx === snum){
          //현재 순번 on넣기
          ele.classList.add('on')}
        else(//나머지는 on빼기
          ele.classList.remove('on'))
        });/////foreach////////////////////

  } //////////////////goslide 함수///////////////////////////
  //////////////////////////////////////////////////////////
}
