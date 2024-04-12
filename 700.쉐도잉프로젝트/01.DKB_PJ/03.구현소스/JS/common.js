//공통처리JS - common.js
//공통처리 데이터 불러오기
import comData from "../data/common_data.js";
//나의 함수 불러오기
import mFn from "./my_function.js";
import slideFn from "./slide.js";
//GNB데이터
import gnbData from "../data/GNB_data.js";

export default function setElement() {
  //대상선정: #top-area, #ban-area #spart-menu #footer-area
  const topArea = mFn.qs("#top-area");
  const banArea = mFn.qs("#ban-area");
  const spartMenu = mFn.qs("#spart-menu");
  const footerArea = mFn.qs("#footer-area");

  //코드넣기

  topArea.innerHTML = comData.topArea;
  banArea.innerHTML = comData.banArea;
  spartMenu.innerHTML = comData.spartMenu;
  footerArea.innerHTML = comData.footerArea;

  //3. 기능 처리함수 호출하기
  //3-1 GNB메뉴 만들기 함수 호출!
  makeMenu();
  //3-2 slideFn 슬라이드 기능함수 호출!
  slideFn();
} ////setElements함수////////////////

//GNB코드 만들기 함수////
function makeMenu(){
  //3-1 GNB메뉴 코드 넣기
  //대상: .gnb
  //데이터: gnbData 는 객체! 따라서 배열용 map()매서드 못씀
  //-> gnbData를 Keys 배열로 변환해서 사용함!
  //이 객체의 key는 상위메뉴 이기도함
  //Object.keys(객체) -> 해당객체의 속성명(키) 배열생성이 됨!
  console.log(Object.keys(gnbData));
  mFn.qs(".gnb").innerHTML = `
<ul>
${Object.keys(gnbData)
  .map(
    (v) => `
  <li>
  <a href="#">${v}</a>
  ${
    //서브메뉴가 없음?'':서브메뉴 출력!}
    //gnbData[키] => 값을 가져옴
    gnbData[v] == "없음"
      ? ""
      : `
    <div class="smenu">
      <div class="swrap">
        <h2>${v}</h2>
        <ol>
        ${gnbData[v]
          .map(
            (vSub) => `
          <li>
            <a href="#">${vSub}</a>
          </li>
          `
          )
          .join("")}
          </ol>
        </div>
      </div>
    `
  }  
  </li>
 
  `
  )
  .join("")}
  </ul>
  `;
} ////////makeMenu
