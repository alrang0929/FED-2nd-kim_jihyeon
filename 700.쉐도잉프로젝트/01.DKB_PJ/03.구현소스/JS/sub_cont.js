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
    // let confPrt = $(this).parent().parent().is(".preview-box");
    //parent(): 바로 위 상위요소로 이동
    //두번 위로 이동해소 li 위 ul 위의 [div class가 preview-box인가?] <<is 메서드로 확인

    //[ 데이터명을 data-db에 넣어 읽어오기 ]
    //사용하고자하는 데이터 이름을 ul태그의 data-db 속성에 담아 놓고
    //이것을 읽어온다
    let db = $(this).parent().attr("data-db");
    //$(this).parent() => li 바로 위의 부모 ul
    //attr('data-db') : data-db 속성값 읽어오기

    //js 문법일 경우
    // this.parentElement.parentElement.classList.contains("클래스명");

    console.log("나야나", this, db);

    // if (db) {
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

    //dkbData[db] << 해당 데이터에 매칭
    let selData = dkbData[db].find((v) => {
      if (v.idx == idx) {
        // console.log("찾았다",v);
        return true;
      }
      console.log("돌아");
    }); ////find
    console.log("selData:", selData, db, dkbData[db]);

    //서브박스에 내용넣기
    //제이쿼리: innerHTML => html(``) 메서드 사용
    subContBox
      .html(
        //1. 미리보기 출력
        db == "previewData"
          ? `
        <button class="cbtn">×</button>
    <div class="sub-inbox inbox">
      <h1>${selData.title}</h1>
      <div class="sub-item">
      ${selData.story}
    </div>
    </div>
        `
          : //2. 현장포토 출력
          db == "liveData"
          ? `
        <button class="cbtn">×</button>
        <div class="sub-inbox inbox">
        <h1>현장포토 : ${selData.title}</h1>
        <div class="sub-item">
        <img 
        src="./images/live_photo/${selData.imgName}.jpg" 
        alt="${selData.title}"
        />
      </div>
      </div>
        `
          : //3. 대표포스터 출력
          db == "posterData"
          ? `
        <button class="cbtn">×</button>
        <div class="sub-inbox inbox">
        <h1>대표포스터 : ${selData.title}</h1>
        <div class="sub-item">
        <img 
        src="./images/poster_img/${selData.imgName}.jpg" 
        alt="${selData.title}"
        />
      </div>
      </div>
        `
          : 
          db == "clipData"
          ?//4. 클립 영상
            `
        <button class="cbtn">×</button>
        <div class="sub-inbox inbox">
           <h1>클립 영상 : ${selData.title}</h1>
           <h4>${selData.subtit}</h4>
          
           <div class="sub-item">
           <iframe src="https://www.youtube.com/embed/${selData.mvid}?autoplay=1" allow="autoplay"></iframe>
           </div>
           </div>
        `
        :
        //5. 경고문구
        `
        <button class="cbtn">×</button>
        <div class="sub-inbox inbox">
        <h1><DB정보확인 필요/h1>

           </div>
        `
      )
      .show();

    //닫기버튼 이벤트 설정하기
    $(".cbtn").click(() => subContBox.hide());
    // } ////if /////////////
  });
} //////////////////showSubbox함수/////////
