// DC PJ 비디오스와이프 컴포넌트
import { catTit } from "../data/vid_swipe_tit";
/* 
[ 구조정의 ]
Root>
section.vidswbox >
    ( h2.tit + <SwiperVid />) +
    ( section.vidbx > 
        div.playvid >
            h2.ifrtit + iframe + button.cbtn )
*/
import React from "react";
import { SwiperApp } from "../plugin/SwiperApp";

function VidSwipe({catName}) {
    //catName = 카테고리명
  return (
    <>
      <section className="vid-swbox">
        <SwiperApp/>
        {/* 1. 모듈타이틀 */}
        <h2 className="tit">{catTit[catName]}</h2>
        {/* 2. 스와이퍼 컴포넌트 : SwiperVid
        -> 전달속성 cat은 데이터선택을 위한값 */}
        {/* 3. 비디오 재생창 */}
        <section className="vid-bx">
          {/* 비디오 중앙박스 */}
          <div className="play-vid">
            {/* 비디오타이틀 */}
            <h2 className="ifr-tit"></h2>
            {/* 아이프레임 */}
            <iframe src="" allow="autoplay"></iframe>
            {/* 닫기버튼 */}
            <button className="cbtn">×</button>
          </div>
        </section>
      </section>
    </>
  );
}

export default VidSwipe;
