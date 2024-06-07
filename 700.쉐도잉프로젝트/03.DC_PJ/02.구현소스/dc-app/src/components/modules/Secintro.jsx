///DC PJ - 섹션소개모듈 / Secintro.jsx
import React from "react";
import { Link } from "react-router-dom";
import { secIntroData } from "../data/set_intro";
import "../../css/set_intro.scss";

///////////////////////intro area/////////////////////

function Secintro() {
  //불러온 데이터 변수할당
  const selData = secIntroData;

  return (
    <>
      {/* Root > section > img Box + title Box + button Box */}

      <section className="sec-intro">
        {/* 반복단위박스 */}
        {selData.map((v, i) => (
          <div className="" key={i}>
            {/* 1. 이미지 박스 */}
            <div className="imbx">
              <img src={v.isrc} alt={v.tit.split("^")[0]} />
              {/* split 으로 자르면 배열이 됨! */}
            </div>
            {/* 2. 타이틀 박스 */}
            <div className="titbx">
              <h3>{v.tit.split("^")[0]}</h3>
              <h2>{v.tit.split("^")[1]}</h2>
            </div>
            {/* 3. 버튼 박스 */}
            <div className="btnbx">
              <Link to={v.link}>
                <button>{v.btn}</button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Secintro;
