///DC 비디오 소개 모듈
import React from "react";
import { vidIntroData } from "../data/vid_intro";
import "../../css/vid_intro.scss";

//자동완성: rsf
function VidIntro({ catName, clsName }) {
  //catName : 카테고리명, clsName: 클래스명
  //선택데이터 변수할당
  const selData = vidIntroData[catName];

  const linkCode = (v) =>{
    //별로 자른 후 배열로 변환
    let data = v.split("*");
    ///코드 리턴구역
    return(
    <>
   {data[0]}
    <a 
    target="_blank" 
    href={selData.link[1]}>
    {selData.link[0]}
    </a>
    {data[1]}
    </>
    );
  };//////linkCode/////////////////////////////////////////////
  //링크가 있는 코드 만들기 함수
  return (
    <section className={"vidbox " + clsName}>
      {/* 1. 비디오 박스 */}
      <div className="">
        <div className="vb1">
          <iframe src={selData.vsrc} title={selData.btit}></iframe>
        </div>
        {/* 2. 타이틀 설명 파트 */}
        <div className="vd2">
          {/* 작은제목 (stit)*/}
          <h3>{selData.stit}</h3>
          {/* 큰제목 (btit)*/}
          <h2>{selData.btit}</h2>
          {/* 요약소개(링크포함): sum */}
          <p>{
          selData.sum.indexOf("*") == 1
          ?selData.sum 
          : linkCode(selData.sum)}</p>
          {/* 설명(링크포함):desc */}
          <p>{
          selData.desc.indexOf("*") == 1?
          selData.desc 
          : linkCode(selData.desc)}</p>
        </div>
      </div>
    </section>
  );
}

export default VidIntro;
