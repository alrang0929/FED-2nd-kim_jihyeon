//02 컴포넌트연습1 - props down 부모변수를 자식에게 전달!!

//vue js 인스턴스 생성용 함수
const makeVue = (x) => new Vue({ el: x });

//1. 제목에 넣을 전역 컴포넌트 만들기
//Vue.component(케밥케이스 컴포넌트 태그명,{옵션})
//이걸로 생성함
//같은 이름의 태그구성요소에 실제 template 값이 들어감!
Vue.component("tit-comp", {
  template: `
    <strong>
        <span>
            😊Vue JS😜 컴포넌트 : 
        </span>
        쇼핑모~~~올 갤러리 리스트
    </strong>
    `,
}); //전역 컴포넌트1/////////////

//컴포넌트를 먼저 만들고 난 후 vue 인스턴스 생성
//뷰 인스턴스 생성하기
makeVue(".tit");

//[갤러리 리스트용 변수 셋팅]///////////////////////////////

//1. 갤러리 이미지 번호용 변수
let inum = 0;
//2. 상품명 배열
const goods = ["프레이컷", "아일렛기모", "베어부클", "포멀믹스톤"];

//2. 갤러리 리스트에 넣을 전역 컴포넌트 만들기
Vue.component("list-comp", {
  // 2-1 template 옵션: 태그구성
  // v-bind:속성 디렉티브
  //변수를 사용할 수 있는 속성재구성해줌!

  template: `
<div>
    <img v-bind:src="gsrc" alt="gname">
    <aside>
        <h2 v-text="gname"></h2>
        <h3 v-text="gprice"></h3>
    </aside>
</div>
`, //텝플릿

  // [상위 컴포넌트 전달변수 설정속성: props]
  props:["list-num","my-seq","end-let"],

  //배열은 상정한 변수를 문자형으로 나열만 하면 되고 만약 각 변수의 데이터 타입을 트정하고있으면

//   props:{
//     "list-num":Number,
//     "my-seq":Number,
//     "end-let":String
// },
  //이 변수를 사용할떄는 케몰케이스 변수로 사용!
  //"list-num" -> this.listNum
  //ㄴ> 내부용 변수이므로 this 키워드 반드시 사용!!


  //2-2 data 옵션: 컴포넌트 내부 변수셋팅
  //실행원리: 컴포넌트가 빌드할 때 data 속성의 함수를 호출한다!
  // 그래서 함수에 retrun 되는 객체 값이 컴포넌트 내부에 전달된다!
  //data: function(){} << 풀네이밍
  //  data(){}, << 단축버전
  data() {
    //객체리턴 필수!!!!!중요!!!!!!!!!!
    return {
      //이미지 src
      gsrc: `./images/${this.listNum}.jpg`,
      //상품명: gname
      gname: this.setname()+" "+this.endLet+this.mySeq,
      //상품가격: gprice
      gprice: this.setPrice(),
    };
  }, // data///
  //2-3 methods 속성 : 컴포넌트 내부 메소드 셋팅
  methods: {
    //1) 이미지 번호 만들기 함수
    // 외부 전역변수 inum을 만들어 1씩 증가하여 리턴함!
    setNum() {
      return ++inum;
    }, //setNum
    //2) 상품명 만들기 함수
    setname() {
      return goods[Math.floor(Math.random() * 4)];
    },
    //3) 가격만들기 함수
    setPrice() {
      let rdm = Math.ceil(Math.random() * 17) + 3;
      return this.addCommas(20000 * rdm) + "원";
    },
    //4) 세자리콤마 함수
    addCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
}); ///component ///////////////////
makeVue(".grid");

// 3. 유튜브 동영상 컴포넌트 만들기
Vue.component("ifr-comp",{

    template:`
    <iframe width="49%" style="aspect-ratio: 16/9;" 
    v-bind:src="ifrSrc" title="#고윤정 과 함께 차가운 겨울을 더욱 액티브하게!  l 디스커버리 23FW #goyounjung #크롭패딩" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
    `, //template

    //3-2 data옵션
    props: ["mv-code"],
    data(){
        return{
          ifrSrc: this.getItframeSrc(this.mvCode),
        };
    },//data
    //3-3 methods
    methods:{
      //동영상 정보 리턴함수
      getItframeSrc(code){ //동영상코드
        return `https://www.youtube.com/embed/${code}?autoplay=1&mute=1&loop=1&playlist=${code}`;
      },
    },
});
//뷰인스턴스 생성하기 : 유튜브 동영상 컴포넌트
makeVue(".you-box");

Vue.component("footer-comp",{
    template:`
    <footer>
    <h3>배고파 컴퍼니</h3>
    <p>diffldiffldiffktud diffkfldiffk</p>
    </footer>
    `, //template

}); ///// component

makeVue(".tit2");
