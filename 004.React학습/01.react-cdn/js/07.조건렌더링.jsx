// 07.리액트 : 조건 렌더링  + 리스트 렌더링

// 나의 함수 불러오기
import mFn from "./my_function.js";

//출력대상: .root
const root = mFn.qsa(".root");
console.log("g", root);
/**************************************** 
    1. if문을 사용하여 조건부 렌더링하기
    - 리액트에서는 조건부로 구성요소를
    렌더링 할 수 있다!
****************************************/

//1. 컴포넌트 제작
function MakeDeveloper() {
  return <h2>나는 개발자야!</h2>;
} //////makeDeveloper 컴포넌트

function LostDeveloper({}) {
  return <h2>개발자가 먼가용?</h2>;
} //////LostDeveloper 컴포넌트

function MakeImage({ isrc, ialt, itit }) {
  return <img src={isrc} alt={ialt} title={itit} />;
} //////MakeImage컴포넌트
//서브컴포넌트: 컴포넌트 내부에서 호출하는 다른 컴포넌트들

//메인출력 컴포넌트
function Developer({ isNomal, isrc, ialt, itit }) {
  //isNomal = 개발자가 아님: true
  if (isNomal) {
    return (
      <React.Fragment>
        <LostDeveloper />
        <MakeImage isrc={isrc} ialt={ialt} title={itit} />
      </React.Fragment>
    ); /////return/////////
  } /////////////////////if//////

  //위의 if문 리턴에 걸리면 아래 return으로는 내려오지 않음
  //리턴코드
  return (
    <React.Fragment>
      <MakeDeveloper />
      <MakeImage isrc={isrc} ialt={ialt} title={itit} />
    </React.Fragment>
  ); /////return/////////
} //Developer컴포넌트///////////////

const devImg = [
  "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
  "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png",
];

//컴포넌트 호출하기1: 개발자 찍기
//먼저 가상돔에 컴포넌트 리턴 코드를 넣어본다
ReactDOM.render(
  <Developer
    isNomal={false}
    isrc={devImg[0]}
    ialt="개발자 공유"
    itit="프론트앤드 개발자 공유입니다"
  />,
  root[0]
);

ReactDOM.render(
  <Developer
    isNomal={true}
    isrc={devImg[1]}
    ialt="일반인 동석 입니다"
    itit="개발자가 몹니깡"
  />,
  root[1]
);

// ReactDOM.render(어쩌구,저쩌구);
//어쩌구를 저쩌구에 출력해라

/******************************************************** 
    2. if문이 아닌 조건 표현하기
    -> 조건식 && JSX표현식
    조건이 true일때만 && 뒤의 JSX표현식이 출력됨!
    -> 조건식은 true / false의 결과가 나오는 식이며
    AND조건, NOT 조건식이 모두 사용 가능함!
    ((ex) A == "사자" && B >10 || C == "별" || !D ))
********************************************************/
//개발자의 취향을 알아보자!

//2-1. 제목을 찍기 위한 타이틀 컴포넌트
function SetTitle({ title }) {
  return <h1>🥞개발자가 좋아하는 {title}🥞</h1>;
} ///////////////////SetTitle컴포넌트

// 음식리스트
const foods = ["스파게티", "짜파게티", "냉면", "짜장면", "마라탕"];

//2-2 반복리스트를 위한 컴포넌트
function MakeList({ foodName, movieInfo }) {
  console.log(foodName, movieInfo);
  // 음식일경우
  if(foodName){
    return (
    <li>개발자는{foodName}좋아해!</li>
    );
  }/////if문
  
  // 영화일 경우
  else if(movieInfo){
    return(
      <li>{movieInfo[0]}년도 {movieInfo[1]}</li>
    );
  }

  //일반리턴: 조건에 해당이 없을 때 출력
  return(
    <li>호출시 전달값을 점검하세요</li>
  );
} ////// MakeList 컴포넌트

