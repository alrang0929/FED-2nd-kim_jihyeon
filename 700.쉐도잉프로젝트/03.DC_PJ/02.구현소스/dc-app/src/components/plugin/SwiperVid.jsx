// 스와이퍼 플러그인 컴포넌트

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//스와이퍼 비디오모듈 css
import "./css/swiper_vid.scss";

//data
import { swVidData } from "../data/swiper_vid";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 페이지네이션,네비게이션,자동넘김)
import { Navigation } from "swiper/modules";


//swiper 모듈용 기본 css 셋팅
import "swiper/css";
//Navigation 양쪽 이동버튼
import "swiper/css/navigation";

export function SwiperVid({ catName }) {
  //catName 카테고리명
  // 불러올 이미지 리스트
  const selData = swVidData[catName];

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Navigation]}
        className="mySwiper"
      >
        {selData.map((v, i) => (
          <SwiperSlide key={i}>
            <section className="sw-inbox">
              {/* 동영상이미지박스 */}
              <div className="vid-img">
                <img src={v.isrc} alt={v.tit} />
                {/* 폰트어썸 아이콘 */}
              </div>
              {/* 동영상 타이틀 박스 */}
              <div className="vid-tit">
                <h4>{v.cat}</h4>
                <h3>{v.tit}</h3>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
} /////////// SwiperVid 컴포넌트 ///////////
