// DC PJ 캐릭터 상세페이지
// -> 캐릭터 리스트로 부터 라우팅 이동하여 보이는 페이지
import React, { useEffect } from "react";

//라우터로 전달한 stats값을 읽기위한 객체
import { useLocation } from "react-router-dom";

import Banner from "../modules/Banner";
import CatList from "../modules/CatList";

import "../../css/cat_detail.scss";

function CatDetail() {
  //라우터 호출시 전달한 값을 받는다
  const loc = useLocation();
  const cname = loc.state.cname;
  const cdesc = loc.state.cdesc;
  const facts = loc.state.facts;
  // console.log(cname,cdesc,facts);

//화면렌더링 실행구역
//매번 실행해야 컴포넌트 렌드링 실행구역 업데이트시에도 작동
useEffect(()=>{
window.scrollTo(0,0);
});

  /////////코드리턴 구역////////////////
  return (
    <>
      {/* 1.배너모듈 */}
      <Banner catName={cname} />
      {/* 2. 상세정보 박스 */}
      <div className="detail">
        {/* 2-1 캐릭터 설명박스 */}
        <div className="desc-box">
          {/* 캐릭터명 */}
          <h2>{cname}</h2>
          {/* 캐릭터소개 */}
          <div className="cdesc">
            {
              // 문자데이터 중 "^"로 잘라서 배열로 만들어 각각 p 태그로 랩핑!
              cdesc.split("^").map((v, i) => (
                <p key={i}>{v}</p>
              ))
              // console.log(cdesc.split("^"))
            }
          </div>
        </div>
        {/*2-2 캐릭터명세 */}
        <div className="facts">
          <div>
            <h3>CARACTER FACTS</h3>
            <table>
              <tbody >
                <td >
                  {facts.split("^").map((v, i) => (
                    <tr key={i}>
                      {v.split(":").map((v, i) => (
                        <>
                          <td key={i}>
                            {v}
                            {i == 0 && " : "}
                          </td>
                        </>
                      ))}
                    </tr>
                  ))}
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* 3. 캐릭터리스트 모듈  */}
      <CatList />
    </>
  );
}

export default CatDetail;
