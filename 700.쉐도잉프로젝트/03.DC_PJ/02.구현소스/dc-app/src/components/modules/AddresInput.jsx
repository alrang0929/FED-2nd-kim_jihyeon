import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
/////////////////////////////////////////////////////////////////////////////////////////////////

const AddressInput = ({ changeAddr }) => {
    
    //changeAddr : 회원가입 양식체크 전달함수

  //상태관리변수////////////////////////////////////
  //1. 우편번호 상태변수
  const [zonecode, setZonecode] = useState("");
  //2. 주소 상태변수
  const [address, setAddress] = useState("");
  //3. 주소찾기창 보이기부여부
  const [isOpen, setIsOpen] = useState(false);

  //스타일 객체////////////////////////////////////
  //1. 다음 주소창 테마 디자인 객체, 속성명은 다음API, 테마 마법사(https://postcode.map.daum.net/guide#themeWizard)
  const themeObj = {
    bgColor: "#FFFFFF",
    pageBgColor: "#FFFFFF",
    postcodeTextColor: "#C05850",
    emphTextColor: "#222222",
  };

  //2. 검색창 크기설정 객체
  const postCodeStyle = {
    width: "40vw",
    height: "60vh",
  };

  //3. 전체박스 스타일 객체
  const wholeBoxStyle = {
    display: "inline-block",
    verticalAlign: "top",
  };

  //4. 팝업 윈도우 스타일
  const popupWindowStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
    backgroundColor: "white",
    padding: "20px",
    border: "4px double #000",
    zIndex: "1",
  };

  //5. 닫기버튼 스타일
  const closeButtonStyle = {
    position: "absolute",
    top: "0",
    right: "0",
    fontSize: "40px",
    backgroundColor: "transparent",
    border: "none",
  };

  //기능처리 함수////////////////////////////////////

  //1. 주소선택 완료시 처리함수
  const completeHandler = (data) => {
    const { address, zonecode } = data;
    setZonecode(zonecode);
    setAddress(address);
  };

  //2. 주소창 닫기 처리함수
  const closeHandler = (state) => {
    //강제닫기
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } 
    //선택 완료시 닫기
    else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
    }
  };
//주소창 열기닫기 토글기능 함수
  const toggleHandler = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };

  // 랜더링 구역 ////////////
  //매반 리랜더링시 주소값과 우편번호값을 갱신하는 함수호출
  useEffect(() => {
    changeAddr(); // 내가 생성한 함수를 propsDown 시킴
  }); ////// useEffect //////////

  // 코드리턴구역 //////////////////////
  return (
    <div style={wholeBoxStyle}>
      <div>
        <div style={{ paddingLeft: "20px", lineHeight: "2" }}>
          <button type="button" onClick={toggleHandler}>
            Search Address
          </button>
          {/* 우편번호 표시박스 */}
          <div>
            ZipCode :
            <input
              className="zipcode"
              value={zonecode}
              readOnly
              onClick={toggleHandler}
              placeholder="Click 'Search Address'"
            />
          </div>
        </div>
        {isOpen && (
          <div style={popupWindowStyle}>
            <DaumPostcode
              theme={themeObj}
              style={postCodeStyle}
              onComplete={completeHandler}
              onClose={closeHandler}
            />
            <button style={closeButtonStyle} onClick={toggleHandler}>
              ×
            </button>
          </div>
        )}
        <input
        // 주소 자동완성 인풋 앞부분
          className="addr1"
          value={address}
          readOnly
          onClick={toggleHandler}
          style={{ width: "100%" }}
          placeholder="Click 'Search Address'"
        />
        <input
        // 주소 자동완성 인풋 뒷부분(상세주소)
          className="addr2"
          placeholder="input detail adress"
          style={{ width: "100%" }}
          onChange={changeAddr}
          onBlur={changeAddr}
        />
      </div>
    </div>
  );
};

export default AddressInput;
