//JS6-1.Date_Math객체 JS - js6-1.date_math.js

import mFn from "./my_function.js";

////////import area////////////////////////////////////////////

//1. 요구사항: 화면에 시간을 찍으시오
//2. 대상: .tt
const tt = mFn.qsa(".tt");
console.log(tt);

//3. 날짜/시간 찍기

//함수 최초호출
showTime();
//시간날짜 함수 /////////////////
//시간날짜함수 인터발 호출
setInterval(showTime, 1000);

//월을 부르는 이름과 매칭하기
function showTime() {
  //월을 부르는 이름 :
  let monthName = [
    "하하월",
    "파파월",
    "카카월",
    "토토월",
    "코코푸월",
    "싹스월",
    "칸단월",
    "차즈민월",
    "라우딘월",
    "차호호월",
    "테테월",
    "상그리아월",
  ];

  //요일을 부르는 명칭
  let dayName = ["월", "화", "수", "목", "금", "토", "일"];

  //1. 날짜 내장객체로 객체 인스턴시 생성하기
  const today = new Date();
  //2. 년도/월/일 찍기
  tt[0].innerText = today.getFullYear();
  tt[1].innerText = today.getMonth();
  tt[2].innerText = today.getDate();
  tt[3].innerText = dayName[today.getDay()];

  //3. 시간 분 초 찍기

  let H = today.getHours();
  //12 이상: 오후  / 12이하: 오전
  //24시간제로 값이 넘어오기 떄문에 12를 빼줌
  H = H > 12 ? H - 12 : H;

  let M = today.getMinutes();
  let S = today.getSeconds();

  tt[4].innerText = H >= 12 ? "오후" : "오전";

  const addZero = (x) => (x < 10 ? "0" + x : x);

  //한자리 숫자는 앞에 0 자릿수 넣기
  tt[5].innerText = addZero(H);
  tt[6].innerText = addZero(M);
  tt[7].innerText = addZero(S);

  //월과 요일은 배열 순번으로 리턴됨! > 나라마다 월과 요일을 부르는 이름이 다르기 때문
  //만일 월을 숫자로 호출하려면 +1 해주면 됨!
} //////////showTime함수///////////


/*************************************** 
    [ Math 객체 ]
    - 수학객체로써 다른 객체와 달리
    new키워드 없이 바로 사용할 수 있게 설계됨
    - 이런객체를 정적객체(Static Object)라고함
    -> 정적객체들!
        Array(), Object(), Math()
    ______________________________

    [ 주요 Math 객체의 메서드들 ]
    Math.min(값들) - 최소값
    Math.max(값들) - 최대값
    Math.round(실수값) - 반올림
    Math.floor(실수값) - 내림
    Math.ceil(실수값) - 올림
    Math.abs(양수나 음수값) - 절대값
    ______________________________

    Math.random() - 난수발생
    -> 0~1  사이의 소수점값 17자리수

***************************************/

// 난수 발생시키기
// let rdm = Math.random();
// console.log(rdm);

// 1~7 사이 난수발생하기
// 방법: 난수에 발생할 최대수 곱하기 -> 올림/내림
// rdm = rdm * 7;
// console.log('난수*7:',rdm);
// console.log('난수*7 내림:',Math.floor(rdm));
// console.log('난수*7 올림:',Math.ceil(rdm));
// -> 1부터 최대수는 올림처리 / 0부터 최대수-1은 내림처리

// 중간난수는?
// 예) 4~12 사이 난수는?
// console.log('4~12사이 난수:',
// Math.ceil(Math.random()*9)+3)

/**************************************** 
    [ 내가 원하는 난수 만들기 ]

    1. 먼저 난수를 발생시킨다!
    Math.random()

    2. 1부터 원하는 최대수일 경우 최대수를 곱한다
    Math.random() * 최대수

    3. 원하는 범위의 난수를 올림처림함
    Math.ceil(Math.random() * 최대수)

    ________________________________

    [ 중간 범위의 난수 만들기 ]

    1. 1부터 최대수 랜던수를 먼저구한다
    Math.random() * 최대수

    2. 원하는 범위의 시작수 만큼 더함
    Math.ceil(Math.random() * 최대수) + 시작수만큼

    (만약 0부터 시작수로 하면 내림을 적용!
    -> Math.floor())
    ___________________________________

    예) 4~9 사이의 난수 구하기 : 1~6먼저구함
    -> 최대수는 6, 시작수 만큼 더할 수는 3
    Math.ceil(Math.random() * 최대수) + 시작수만큼
    Math.ceil(Math.random() * 6) + 3
    ________________________________

    [ 중간범위 수 계산 ]
    작은수 ~ 큰수
    1. 최대수 = 큰수 - 작은수 + 1
    2. 시작수차이 = 작은수 - 1;


****************************************/

// 이미지 웹경로 배열
const rimg = ["https://img.etnews.com/photonews/2110/1461216_20211007085904_466_0001.jpg", "https://i.namu.wiki/i/bFpYClpzX-ErL1Kdad69t09fhPPeVb2VwOB_qpH-9qxQ3Tx2Nz9zVIiLPWSMkvnVG5XWnUdQM5hHrGZ4cWneZA.webp", "https://img.imbc.com/adams/Program/202111/132804027350463581.jpg", "https://image.ytn.co.kr/general/jpg/2021/0925/202109251350012465_d.jpg"];

// 1. 요구사항 : 웹경로 이미지를 화면에 넣고 랜덤하게
// 이미지를 칼라로 약간커지게 클래스 on을 주어서 변경함!
//2. 대상: .imbx
const imbx = mFn.qs(".imbx");

//3. 이미지 넣기  / map 과 forEach 비교
// rimg.forEach(v =>{
//     imbx.innerHTML += `<div><img src=${v} alt="드라마 제목"></div>`;
// } );

imbx.innerHTML = rimg.map(v =>`ㅇv>`).join('');

//4. 랜덤 처리 대상 div 선택하ㄹ기
const target = mFn.qsa('.imbx div');
console.log("랜덤대상",target);

//00 함수 호출 전에 선언해야ㅇㅇ함! 발생한 난수 저장변수
let beNum = 999;

//함수최초호출
randomAddOn();
//초기값은 해당 난수 범위 외의 수(처음에 통과)
//5. 랜덤 처리함수 만들기 ////////////
function randomAddOn(){

    //1. 먼저 난수를 발생시킨다!
    let rdm = Math.floor(Math.random()*4);
    console.log("난수:",rdm);
    
    //2. 전에 발생한 난수와 같으면 다시한번 난수 발생
    //직전 난수는 bdNum에 저장함
    while (rdm == beNum) {Math.floor(Math.random()*4);
    console.log("다시난수:",rdm);
    }//////////while 

    //3. while문 통과 후 결정된 난수를 직전 난수 변수에 할당
    beNum = rdm;

    //4. 랜덤으로 발생한 난수에 해당하는 div 에 class on 추가
    //나머지는 on 제거
    target[rdm].classList.remove('on');
    target.forEach((ele, i)=>{
        if(i == rdm) ele.classList.add('on');
        else ele.classList.remove('on');
     });
   
}////randomAddOn함수////////////////////
setInterval(randomAddOn, 1000);