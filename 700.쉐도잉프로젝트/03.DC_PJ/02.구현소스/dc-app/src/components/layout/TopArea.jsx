// 상단영역 컴포넌트 ///
import $ from "jquery";

// GNB 데이터 불러오기
import { Link, useNavigate } from "react-router-dom";
import { menu } from "../data/gnb";
import Logo from "../modules/Logo";

//상단영역 css 불러오기
import "../../css/top_area.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function TopArea() {
  //이동함수
  const goNav = useNavigate();

  //사용시 goNav(라우터주소,{전달객체})
  //전달객체 없으면 비워놓음!

  // 사용법: 반드시 useNavigate()메서드를 변수에 담아
  // 이동할 라우터 주소를 쓰면 이동한다
  // 예) goNav('/news') -> 뉴스페이지이동
  // 예) goNav('/') -> 첫페이지이동
  //    ㄴ 슬래쉬 없이 or 빈값일 때도 루트로 인식
  // 이동주소는 대소문자 구분없음!

  //검색관련 함수들////////////
  //1. 검색창 보이기 함수
  const showSearch = (e) => {
    //기본기능 막기
    e.preventDefault();
    //1.검색창 보이기
    $(".searchingGnb").show();
    //show() -> display 보이게함
    //2. 입력창에 포커스 보내기
    $("#schinGnb").focus();
  }; ////////showSearch함수

  //2. 검색창에 엔터키 누르면 검색함수 호출
  const enterkey = (e) => {
    //e,keyCode = 숫자로 리턴
    //e,key = 문자로 리턴
    // console.log(e.keyCode);
    if (e.key == "Enter") {
      //입력창에 입력값 읽어오기 : val()사용
      let txt = $(e.target).val().trim();
      console.log(txt);

      //빈값이 아니면 검색함수 호출(검색어 전달)
      if (txt == "") {
        //입력창 비우고 부모박스 닫기

        //검색 보내기
        goSearch(txt);
      } ///if
    } ////if
  };

  //3. 검색페이지로 검색어와 함께 이수하기함수
  const goSearch = (txt) => {
    console.log("검색하러 갑니당 ^-^");
    //라우터 이동함수로 이동하기
    //네비게이트 메서드 (라우터주소,{state:{보낼객체}})
    goNav("/search", {
      //검색어 전달
      state: { keyword: txt },
    });
  };

  //// 코드 리턴구역 //////////////
  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 로그인 환영메시지 박스 */}

        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <ul>
            {/* 1. 로고 컴포넌트 */}
            <li>
              <a
                href="#"
                onClick={(e) => {
                  //기본이동 막기
                  e.preventDefault();
                  //라우터 이동 메서드 호출
                  goNav("/", {});
                }}
              >
                <Logo logoStyle="top" />
              </a>
              {/* <Link to="/">
                <Logo logoStyle="top" />
              </Link> */}
            </li>
            {/* 2. GNB메뉴 데이터 배열로 만들기 */}
            {menu.map((v, i) => (
              <li key={i}>
                {
                  //하위메뉴가 있으면 일반 a요소에 출력
                  //없으면? Link 라우팅 출력
                  v.sub ? (
                    <Link to={v.link}>{v.txt}</Link>
                  ) : (
                    <Link to={v.link}>{v.txt}</Link>
                  )
                }
                {
                  //서브메뉴 데이터가 있으면 하위 그리기
                  v.sub && (
                    <div className="smenu">
                      <ol>
                        {v.sub.map((v, i) => (
                          <li key={i}>
                            <Link to={v.link}>{v.txt}</Link>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )
                }
              </li>
            ))}
            {/* 3. 검색, 회원가입, 로그인 링크 */}
            <li
              style={{
                marginLeft: "auto",
                marginRight: "25px",
              }}
            >
              {/* 검색입력박스 */}
              <div className="searchingGnb">
                {/* 검색버튼 돋보기 아이콘 */}
                {/* 입력창 */}
                <FontAwesomeIcon
                  className="schbtnGnb"
                  icon={faSearch}
                  title="Open search"
                />
                <input
                  type="text"
                  //name: 백앤드가 가져가는 id값
                  name="schinGnb"
                  id="schinGnb"
                  placeholder="Filter by keyword"
                  onKeyUp={enterkey}
                />
              </div>
              {/* 검색기능링크 - 클릭시 검색창 보이기 */}
              <a href="#" onClick={showSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
          </ul>
        </nav>
        {/* 전체메뉴 컴포넌트 */}
      </header>
    </>
  );
} /////////// TopArea /////////////////////
