// 06.Event : 리액트 이벤트
import mFn from "./my_function";

/************************************************************* 
    [ 리액트 이벤트 ]
    1. 일반 HTML DOM 이벤트와 마찬가지로 사용자이벤트 사용가능함
    2. 이벤트 종류: click, change, mouseover 등 일반이벤트
    3. 이벤트 표기법: 캐믈케이스 - 첫글자소문자 단어마다 대문자
    예) onclick -> onClick
    4. 이벤트 핸들러 : 중괄호 안에 작성(중괄호는 JSX표현식영역)
    예) onclick="getIt()" => onClick={getIt}
*************************************************************/

//전체 이벤트 적용할 컴포넌트 구성

function EventShow() {
  //컴포넌트의 리턴 코드 위에서 이벤트 처리를 위한
  //함수를 만들어서 사용할 수 있다
  //지역함수로 사용되는 것임!

  //1. 한번만 실행 분기문
  //오버시 이벤트 한번만 실행되게 상태변수 만들기
  let onceSts = false;
  if (onceSts) return;
  onceSts = true; // 한번만 실행
  console.log("알라딘이 누구야");

  //1. 컴포넌트 내부함수////////////////////////////////
  //1) 소원이 무엇이냐 물어보는 함수
  const showAladin = () => {
    //2. 알라딘 이미지 출력하기
    //1)html 출력대상
    let alaBox = mFn.qs("#ala");

    //2)이미지 출력
    ReactDOM.render(<img src="./images/ala4.jpg" alt="알라딘" />, alaBox);

    //3)말풍선 박스에 글자넣기
    let tg = mFn.qs(".tit");
    tg.innerText = "소원이 무엇이냐?";
    //4) 말풍선 박스에 인라인 css 코드 넣기
    tg.style.cssText = `
            width: 50%;
            padding: 50px 0;
            margin: 0 auto;
            border: 2px solid lime;
            opacity: 0;
        `;

    //5) 0.5초 후에 css 변경으로 타이틀 등장하기
    setTimeout(() => {
      tg.style.backgroundColor = "rgba(0, 0, 0,0.5";
      tg.style.color = "#ffffff";
      tg.style.fontSize = "50px";
      tg.style.translate = "0 -200px";
      tg.style.borderRadius = "50%";
      tg.style.transition = "2s ease-in-out 1s";
      tg.style.opacity = "1";
    }, 500);

    //6) 램프가져오기 버튼 3초 후 보이기
    setTimeout(() => {
      mFn.qsa("button")[0].style.display = "inline-block";
    }, 3500);
  }; ///////showAladin함수////////


  //2. 램프 가저오기 함수 /////////////////
  const getLemp = ()=>{

    console.log("램프 가져왕")


  };//////////getLemp함수//////////////////

  //2. 리턴코드 만들기
  return (
    <React.Fragment>
      <div id="tbox" style={{ textAlign: "center" }}>
        <img
          src="./images/genie.avif"
          alt="지니"
          /* 마우스오버시 showAladin함수 호출 */
          onMouseOver={showAladin}
        />
      </div>

      {/* 램프가 들어갈 요소 */}
      <div className="lemp" ></div>

      {/* 버튼들 */}
      <button onClick={getLemp}>램프 가저오기</button>
      <button>소원빌기 슈퍼볼1등</button>

      {/* 소원이 무엇이냐 말풍선 박스 */}
      <div className="tit"></div>
    </React.Fragment>
  );
} ///////////////EventShow컴포넌트/////////////////

//화면출력하기
ReactDOM.render(<EventShow />, mFn.qs("#root"));
