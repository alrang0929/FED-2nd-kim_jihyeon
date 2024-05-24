//메인영역 컴포넌트

import catData from "../data/category";

////import area////////////////////////////////////////////////////////////////////////

export default function ItemsArea({ catName }) {
  //catName: 카테고리 분류 이름(데이터 객체명과 동일)

  //해당 카테고리 고유 데이터
  const selData = catData[catName];
  console.log(selData);

  //코드리턴구역
  return (
    <div id="main-area">
      {/* 데이터 적용1: 최상위 클래스명 추가하기 */}
      <main className={"main-area ibx " + selData.경로}>
        {/* <!-- 2-1. 카테고리 페이지 상단영역 --> */}
        <header className="cat-top-area">
          {/* <!-- 2-1-1. 서브타이틀 --> */}
          {/* 데이터적용2: 제목 넣기 */}
          <h2 className="cat-tit">{selData.제목}</h2>

          {/* <!-- 2-1-2. 서브메뉴(LNB:Local Navigation Bar) --> */}
          {
            // 메뉴가 없음이 아닐떄만 배열 돌아 출력!
            selData.메뉴 != "없음" && (
              <nav className="lnb">
                <ul>
                  {selData.메뉴.map((v) => (
                    <li>
                      <a href="#">{v}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            )
          }
        </header>
        {/* <!-- 2-2. 카테고리 페이지 컨텐츠영역 --> */}
        <div className="cat-cont-area">
          <section className="pt2">
            <div className="cbx bgi bg1-1">
              <h2></h2>
            </div>
            <div className="cbx bgi bg1-2">
              <h2></h2>
            </div>
            <div className="cbx bgi bg1-3">
              <h2></h2>
            </div>
          </section>
          <section className="pt2">
            <div className="cbx bgi bg2-1">
              <h2></h2>
            </div>
            <div className="cbx bgi bg2-2">
              <h2></h2>
            </div>
            <div className="cbx bgi bg2-3">
              <h2></h2>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} /////////서브 컴포넌트
