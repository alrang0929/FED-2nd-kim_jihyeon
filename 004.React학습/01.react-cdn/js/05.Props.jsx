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
function IntroCar({brand}){
// function IntroCar(props){

//props : 컴포넌트 호출시 속성값을 객체로 전달하는 것을 받아주는 변수(변수명 자유)
//사용법: props.속성명
//주의!!! : 속성명 = 컴포넌트 호출하는 곳에서 정해진 이름과 동일하게 사용
//명시적으로 변수명을 사용하려면
//구조분해할당 형식을 사용하면 된당 = {변수명,변수명...}
//구조분해할당으로 전달받을시 장점 :
//      1. 특정 속성명을 지정하는 효과
//      2. 몇개의 어떤 속성을 받는지 개발자가 명시적으로 알 수 있음!
return(
    <React.Fragment>
        <h2>나의 차는 {brand}입니다!</h2>
    </React.Fragment>


);

}//////IntroCar 컴포넌트///////////////////////


//추가질문으로 자동차 정보를 자세히 기술하는 컴포넌트/////////
function AskMoreInfo({}){

}////////AskMoreInfo/////////////

//전체 자동차 브랜드 소개 컴포넌트
function ShowBrandCar({brand}){
return(

<React.Fragment>
    <h1>당신의 차는 무슨차죠?</h1>
    <IntroCar brand={brand} />
</React.Fragment>
);
}/////////////////ShowBrandCar컴포넌트////////////////


/***************** 화면출력 *****************/
//ReactDOM.render(출력코드, 출력대상)
ReactDOM.render(
<div>
<ShowBrandCar brand="기아레이" />
</div>,
mFn.qs('#root1'));