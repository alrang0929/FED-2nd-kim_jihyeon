// 코믹스 페이지 컴포넌트 ///
import Banner from "../modules/Banner";
import VidIntro from "../modules/VidIntro";
export default function Games() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      {/* 1. 배너 컴포넌트 */}
      <Banner catName="GAMES" />
      {/* 영상 배너 컴포넌트 */}
      {/* 1. video 소개 컴포넌트 */}
      <VidIntro catName="GAMES" clsName="on" />
    </>
  );
} /////////// Games /////////////////////
