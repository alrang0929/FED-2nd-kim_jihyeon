//01. 공유신발 JSX

//데이터 import
import guData from "./gu_data";
// console.log(guData);

//[ 메인 컴포넌트 ]
//메인의 의미? 다른 구성요소 컴포넌트들을
//모아 최종적으로 렌더링하는 구성 컴포넌트

//그렇다면 컴포넌트란?
//특정 모듈로 구성된 HTML코드를 리턴하는 객체 <<

//함수형 컴포넌트는 첫글자 대문자 함수키워드로 생성
function MainComponent() {
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
        <ul>
          {guData.map(v => 
            <li>
              <a href="#">
                <ol className="glist">
                  <li>
                    <img src={"./images/vans/vans_"+v.idx+".jpg"} alt={v.category} />
                  </li>
                  <li>{v.gname}</li>
                  <li>{"가격 : "+v.gprice+"원"}</li>
                </ol>
              </a>
            </li>
            )}
        </ul>
      </div>
    </React.Fragment>
  );
} ////////MainComponent 컴포넌트////////////////////

//메인컴포넌트 호출
ReactDOM.render(<MainComponent />, document.querySelector("#root"));
// ReactDOM.render(어쩌구, 저쩌구);
