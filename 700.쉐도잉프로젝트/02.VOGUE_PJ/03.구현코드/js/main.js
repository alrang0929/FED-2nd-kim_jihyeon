//보그PJ 메인js - main.js

import TopArea from "./components/TopArea";
import MainArea from "./components/MainArea";
import FooterArea from "./components/FooterArea";
////////import Area/////////////////////////////////////

//[1]메인페이지 전체 레이아웃 로딩 컴포넌트
function Layout() {
    //코드 리턴구역
    return(
  <React.Fragment>
    {/* 1. 상단영역 컴포넌트 */}
    <TopArea />
    {/* 2. 메인영역 컴포넌트 */}
    <MainArea />
    {/* 3. 하단영역 컴포넌트 */}
    <FooterArea />
  </React.Fragment>
   );
} ///////Layout 컴포넌트


// 메인페이지 전체출력
ReactDOM.render(<Layout />, document.querySelector("#root"));
