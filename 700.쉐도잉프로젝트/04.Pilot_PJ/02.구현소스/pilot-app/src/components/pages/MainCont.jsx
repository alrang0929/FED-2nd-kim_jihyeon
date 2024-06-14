///////////메인컴포넌트 - MainCont ///////////////////////

import React, { useEffect, useLayoutEffect } from "react";
import $ from "jquery";
//modules import
import Benner from "../modules/Benner";
//자동휠함수
import * as wFn from "../../js/func/auto_wheel";
import FashionIntro from "../modules/FashionIntro";

//////import area/////////////////////////

function MainCont(props) {
  //화면 렌드링 실행구역
  useEffect(() => {
    // console.log("useEffect");

    //document / body / window이 세가지는
    //이벤트를 등록하고 삭제할 수 있도록 여기서 이벤트를 걸어준다
    //1. 자동 휠함수 이벤트 연결하기
    window.addEventListener("wheel", wFn.wheelFn);

    //2. 메뉴+인디케이터 이벤트 기능설정함수 호출
    wFn.evtFn();

    //3. 등장요소 css 초기화 함수 호출
    wFn.initSet();
    
    //3. 컴포넌트 소멸시 이벤트 삭제하기
    return () => {
      console.log("메인소멸");
    };
  }, []);
  // useLayoutEffect(()=>{
  //   console.log("useLayoutEffect");
  // },[]);

  //////////코드리턴구역/////////////////////////
  return (
    <>
      <section
        id="ban"
        className="page none-sel"
        style={{ background: "lightblue" }}
      >
        {/* 1. 배너 컴포넌트 */}
        <Benner />
      </section>

      {/* 2. 남성패션 영역 */}
      <section className="page">
        <FashionIntro catName="men" subCatName="etc" opt={false} />
      </section>

      {/* 3. 여성패션 영역 */}
      <section className="page">
        <FashionIntro catName="women" subCatName="etc" opt={true} />
      </section>

      {/* 4. 스타일패션 영역 */}
      <section className="page">
        <FashionIntro catName="style" subCatName="etc" opt={false} />
      </section>
      {/* 메인에만 나오는 사이드 인디케이터 */}
      <nav className="indic">
        <ul>
          <li className="on">
            <a href="#ban">
              <span>배너</span>
            </a>
          </li>
          <li>
            <a href="#men">
              <span>남성의류</span>
            </a>
          </li>
          <li>
            <a href="#women">
              <span>여성의류</span>
            </a>
          </li>
          <li>
            <a href="#style">
              <span>스타일</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MainCont;
