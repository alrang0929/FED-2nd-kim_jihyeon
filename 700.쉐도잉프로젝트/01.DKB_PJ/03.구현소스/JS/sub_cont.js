////메인페이지 서브컨텐츠 띄우는 구현코드 -  sub_cont.js///////////////////////////
import myFn from "./my_function.js";

// 데이터 셋팅 불러오기 //////
import * as dkbData from "../data/dkb_data.js";

export default function showSubBox() {
  console.log("부르면 서브보임");

  //1. 서브컨텐츠 보이기 기능 구현
  //1)대상선정
  //이벤트 대상:
  //미리보기: .preview-box li
  //현장포토 .live-box li
  //대표 포스터: .poster-box li,
  //최신 동영상: .clip-box li
  const subViewBox = $(`
.preview-box li,
.live-box li,
.poster-box li,
.clip-box li
`);

  console.log("나야나d", subViewBox);

  //1-2) 변경대상: .sub-cont
  const subContBox = $(".sub-cont");

  //2. 이벤트 설정 및 함수 구현하기 ///////////////
  subViewBox.click(function () {
    let confPrt = $(this).parent().parent().is(".preview-box");
    //parent(): 바로 위 상위요소로 이동
    //두번 위로 이동해소 li 위 ul 위의 [div class가 preview-box인가?] <<is 메서드로 확인

    //js 문법일 경우
    // this.parentElement.parentElement.classList.contains("클래스명");

    console.log("나야나", this, confPrt);

    if (confPrt) {
      //1. 키속성값 읽어오기
      let idx = $(this).attr("data-idx");
      //attr(속성명) => 속성값 읽어오기 메서드
      //attr(속성명,속성값) => 속성값 넣기 메서드

      console.log("idx:", idx);

      //[ 배열순회 메서드 비교]

      //forEach()는 모두 순회한다
      // dkbData.posterData.forEach(v => {
      //     if(v.idx == idx){
      //         console.log("찾았다",v);
      //         return;
      //     }
      //     console.log("돌아");
      // })////forEach

      //find()는 조건에 맞을떄 return true 하면
      //해당 배열값이 변수에 할당됨
      //만약 일치하는 데이터가 없으면 undefined
      let selData = dkbData.previewData.find((v) => {
        if (v.idx == idx) {
          // console.log("찾았다",v);
          return true;
        }
        console.log("돌아");
      }); ////find
      console.log("selData:", selData);

      //서브박스에 내용넣기
      //제이쿼리: innerHTML => html(``) 메서드 사용
      subContBox
        .html(
          `
        <button class="cbtn">×</button>
    <div class="sub-inbox inbox">
      <h1>${selData.title}</h1>
      <div class="sub-item">
      ${selData.story}
    </div>
    </div>
        `
        )
        .show();

      //닫기버튼 이벤트 설정하기
      $(".cbtn").click(() => subContBox.hide());
    } ////if /////////////
  });
} //////////////////showSubbox함수/////////
