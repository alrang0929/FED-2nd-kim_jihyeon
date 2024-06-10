// 보그 PJ 메인 JS - main.js

// 상단영역 불러오기
import TopArea from "./components/TopArea";
// 메인영역 불러오기
import MainArea from "./components/MainArea";
// 아이템영역 불러오기
import ItemsArea from "./components/ItemsArea";
// 하단영역 불러오기
import FooterArea from "./components/FooterArea";
// 갤러리 모듈 불러오기
import Gallery from "./components/Gallery";
// 로그인 모듈 불러오기
import Login from "./components/Login";
// 회원가입 모듈 불러오기
import Member from "./components/Member";
// 부드러운 스크롤 불러오기
import { scrolled, setPos } from "./smoothScroll24";

// [1] 메인 페이지 전체 레이아웃 로딩 컴포넌트 ///
function Layout() {
  // 상태관리변수 설정구역 ////////
  // [1] 메뉴 변경 상태변수
  const [menu, setMenu] = React.useState("home");

  // 화면 랜더링 직전에 CSS로딩 변경하기 /////
  React.useLayoutEffect(() => {
    // menu 상태변수에 의존시킨다!
    // 메인 css 대상요소 : #main-css
    document.querySelector("#main-css").href =
      menu == "home"
        ? "./css/main.css"
        : menu == "gallery"
        ? "./css/gallery.css"
        : menu == "login"
        ? "./css/login.css"
        : menu == "member"
        ? "./css/member.css"
        : "./css/items.css";
    // menu값이 "home"인 경우 main.css를 로딩하고
    // menu값이 "gallery"인 경우 gallery.css를 로딩하고
    // menu값이 "login"인 경우 login.css를 로딩하고
    // menu값이 "member"인 경우 member.css를 로딩하고
    // 기타 메뉴인 경우 items.css를 로딩한다!

    //윈도우 최상단 이동
    window.scrollTo(0, 0);

    /////////////////document 이벤트 삭제 = removeEventListener
    ///document, body, window = { passive: false } 설정 넣어줘야..
    //부드러운 스크롤은 home에서만 적용함!
    if (menu == "home")
      document.addEventListener("wheel", scrolled, { passive: false });
    //home이 아닌 경우 모두 이벤트 헤제
    else document.removeEventListener("wheel", scrolled, { passive: false });
    /////////////////////////////////////////////////////////////////////////////////////

    //슬림적용 대상: #top-area
    const topMenu = document.querySelector("#top-area");
    //상단이동 버튼 대상: .tbtn
    const tbtn = document.querySelector(".tbtn");
    //상단이동기능
    tbtn.onClick = (e) => {
      //기본기능막기
      e.preventDefault();
      //상단이동하기, 위치값 업데이트
      setPos(0);
      //위치값 이동
      window.scrollTo(0, 0);
    };

    //홈에서만 슬림메뉴 적용하기
    if (menu == "home") {
      const chkSlim = () => {
        console.log("현재메뉴", menu);
        //스크롤 위치값 구하기
        let scTop = window.scrollY;
        console.log("슬림적용");
        //슬림메뉴 적용
        if (scTop > 200) topMenu.classList.add("on");
        else topMenu.classList.remove("on");
        //상단이동버튼 적용
        if (scTop > 300) tbtn.classList.add("on");
        else tbtn.classList.remove("on");
      }; /////////chkSlim Fn////////////////

      if (menu == "home")
        window.addEventListener("scroll", chkSlim, { passive: false });
      else {
        setPos(0);

        window.removeEventListener("scroll", chkSlim, { passive: false });
      }
    } //////////메뉴 home일때만 적용

    //스크롤 이벤트 적용하기:scroll 이벤트
  }, [menu]);

  // 코드 리턴구역 ////////////
  return (
    <React.Fragment>
      {/* 1. 상단영역 컴포넌트 */}
      <TopArea changeMenu={setMenu} />
      {/* 2. 메인영역 컴포넌트 */}
      {menu == "home" ? (
        <MainArea />
      ) : menu == "gallery" ? (
        <Gallery />
      ) : menu == "login" ? (
        <Login changeMenu={setMenu} />
      ) : menu == "member" ? (
        <Member changeMenu={setMenu} />
      ) : (
        <ItemsArea catName={menu} />
      )}
      {/* 3. 하단영역 컴포넌트 */}
      <FooterArea />
    </React.Fragment>
  );
} ///////// Layout 컴포넌트 /////////

// 메인 페이지 전체 출력하기
ReactDOM.render(<Layout />, document.querySelector("#root"));