// 2-3 개발자 선호 음식 리스트 출력 컴포넌트////////////////
function WishList({ wList }) {
  //wList: 좋아하는 음식 리스트

  //리턴 코드구역
  return (
    <React.Fragment>
      {/* 음식리스트 타이틀 */}
      <SetTitle title="음식" />
      {wList.length > 0 && (
        <div>
          <h2>개발자가 좋아하는 음식은 모두 {wList.length}가지 입니다</h2>
        </div>
      )}
      <ul>
        {
          wList.map((v) => (
            <MakeList foodName={v} />
          ))
          //배열변수.map() 메서드 사용!
          //map메서드는 원래 새로운 배열을 현재 자리에 출력하는 용도! 그러나 리엑트는 이것을 변경하여 표현식 안에서 출력시 태그jsx 형식으로 변환해줌
          //JS 처럼 map().join('') 처리 불필요!
        }
      </ul>
      {/* 배열값이 0인 경우 다른것 출력하기 */}
      {wList.length == 0 && (
        <h2>아직 개발자 음식 리스트가 업데이트 되지 않았습니다!</h2>
      )}
    </React.Fragment>
  );
} //////WishList 컴포넌트///////////////

//컴포넌트 출력하기
ReactDOM.render(<WishList wList={foods} />, root[2]);
ReactDOM.render(<WishList wList={[]} />, root[3]);
// ReactDOM.render(어쩌구,저쩌구);

/////3. 좀 더 복잡한 리스트를 출력하는 컴포넌트///////

//전달할 배열변수 /////////
const movs = [
  {
    year: "2021",
    mtit: "모가디슈",
    poster:
      "https://upload.wikimedia.org/wikipedia/ko/9/92/%EC%98%81%ED%99%94_%EB%AA%A8%EA%B0%80%EB%94%94%EC%8A%88.jpg",
  },
  {
    year: "2022",
    mtit: "범죄도시2",
    poster:
      "https://upload.wikimedia.org/wikipedia/ko/b/b9/%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C_2_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
  },
  {
    year: "2023",
    mtit: "가디언즈 오브 갤럭시3",
    poster:
      "https://i.namu.wiki/i/qA_v1drdO1CusnMcmQVZDEGXEspqfuS0-sAHYUFExpgZMF_GSyCSrxSh-_IWua2lqD6GnNNlqw0hMvNzXYrefA.webp",
  },
  {
    year: "2024",
    mtit: "파묘",
    poster:
      "https://i.namu.wiki/i/EWdG2Jtlu36U1-03moAiO7Hmh1waKlbB0DIEvamksSTTzWCsqDXxUiiPSdcmpAQjh_tUFOwAGhR7LX7f6U0wXQ.webp",
  },
];

/* 
[ 출력형태 ]
    👨‍🔧개발자👩‍🔧가 좋아하는 영화
    개발자가 좋아하는 영화는 최근 3년간 아래와 같습니다!
    2021년도 영화1
    2022년도 영화2
    2023년도 영화3
    ... 여기는 영화포스트 나열하기 ...
*/

//개발자 선호 영화 리스트 컴포넌트
//제목 컴포넌트, 리스트 컴포넌트 모두 재활용
function MovieWishList ({wList}){

  return(
    <React.Fragment>
    {/* 타이틀 출력하기 */}
    <SetTitle title ="영화"/>
    {/* 영화 리스트 출력 */}
    {wList.length > 0 && 
    <div>
      <h2>개발자가 좋아하는 영화는 최근 {wList.length}년간 아래와 같습니다</h2>

      <ul>
        {
        wList.map((v) => 
        (<MakeList movieInfo = {v} />
        ))
        }
      </ul>
    </div>}
    {/* 빈배열일 경우 출력 */}
    {wList.length == 0 && 
    <div>
      <h2>아직 개발자 영화리스트가 업데이트 되지 않았습니다.</h2>
    </div>}
  </React.Fragment>
  );

}//////////////MovieWishList 컴포넌트

//영화
ReactDOM.render(<MovieWishList wList={[movs]} />, root[4]);