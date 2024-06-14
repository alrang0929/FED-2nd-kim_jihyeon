///////////메인컴포넌트 - MainCont ///////////////////////

import React, { useEffect, useLayoutEffect } from "react";
import $ from "jquery";
//modules import
import Benner from "../modules/Benner";
import * as wFn from "../../js/func/auto_wheel";
import FashionIntro from "../modules/FashionIntro";


//////import area/////////////////////////

function MainCont(props) {
  //화면 렌드링 실행구역
  useEffect(() => {
    // console.log("useEffect");

    //document / body / window이 세가지는
    //이벤트를 등록하고 삭제할 수 있도록 여기서 이벤트를 걸어준다
    window.addEventListener("wheel",wFn.wheelFn);

    //
    wFn.evtFn();

    //컴포넌트 소멸시 이벤트 삭제하기
    return(()=>{
      console.log("메인소멸");
    });
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
      <section className="page" >
        <FashionIntro catName="men" subCatName="etc"/>
      </section>

      {/* 3. 여성패션 영역 */}
      <section className="page">
      <FashionIntro catName="women" subCatName="etc"/>
      </section>

      {/* 4. 스타일패션 영역 */}
      <section className="page">
        <h1>스타일</h1>
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
