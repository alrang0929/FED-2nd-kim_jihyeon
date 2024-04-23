//공통함수 JS - my_function.js
//객체를 내보내기
// export default



// const myFn -> 선언과 할당후 export default 하려면 하단에서! << 여턴 받는데선 이름 지정 소용X
export default { //직접 내보내기
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  
    // 바운딩위치값함수
    getBCR: (ele) => ele.getBoundingClientRect().top,
  
    // 옵셋탑값 반환함수
    getOT: (ele) => ele.offsetTop,
  };