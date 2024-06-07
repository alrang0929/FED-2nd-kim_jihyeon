// 메인 페이지 컴포넌트 ///
import Banner from "../modules/Banner";
import Secintro from "../modules/Secintro";

///////////import atra ////////////////////////////

export default function Main() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      {/* 1. 배너 컴포넌트 */}
      <Banner catName={"main"+Math.ceil(Math.random()*3)}/>
      {/* 2. 섹션소개 컴포넌트 */}
      <Secintro />
    </>
  );
} /////////// Main /////////////////////
