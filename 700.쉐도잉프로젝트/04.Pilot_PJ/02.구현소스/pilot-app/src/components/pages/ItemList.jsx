import React, { useEffect, useState } from "react";
import $ from "jquery";

//css
import "../../css/item_list.scss";

//fn
//공통함수 불러오기
import { addComma } from "../../js/func/common_fn";

//data
import itemListData from "../../js/data/item_list";

//component
import ItemDtail from "../modules/ItemDtail";

/////import area/////////////////////////////////////////////////

function ItemList() {
  //상태변수 만들기 //////////////////////////////
  //[1] 카테고리 정보
  const [cat, setCat] = useState(null);

  //[2] 상품정보
  const [gInfo, setGinfo] = useState(null);

  //화면 랜더링 구역
  useEffect(() => {
    //전체 스크롤바 살리기
    $("html,body").css({ overflow: "visible" });
  }, []);

  ///////////코드 리턴구역//////////////////////
  return (
    <>
      <main id="cont">
        <h1 className="tit">All ITEMS LIST</h1>
        <section>
          <div id="optbx">
            <label htmlFor="men">남성</label>
            <input type="checkbox" className="chkbx" id="men" defaultChecked />
            <label htmlFor="women">여성</label>
            <input
              type="checkbox"
              className="chkbx"
              id="women"
              defaultChecked
            />
            <label htmlFor="style">스타일</label>
            <input
              type="checkbox"
              className="chkbx"
              id="style"
              defaultChecked
            />
          </div>
          {/* 상품 리스트 */}
          <div className="grid">
            {itemListData.map((v, i) => (
              <div key={i}>
                <a
                  href=""
                  onClick={(e) => {
                    //기본이동막기
                    e.preventDefault();
                    //상품상세모듈 전달 상태변수 변경
                    setCat(v.cat);
                    setGinfo(v.ginfo);
                    //정보박스 보이기
                    $(".bgbx").show();
                  }}
                >
                  [{v.idx}]
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/images/goods/${v.cat}/${v.ginfo[0]}.png`
                    }
                    alt={v.ginfo[1]}
                  />
                  <aside>
                    <h2>{v.ginfo[1]}</h2>
                    <h3>{addComma(v.ginfo[3])}원</h3>
                  </aside>
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* 상세 상품정보 박스 */}
        <div
          className="bgbx"
          style={{
            position: "fixed",
            top: "0px",
            paddingTop: "12vh",
            backdropFilter: "blur(8px)",
            height: "100vh",
            zIndex: "9999",
          }}
        >
          {/* 아이템 디테일 컴포넌트 */}
          <ItemDtail cat={cat} ginfo={gInfo} />
        </div>
      </main>
    </>
  );
}

export default ItemList;
