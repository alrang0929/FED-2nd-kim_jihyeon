// 메인영역 컴포넌트 ///////

// 부드러운 스크롤 불러오기
import { scrolled, setPos } from "../components/../smoothScroll24";
//등장액션함수
import scrollShowFn from "../scroll_show";

/////import area///////////////////////////////////////////////

export default function MainArea() {
  //컴포넌트 화면 렌더링 직전 로드구역/////////////////////////////
  React.useLayoutEffect(() => {
    //스크롤 등장대상에 클래스 넣기: .hide-el
    //[제이쿼리용 forEach메서드:]
    //each((idx,ele)=>{코드})
    //idx - 순번 / ele - 요소자신
    $(".main-area>section").each((idx, ele) => {
      //첫번쨰를 제외한 나머지 모두 클래스 넣기
      if (idx != 0) $(ele).addClass("hide-el");
    });

    //스크롤 등장함수 호출
    scrollShowFn();

    ////////////////////////////////////////////////////////
    // [ 이벤트의 해제는 removeEventListener()를 사용한다!!! ]
    // 부드러운 스크롤은 "home"에서만 적용함!

    document.addEventListener("wheel", scrolled, { passive: false });

    /////////////////////////////////////////////////////////

    // 슬림적용 대상: #top-area
    const topMenu = document.querySelector("#top-area");
    // 상단이동 버튼 대상 : .tbtn
    const tbtn = document.querySelector(".tbtn");
    // 상단이동기능
    tbtn.onclick = (e) => {
      // 기본이동막기
      e.preventDefault();
      // 상단이동하기 : 부드러운스크롤 위치값 업데이트
      setPos(0);
      // 위치값 이동하기 : scrollTo(가로스크롤, 세로스크롤)
      // window.scrollTo(0, 0);
      //제이쿼리 애니메이션 상단이동
      $("html,body").animate({ scrollTop: "0" }, 500);
    }; ///// click ///////

    // 슬림메뉴 적용하기 : "home"에서만 적용
    const chkSlim = () => {
      // 메뉴 "home"일때만 적용 //////////
      // 스크롤 위치값 구하기
      let scTop = window.scrollY;
      // console.log("슬림적용!!!", scTop);

      // 슬림메뉴 적용
      if (scTop > 200) topMenu.classList.add("on");
      else topMenu.classList.remove("on");

      // 상단이동버튼 적용
      if (scTop > 300) tbtn.classList.add("on");
      else tbtn.classList.remove("on");
    }; //////// chkSlim 함수 /////////

    // 스크롤 이벤트 적용하기 : scroll이벤트
    // "home"에서만 적용하기
    window.addEventListener("scroll", chkSlim);
    setPos(0);

    console.log("MainArea 시작!");

    //컴포넌트 소멸시(unmounting) 리턴함수
    //리턴함수 안의 함수나 함수구역이 소멸시 실행
    return () => {
      console.log("MainArea 종료!");

      //이 구역에서 전역적으로 셋팅된 이벤트 함수를
      //삭제처리하면 된다
      //window, html, body 이 3가지는 컴포넌트가 소멸되도
      //그대로 존재되므로
      //이벤트를 removeEventListener 에서 해준다
      
      setPos(0);
      $(".main-area>section").removeClass("on");
      //[1]부드러운 스크롤 이벤트 삭제
      document.removeEventListener("wheel", scrolled, { passive: false });
      //[2]슬림스크롤 이벤트 삭제
      window.removeEventListener("scroll", chkSlim);

      //[3] 클래스가 들어가 있을 수 있으므로 삭제코드 실행
      topMenu.classList.remove("on");
      tbtn.classList.remove("on");

      //참고로 이벤트를 개별셋팅한 요소의 이벤트를 지울경우
      //속성할당방식의 이벤트는 빈값을 할당해서 지우거나
      // ex) tbtn.onclick="";
      //제이쿼리: off() 메서드로 삭제
      //ex) $(".tbtn").off("click");
      //이벤트 등록으로 설정한 것은 removeEventListener로 삭제
    }; //////소멸시 return함수
  }, []); ////////////////useLayoutEffect area///////////

  // 코드 리턴구역 /////////////////////////////////////
  return (
    <div id="main-area">
      <main className="main-area ibx">
        {/* <!-- 컨텐츠1 --> */}
        <section className="pt1">
          <div className="cbx bgi bg1">
            <h2>복싱과 맺은 모델 수주의 이야기</h2>
          </div>
        </section>
        {/* <!-- 컨텐츠2 --> */}
        <section className="pt2">
          <div className="cbx bgi bg2">
            <h2>안현모,홍지민,강주은 써마지 더 리얼 인터뷰</h2>
          </div>
          <div className="cbx bgi bg3">
            <h2>손 번쩍! 잘 때 ‘만세 자세’가 해로운 이유</h2>
          </div>
          <div className="cbx bgi bg4">
            <h2>아미(Ami)와 장폴구드(Jean-Paul Goude)의 컬래버레이션</h2>
          </div>
        </section>
        {/* <!-- 컨텐츠3 --> */}
        <section className="pt1">
          <div className="cbx bgi bg5">
            <h2>
              &lt;퀸스 갬빗&gt; 이후 엄청난 신작을 준비 중인 안야 테일러 조이
            </h2>
          </div>
        </section>
        {/* <!-- 컨텐츠4 --> */}
        <section className="pt2">
          <div className="cbx bgi bg6">
            <h2>마리아 그라치아 치우리의 디올 크루즈 2022 컬렉션 쇼</h2>
          </div>
          <div className="cbx bgi bg7">
            <h2>약, 그렇게 버리면 되돌아옵니다</h2>
          </div>
          <div className="cbx bgi bg8">
            <h2>셀럽들이 하는 여름 주얼리</h2>
          </div>
        </section>
        {/* <!-- 컨텐츠5 --> */}
        <section className="pt1">
          <div className="cbx bgi bg9">
            <h2>김여진이 감행하는 변화에 대하여</h2>
          </div>
        </section>
        {/* <!-- 컨텐츠6 --> */}
        <section className="pt2">
          <div className="cbx bgi bg10">
            <h2>모델 아이린이 선택한 여름 원피스 Best</h2>
          </div>
          <div className="cbx bgi bg11">
            <h2>김여진이 감행하는 변화에 대하여</h2>
          </div>
          <div className="cbx bgi bg12">
            <h2>샛노란 ‘자무 주스’가 뜬다!</h2>
          </div>
        </section>
        {/* <!-- 컨텐츠7 --> */}
        <section className="pt2">
          <div className="cbx bgi bg13">
            <h2>체커보드의 색다른 매력</h2>
          </div>
          <div className="cbx bgi bg14">
            <h2>‘손꾸’의 끝, 핑거 타투와 네일의 조합</h2>
          </div>
          <div className="cbx bgi bg15">
            <h2>지속 가능한 변화를 이끄는 백 브랜드 6</h2>
          </div>
        </section>
      </main>
    </div>
  );
} ///////// MainArea 컴포넌트 ///////////
