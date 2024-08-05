//nanda PJ - nanda js

//1. 뷰JS 인스턴스 생성하기
const vm = new Vue({
//1. 대상선전 (대상은 꼭 id일 필요 ㄴㄴ, class로 할 경우 첫번째 만나는 대상을 선택)
el:"#vue-app",
//2. 데이터 설정하기
data:{
    //2-1) 샵명 데이터
    bigTit: "style NANDA",
    //2-2) logo태그 정보
    logo: `<img src="./images/logo_3ce.png" alt="nanda logo">`,
    
},
});///vue 인스턴스//////////////////////////