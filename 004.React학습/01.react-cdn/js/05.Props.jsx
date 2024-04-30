// 05.리액트 Props

//불러오기 영역
import mFn from "./my_function";

//자동차정보 불러오기
import { carInfo } from "./carData";
console.log(carInfo);

/********************************************************** 
    [ 리액트 Props ]
    1. 리액트 구성요소에 전달되는 인수다!(전달변수)
    2. HTML 속성을 통해서 구성요소에 전달된다
    3. props는 속성이다.
    4. JS 함수에 셋팅되는 전달변수와 HTML속성과 동일함
    5. 컴포넌트로 보내기 위해서는 HTML속성과 동일한 구문사용
**********************************************************/

//자기차를 소개하는 컴포넌트1 /////////////////////////////////
function IntroCar({ brand, modelNum }) {
  //전달속성값: brand = 자동차분류명, modelNum = 배열순번
  // function IntroCar(props){

  //props : 컴포넌트 호출시 속성값을 객체로 전달하는 것을 받아주는 변수(변수명 자유)
  //사용법: props.속성명
  //주의!!! : 속성명 = 컴포넌트 호출하는 곳에서 정해진 이름과 동일하게 사용
  //명시적으로 변수명을 사용하려면
  //구조분해할당 형식을 사용하면 된당 = {변수명,변수명...}
  //구조분해할당으로 전달받을시 장점 :
  //      1. 특정 속성명을 지정하는 효과
  //      2. 몇개의 어떤 속성을 받는지 개발자가 명시적으로 알 수 있음!

  //공통 정보 변수에 담기
  //arInfo 하위 [자동차명] 하위 [순번]
  //=>최종데이터 선택
  let setInfo = carInfo[brand][modelNum];
  return (
    <React.Fragment>
      <h2>나의 차는 {brand}입니다!</h2>
      {/* 추가질문 컴포넌트 호출! */}
      <AskMoreInfo
        model={setInfo.model}
        color={setInfo.color}
        opt={setInfo.opt}
      />
    </React.Fragment>
  );
} //////IntroCar 컴포넌트///////////////////////

/* 

[데이터 매칭하기: 속성셋팅을 위한 기초]
1. 자동차 분류명 : carInfo 데이터변수의 객체의 속성명
2. 상세모델 배열번호 : 선택객체 속성값 하위 배열 번호

=>위의 두가지를 전달하면 상세정보를 보낼 수 있다!

*/

//추가질문으로 자동차 정보를 자세히 기술하는 컴포넌트/////////
function AskMoreInfo({ model, color, opt }) {
  return (
    <React.Fragment>
      <h1>더 자세히 말씀해주시겠어요?</h1>
      {/* 디테일 정보구성 컴포넌트 호출! */}
      <DetailCarInfo model={model} color={color} opt={opt} />
    </React.Fragment>
  );
} ////////AskMoreInfo/////////////

//디테일 정보구성 컴포넌트
function DetailCarInfo({ model, color, opt }) {
  //info = 세부적인 정보 객체가 들어온다
  //전달속성은 model(모델명), color(차색), opt(CSS 옵션)
  return (
    <React.Fragment>
      <h2>
        모델명은 {model}이고 자동차색은 {color}입니다!
      </h2>
      {/* 이미지 출력 */}
      <img src="./images/ray.png" alt="기아레이" style={opt} />
      {/* 리엑트 style 속성의 값으로 객체를 CSS속성에 맞게 주면
            inline code로 css를 셋팅할 수 있다 */}
    </React.Fragment>
  );
} ////////DetailCarInfo 컴포넌트/////////////

//전체 자동차 브랜드 소개 컴포넌트
function ShowBrandCar({ brand, modelNum }) {
  return (
    <React.Fragment>
      <h1>당신의 차는 무슨차죠?</h1>
      <IntroCar brand={brand} modelNum={modelNum} />
    </React.Fragment>
  );
} /////////////////ShowBrandCar컴포넌트////////////////

/***************** 화면출력 *****************/
//ReactDOM.render(출력코드, 출력대상)
ReactDOM.render(
  <div>
    <ShowBrandCar brand="기아레이" modelNum={0} />
    <ShowBrandCar brand="기아레이" modelNum={1} />
    <ShowBrandCar brand="기아레이" modelNum={2} />
  </div>,
  mFn.qs("#root1")
);
