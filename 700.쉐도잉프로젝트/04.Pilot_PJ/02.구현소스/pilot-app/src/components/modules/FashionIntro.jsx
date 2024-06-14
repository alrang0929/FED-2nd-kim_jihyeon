//패션인트로 컴포넌트 - FashionIntro.jsx
import React from "react";

//data
import { fsData } from "../../js/data/fashion_intro";

//css
import "../../css/fashion_intro.scss";

//////////////////////import area ////////////////////////

function FashionIntro({ catName, subCatName }) {
  //catName: 카테고리 이름
  //subCatName: 서브카테고리 이름
  //서브가 아닌경우 subCat의 값은 "etc"임

  //선택 데이터 변수할당
  const selData = fsData[catName];

  ///////////코드리턴구역/////////////////////////////
  return (
    <>
      <div id={catName} className="fs-page">
        <ul className="pgc">
          <li className="imgc">
            <img src={selData.isrc} alt={selData.ialt} />
          </li>
          <li className="txtc">
            <h2>
              <a href="#" >
                {/* [★참고] 만약 데이터에 태그가 있어서 이를 html로 넣으려면?
                dangerouslySetInnerHTML={{__html:데이터}}
                속성을 사용한다*/}
               {selData.tit[0]}
               <br/>
               {selData.tit[1]}
              </a>
            </h2>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FashionIntro;
