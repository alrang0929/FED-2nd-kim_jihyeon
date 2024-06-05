//module / banner page
import React from "react";
//배너 슬라이드 기능함수
import goSlide from "../func/go_slide";

//data
import "../../css/banner.scss";
import { banData } from "../data/banData";
///////import Area/////////////////////////////////

function Banner({ catName }) {
  //catName: banner data 카테고리 이름
  //선택 데이터
  const selData = banData[catName];

  //코드 리턴구역
  return (
    <div className="banner">
      {/* 이동슬라이드 */}
      <ul className="slider">
        {selData.map((v, i) => (
          <li key={i}>
            <img src={v.src} alt={v.tit1 == "" ? "banner image" : v.tit1} />
            <section className="bantit">
              <h2>{v.tit1}</h2>
              <p>{v.tit2}</p>
              {/* 버튼데이터가 있을 때만 출력 */}
              {v.btn !== "" && <button>{v.btn}</button>}
            </section>
          </li>
        ))}
      </ul>

      {/* 양쪽이동버튼 */}

      {
        //배너 데이터가 1개이면 양쪽 버튼 이동 버튼 숨기기
        //배열.length 로 배열 개수가 1 이상일떄만 출력
        selData.length > 1 && (
          <>
            <button className="abtn lb" onClick={goSlide}>＜</button>
            <button className="abtn rb" onClick={goSlide}>＞</button>
          </>
        )
      }
      {/* 블릿 인디케이터 - 선택데이터의 개수만큼 만들기 */}
      <ol className="indic">
        {/* map매서드의 i 반복기능만 이용하여 새로 생성 
        순번은 첫번째 블릿 li만 클래스 on 넣기
        */}
        {selData.map((v, i) => (
          <li key={i} className={i =="0" ? "on" : ""}></li>
        ))}
      </ol>
    </div>
  );
}

export default Banner;
