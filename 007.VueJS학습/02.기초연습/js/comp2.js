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
    <img 
    v-bind:src="gsrc" 
    v-on:click="goPapa('나야나!')"
    v-on:mouseover="goMama({이름:'김고은', 나이:'34'})"
    alt="gname"
    >
    <aside>
        <h2 v-text="gname"></h2>
        <h3 v-text="gprice"></h3>
    </aside>
</div>
`, //template: 자식 컴포넌트에서 부모 컴포넌트의 메소드를 바로 호출 할 수 없다!
/* 

따라서 자신의 메서드를 만들고 그곳에서 호출방식에 따라 부모를 호출한다
v-on:hull="goMsg" 
내가 만든 이벤트를 부모 메서드 호출
이것을 어디서 연결하나?
내 함수에서 this.$emit("hull",전달값) 

*/


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
    //5) 부모 컴포넌트 메서드 호출을 위한 함수
    goPapa(txt){
      console.log("내꺼니까 호출가능",txt,this);
      //부모 메서드 바로 호출 불가
      // goMsg(txt);

      this.$emit('hull',txt);
      

      //따라서 아래 방법을 쓴다
      //[[부모 메서드 호출방법]]
      // this.$emit(생성이벤트명,전달값)
      // ㄴ> 생성이벤트명: 내가 만든 이벤트명으로 서브 컴포넌트 태그에 이벤트를 등록하여 호출하는 방식!
      // 아래와 같이 click 이벤트가 아니고
      //<list-app v-on:click="함수명"></list-app>
      //  아래와 같이 내가 만든 이벤트 명이다
      //<list-app v-on:hull="함수명"></list-app>
      // ㄴ> 이벤트 명을 만든 이유는? 이 이벤트 명으로 특정한 일을 해주기 위함이다!
      //여기서 특정한 일은?? 부모함수 호출!!

    },
    // 6) 부모메서드 호출함수 하나 더 
    goMama(pm){
      this.$emit('oh-my-gotkimchi',pm);
      console.log("갓김치 호출함수",pm);
    }
  },
}); ///component ///////////////////
// makeVue(".grid");

//list comp라는 자식 컴포넌트의 부모
new Vue({
//1. 대상
el:".grid",
//2. 메서드
methods:{
  //자식 이벤트 전달 후 실행 메서드
  goMsg(txt){
    alert("자식이 부모에게 이벤트 전달 성공!"+txt);
  },
  //자식 컴포넌트의 오버 이벤트가 전달되어 호출하는 메서드
  overMsg(pm){
    //pm = 전달받을 객체값{이름:"어쩌구", 나이:"저쩌구"}
    console.log("오마이갓김치",pm.이름,pm.나이);
  },
},
});

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
