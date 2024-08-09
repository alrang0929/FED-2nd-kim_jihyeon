//맨 처음 읽어들이는 main js 파일
import Vue from 'vue'
// 구성 Root VUE파일
import App from './App'
// 뷰js 라우터 불러오기(기본적으로 라우터 폴더 아래 index.js를 읽어옴)
import router from './router'
// 뷰액스 스토어js 불러오기
import store from './store'

// 팁 메시지 안나오게 하는 코드
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, //스토어 사용등록
  router, //라우터 사용등록
  components: { App },
  template: '<App/>',
  //뷰 인스턴스 생성 직후 호출코드 구역
  created(){
    // 데이터 초기화 메서드 호출
    store.commit('initSet');
    
  },
})
