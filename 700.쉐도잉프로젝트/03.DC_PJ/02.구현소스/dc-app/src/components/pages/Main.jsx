// 메인 페이지 컴포넌트 ///
import Banner from "../modules/Banner";
import Secintro from "../modules/Secintro";
import VidIntro from "../modules/VidIntro";
import VidSwipe from "../modules/VidSwipe";
import CatList from "../modules/CatList";

///////////import atra ////////////////////////////

export default function Main() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      {/* 1. 배너 컴포넌트 */}
      <Banner catName={"main"+Math.ceil(Math.random()*3)}/>
      {/* 2. 섹션소개 컴포넌트 */}
      <Secintro />
      {/* 3. 비디오 소개 컴포넌트 */}
      {/* catName : 카테고리 네임
      clsName: 배경색 넣을 클래스(on/off로 구분)
      */}
      <VidIntro catName="main" clsName="off"/>
      {/* 4. 비디오 컴포넌트 */}
      <VidSwipe catName="main"/>
      {/* 5. 캐릭터 리스트 컴포넌트 */}
      <CatList/>
    </>
  );
} /////////// Main /////////////////////
