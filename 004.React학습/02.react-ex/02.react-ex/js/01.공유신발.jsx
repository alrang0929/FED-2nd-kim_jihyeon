//01. 공유신발 JSX

//데이터 import
import React from "react";
import guData from "./gu_data";
// console.log(guData);

//[ 메인 컴포넌트 ]
//메인의 의미? 다른 구성요소 컴포넌트들을
//모아 최종적으로 렌더링하는 구성 컴포넌트

//그렇다면 컴포넌트란?
//특정 모듈로 구성된 HTML코드를 리턴하는 객체 <<
//컴포넌트화를 하는 이유: 코드 재사용에 용이

//함수형 컴포넌트는 첫글자 대문자 함수키워드로 생성
function MainComponent() {

  //상태관리 start
  // [후크 상태관리 변수 셋팅]
  //1. 리스트/상세보기 전환용 상태관리 변수 생성
  const [viewList, SetViewList] = React.useState(true);



  /********************************************************* 
    [코드구성]
    1. 타이틀: h1, tit
    2. 내용박스: section
        ㄴ> 제목: h2 
        ㄴ> 이미지 박스: div.img-box > img  
    3. 기능버튼 박스: div.btn-box
        ㄴ>기능버튼: : button
    4. 상품리스트 박스: div.gwrap 
        ㄴ> 상품리스트: ul > li > ol > li > img,text
        ㄴ> 상품 상세보기: ol > li > img,text,button
    
*********************************************************/

  return (
    <React.Fragment>
      {/* 1. 타이틀  */}
      <h1 className="tit">공유가 신고 다닌다는!</h1>
      {/* 2. 내용박스 */}
      <section>
        <h2>공유는 오늘도 멋집니다!</h2>
        <div className="img-box">
          <img src="./images/vans/gongyoo.jpg" alt="멋진공유" />
        </div>
      </section>
      {/* 3. 기능버튼 박스 */}
      <div className="btn-box">
        <button>효진초이스 바로가기</button>
        <button>효진초이스 바로가기</button>
      </div>

      {/* 4. 상품 리스트 */}
      <div className="gwrap">
         { viewList?<GoodsList viewDetail = {SetViewList}/> : <GoodsDetails />}
      </div>

    </React.Fragment>
  );
} ////////MainComponent 컴포넌트////////////////////

//[ 상품리스트 서브 컴포넌트: goods list ]
function GoodsList([viewDetail]) {
  //viewDetail = 부모 컴포넌트가 전달해준 상태변수 viewlist를 업데이트하는 setviewlist 메서드
  ///리턴 코드구역
  return (
    // 설치형 리엑트는 반복생성시 key값 추가 (> 대체적으로 idx 사용)
    <ul>
      {
        //반복요소 li에 key 속성을 쓸것을 리엑트는 필수적!
        //어디에쓰나? 업데이트시 순번 구분을 위함(실제 콘솔에는 출력X)
        //node JS 개발환경에서는 안쓰면 에러남!

        guData.map((v, i) => (
          <li key={i}>
            <a href="#" onClick = {()=>viewDetail(false)}>
              <ol className="glist">
                <li>
                  <img
                    src={"./images/vans/vans_" + v.idx + ".jpg"}
                    alt={v.category}
                  />
                </li>
                <li>{v.gname}</li>
                <li>{"가격 : " + v.gprice + "원"}</li>
              </ol>
            </a>
          </li>
        ))
      }
    </ul>
  );
} ///////GoodsList컴포넌트

//[상품 상세보기 서브 컴포넌트: goods details]
function GoodsDetails() {
  return (
    <ol style={{ display: "flex", listStyle: "none" }}>
      <li style={{ width: "700px", marginRight: "40px" }}>
        <img
          src="./images/vans/vans_1.jpg"
          alt="개배고프다"
          style={{ width: "100%" }}
        />
      </li>
      <li
        style={{
          lineHeight: 1.8,
          padding: "10px",
          textAlign: "left",
          justifyContent: "center",
        }}
      >
        소재: {guData[0].소재} <br />
        색상: {guData[0].색상} <br />
        치수: {guData[0].치수} <br />
        제조자/수입자: {guData[0]["제조자/수입자"]} <br />
        제조국: {guData[0].제조국} <br />
        제조연월: {guData[0].제조연월} <br />
        A/S 책임자와 전화번호: {guData[0]["A/S 책임자와 전화번호"]} <br />
        Model: {guData[0].Model} <br />
        <div
          className="btnbx"
          style={{ marginTop: "40px", textAlign: "right" }}
        >
          <button style={{ fontSize: "12pt", padding: "10px" }}>
            리스트로 돌아가기
          </button>
        </div>
      </li>
    </ol>
  );
} //goodsDetails컴포넌트 ////////////////////////////

//메인컴포넌트 호출
ReactDOM.render(<MainComponent />, document.querySelector("#root"));
// ReactDOM.render(어쩌구, 저쩌구);
