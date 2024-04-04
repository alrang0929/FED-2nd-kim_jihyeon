// 글자등장1 JS - show_letter.js

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////

  // 1. 구현요구사항 : 
  // - 글자를 박스에 넣고 하나씩 날아오면서 등장

  // 2. 대상선정 : .stage-letters
  const stage = domFn.qs('.stage-letters');
  console.log('대상:',stage);

  // 3. 글자 데이터 변수할당
  const myText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  // 4. 데이터글자 띄어쓰기 기준 글자묶음을 태그로 싸기
  // [기준문자열로 문자를 잘라 배열로 만들기!]
  // -> 문자열.split(자를 기준 문자)
  // 결과: 자를문자열은 없어지고 배열로 나눠서 저장
  const newText = myText.split(' ');
  //이 경우 스페이스(공백)을 기준으로 나눔!
  console.log(newText);

//   html태그변수
  let hcode = '';
  // 순번증가변수
  let seqNum = 0;

  //새로 생성된 newText배열을 for of문으로 순회한다
  for(let x of newText){
    // console.log(x);
        hcode += 
        `<span style="transition-delay: ${seqNum*0.1}s;">${x}</span>`;

    // 순차적인 지연시간 생성을 위한 숫자변수 증가

  } //////// for of ///////////

  console.log('코드:',hcode);

  // 5. 스테이지박스에 코드 출력하기
  stage.innerHTML = hcode;

  // 6. 일정시간뒤 등장클래스 .on주기
  setTimeout(() => {
    stage.classList.add('on');
  }, 2000);

