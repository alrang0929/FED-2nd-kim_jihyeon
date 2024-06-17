//상단영역 컴포넌트 - TopArea.jsx
import React from "react";
//css
import "../../css/index.scss";
//data
import { gnbData } from "../../js/data/gnb";
import { TotalMenu } from "../modules/Totalmenu";
import $ from "jquery";

//data

/////////////import area////////////////////////

function TopArea() {

//전체메뉴 열기 닫기 함수 
const showhideMenu = (e) =>{

  console.log(e.currentTarget);
  //전체매뉴대상 mbox
  //1. 보이기 숨기기 전환하기
  $(".mbox").fadeToggle(300);
  //fadein() 서서히 나타남
  //fadeout() 서서히 사라짐
  //fadeToggle() 서서히 사라짐/나타남 전환
  //fade ~ 시 displaye none 되버림

  //2. 햄버거 메뉴에 
  // toggleClass: 클래스 on 넣기 뺴기
  $(e.currentTarget).toggleClass("on");
  // console.log((e.currentTarget).is(".on"));

  //3. 비디오 재생/멈춤하기
  //대상: .bgm
  let bgm = $(".bgm");
  //햄버거 버튼에 on이 있으믄 / 없으면 멈춤
  $(e.currentTarget).is(".on")?bgm.get(0).play() : bgm.get(0).pause();

  //비디오 객체는 실제 사용시 
  //제이쿼리의 미디어를 선택 후 실제 사용할때는 
  //get(0)하고 난 후 사용 

  //비교해서 js는 선택 후 바로 play(), pause() 사용
  // document.querySelector(".bgm").play();
  

};///////////showHideMenu////////////////

  ////////코드리턴구역////////////////////
  return (
    <>
      <div id="top-area">
        <header className="top-area ibx">
          <h1 id="logo">
            <a href="#">
              <img src="/images/main_logo.png" alt="파일럿로고" />
            </a>
          </h1>
          <nav className="gnb">
            <ul>
              <li className="bld">배너순번 li 숨기기</li>
              {
                gnbData.main.map((v,i) => (
                  <li key={i}>
                    <a href="#">{v}</a>
                  </li>
                ))
              }
            </ul>
          </nav>
          <div className="ham" onClick={
            showhideMenu}>
            <span></span> <span></span> <span></span>
          </div>
          {/* 전체메뉴 컴포넌트 */}
          <TotalMenu/>
        </header>
      </div>
    </>
  );
}

export default TopArea;
