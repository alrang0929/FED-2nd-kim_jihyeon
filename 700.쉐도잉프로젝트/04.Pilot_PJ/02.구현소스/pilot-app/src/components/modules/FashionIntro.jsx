//패션인트로 컴포넌트 - FashionIntro.jsx
import React from "react";

//data
import { fsData } from "../../js/data/fashion_intro";

//css
import "../../css/fashion_intro.scss";

//////////////////////import area ////////////////////////

function FashionIntro({ catName, subCatName, opt }) {
  //catName: 카테고리 이름
  //subCatName: 서브카테고리 이름
  //opt: 방향옵션 [역방향: true / 정방향: false]
  //서브가 아닌경우 subCat의 값은 "etc"임
  //역방향: flex-direction: row-reverse;

  //선택 데이터 변수할당
  const selData = fsData[catName];

  ///////////코드리턴구역/////////////////////////////
  return (
    <>
      <div id={catName} className="fs-page">
        <ul
          className="pgc"
          style={{
            flexDirection: opt ? "row" : "row-reverse",
            //정방향 역방향 전환코드
          }}
        >
          {/* 1. 첫번째 이미지 박스 */}
          <li className="imgc">
            <img src={selData.isrc[0]} alt={selData.ialt[0]} />
          </li>
          {/* 2. 두번째 글자박스 */}
          <li className="txtc">
            <h2 className={catName == "style" ? "tm" : ""}>
              <a href="#">
                {/* [★참고] 만약 데이터에 태그가 있어서 이를 html로 넣으려면?
                dangerouslySetInnerHTML={{__html:데이터}}
                속성을 사용한다*/}
                {selData.tit[0][0]}
                <br />
                {selData.tit[0][1]}
              </a>
            </h2>

            {
              //스타일인 경우 글자박스 하나 더 출력됨
              catName == "style" && (
                <>
                  <h2 className="tw">
                    <a href="#">
                      {/* [★참고] 만약 데이터에 태그가 있어서 이를 html로 넣으려면?
                dangerouslySetInnerHTML={{__html:데이터}}
                속성을 사용한다*/}
                      {selData.tit[1][0]}
                      <br />
                      {selData.tit[1][1]}
                    </a>
                  </h2>
                </>
              )
            }
          </li>
          {/* 3. 세번째 이미지 박스 : 스타일만 */}
          {
            //스타일인 경우 li 이미지박스 생성
            catName == "style" && (
                <li className="imgc">
                  <img src={selData.isrc[1]} alt={selData.ialt[1]} />
                </li>
            )
          }
        </ul>
      </div>
    </>
  );
}

export default FashionIntro;
