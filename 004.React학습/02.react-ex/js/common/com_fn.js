//공통 처리 js - com_fn.js

//초이스 인트로 애니 실행함수
const choicesIntroAni = () => {
  $(".tit span")
    .css({ display: "inline-block" })
    .animate({ scale: "200%" }, 1000)
    .animate({ scale: "100%" }, 1000);

  $(".img-box img").delay(700).fadeTo(2000, 1);
  //소제목 애니
  $(".stit").delay(100).fadeTo(2000, 1);
  //fadeTo(시간,오퍼시티) > opacity만 조절하는 애니 메서드
}; ///////choiceintroAni

//타이틀 애니 실행함수
const logoAni = () => {
  $("#logo")
    .animate({ scale: "200%", rotate: "360deg" }, 2000)
    .animate({ scale: "100%", rotate: "0deg" }, 2000);
}; ///////logoAni

//셋팅 초기화 함수
const initFn = () => {
  //메인이미지 투명 초기화+소제목(stit) 초기화
  $(".img-box img, .stit").css({ opacity: 0 });
  // 스크롤 맨 위로 이동하기
  window.scrollTo(0, 0);
}; ////////initFn

//내보내기
export { choicesIntroAni, logoAni, initFn };
