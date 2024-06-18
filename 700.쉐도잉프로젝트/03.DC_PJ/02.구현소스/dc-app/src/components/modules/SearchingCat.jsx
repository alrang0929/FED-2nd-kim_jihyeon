//DC PJ 캐릭터 검색결과 리스트 컴포넌트 searchingCat
import React from "react";

//css
import "../../css/searching_cat.scss";
import { Link } from "react-router-dom";
////import area//////////////////////////////////

function SearchingCat({dt}) {
  //dt = 검색된 배열데이터
  //total = 검색된 배열데이터 개수

  const total = dt.length;
  console.log("데이터수",total);

  return (
    <>
      {/* 데이터가 있는 경우 */}
      {
        //데이터 개수가 0이 아닐때 출력
        total > 0 && (
          <ul className="clist">
            {dt.map((v, i) => (
              <li key={i}>
                <Link
                  to="/detail"
                  //여기서 3가지 값을 state로 전달
                  state={{
                    cname: v.cname, //캐릭터 이름
                    cdesc: v.cdesc, //캐릭터 설명
                    facts: v.facts, //캐릭터 상세
                  }}
                >
                  <img src={v.tmsrc} alt={v.cname} />
                  <h3>{v.cname}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )
      }
      {/* 데이터가 없는 경우 */}
      {total == 0 && (
        <h2 style={{ textAlign: "center" }}>
          Sorry, we don't have any matches for that. But there's plenty more to
          see on DC!
        </h2>
      )}
    </>
  );
}

export default SearchingCat;
