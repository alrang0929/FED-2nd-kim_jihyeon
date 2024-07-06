import React, { useEffect, useRef } from "react";
import { addComma } from "../../js/func/common_fn";

import $, { get } from "jquery";

function ItemDetail({ cat, ginfo, dt, setGinfo }) {
    // cat - 카테고리
    // ginfo - 상품정보
    // dt - 상품데이터
    // setGinfo - ginfo값 변경메서드
    console.log(cat, ginfo);
    //제이쿼리 이벤트함수에 전달할 ginfo값 참조변수
    //리액트 참조변수 useState, useRef : 최초 1번만 셋팅, 컴포넌트가 소멸되기 전까지 그 값을 가지고 있음
    //따라서 따로 업데이트를 해야지만 값이 바뀜
    const getGinfo = useRef(ginfo);
    
    //getGinfo 참조변수는 새로 들어온 ginfo전달값이 달라진 경우 업데이트
    if (getGinfo.current != ginfo) getGinfo.current = ginfo;

    // [ 배열 생성 테스트 ]
    // 1. 배열변수 = [] -> 배열리터럴
    // -> 생성된 배열을 for문을 돌려서 값을 할당함
    // 2. 배열객체로 만들기
    // -> new Array(개수) -> 개수만큼 배열생성(빈배열)
    // -> new생략하여 인스턴스 생성가능! (정적객체)
    // -> Array(개수) -> 그.러.나... 빈배열은 map() 못돌림!ㅠ.ㅠ
    // 3. 배열에 값을 넣어주는 메서드
    // ->>> 배열.fill(값,시작번호,끝번호)
    // fill(값) : 모든배열 다 같은 값 채우기
    // fill(값,시작번호) : 0부터 시작하는 번호중 특정배열부터 끝까지 채움
    // fill(값,시작번호,끝번호) : 시작번호부터 끝번호까지 채움
    // console.log(Array(10));
    // console.log(Array(10).fill(8));
    // console.log(Array(10).fill(7, 2));
    // console.log(Array(10).fill(7, 2, 5));

    ////화면 렌더링 구역: 한번만 실행 /////////////////////////////////
    useEffect(() => {
        //[수량증가 버튼 클릭시 증감기능 구현]

        //1. 대상요소////////////
        //(1)숫자출력 input
        const sum = $("#sum");
        //(2)수량증가 이미지 버튼
        const numBtn = $(".chg_num img");
        // console.log(sum, numBtn);
        //(3) 총합계 요소
        const total = $("#total");

        //1. 수량증잠 이벤트 함수
        numBtn.on("click", (e) => {

            //(1) 이미지 순번(구분하려고)
            let seq = $(e.target).index();
            // console.log("버튼순번",seq);
            // 0 = 증가, 1 = 감소
            // (2) 기존 숫자값 읽기
            let num = Number(sum.val());
            // console.log("현재숫자", num);

            //(3)증감 반영하기(0= false, 1= true)
            sum.val(!seq ? ++num : num == 1 ? 1 : --num);
            // seq가 0이냐? 그럼 증가! : num이 1이냐? 1로 두고(최소값 고정), 1이 아님? 그럼 뺴라

            //(4) 총합계 반영하기
            //원가격은 컴포넌트 전달변수: ginfo[3] / 갱신x
            //원가격은 참조변수 getGinfo -> 새로운 값 들어오면 매번 업데이트
            total.text(addComma(getGinfo.current[3] * num) + "원");
            console.log("ginfo[3]확인 ", ginfo);
            console.log("getGinfo확인ㄴ", getGinfo);
            // 문제: ginfo 값으로 읽으면 최초에 셋팅된 값이 그대로 유지됨!
            // 왜? 본 함수는 최초 한번만 셋팅되기 때문 (useEffect)
            // 해결: 새로 들어오는 ginfo 값을 참조변수에 넣어 본 함수에서 그 값을 읽으면 됨

            //증감기호가 변수 앞에 있어야 먼저 증감하고 할당함!
        }); ////click
        //이벤트 제거: numBtn.off("click");
    }, []);

    //[화면 랜더링 구역: 매번 ]
    useEffect(()=>{
      //매번 리랜더링 될 때 마다 총합계 수량 초기화
      $('#sum').val(1);
      $('#total').text(addComma(ginfo[3])+'원');
    })///////////useEffect

    ////코드 리턴구역 ////////////////////////////////
    return (
        <>
            <a
                href="#"
                className="cbtn"
                onClick={(e) => {
                    // 기본이동막기
                    e.preventDefault();
                    // 창닫기
                    $(".bgbx").hide();
                }}
            >
                <span className="ir">닫기버튼</span>
            </a>
            <div id="imbx">
                <div className="inx">
                    <section className="gimg">
                        {/* 선택한 상품 큰이미지 */}
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                `/images/goods/${cat}/${ginfo[0]}.png`
                            }
                            alt="큰 이미지"
                        />
                        {/* [작은 상품이미지]
            - 본 상품을 제외한 5개의 상품이 나열되고
            클릭시 본 화면에 상품을 변경해 준다!
            단, 같은 카테고리 상품 상위 5개임 
            -> 배열을 임의로 만들고 값도 임의로 넣고
            map을 사용하여 코드를 만들어보자!!!
            */}
                        <div className="small">
                            {}
                            {Array(5)
                                .fill("")
                                .map((v, i) => {
                                    //한줄리스트와 같은 번호면 6번 나오게 함
                                    // 1~5까지니까!
                                    let num =
                                        ginfo[0].substr(1) <= i + 1
                                            ? i + 5
                                            : i + 1;
                                    //현재상품번호 1~5중 같은게 있으면 6번!
                                    //아니면 기존번호!
                                    //substr(시작순번, 개수) => 개수 없으면 순번부터 전부 가져옴
                                    console.log(
                                        "검사할 번호",
                                        ginfo[0].substr(1)
                                    );
                                    console.log("변경 번호", num);

                                    return (
                                        <a
                                            href="#"
                                            key={i}
                                            onClick={(e) => {
                                                // 기본이동막기
                                                e.preventDefault();
                                                // 선택 데이터 찾기
                                                // -> cat항목값 + ginfo[0]항목
                                                let res = dt.find((v) => {
                                                    if (
                                                        v.cat == cat &&
                                                        v.ginfo[0] == "m" + num
                                                    )
                                                        return true;
                                                }); //// find /////
                                                console.log(res);
                                                // 상품상세모듈 전달 상태변수 변경
                                                //find에서 받은 값은? 객체값
                                                //그중 gInfo 속성값만 필요
                                                setGinfo(res.ginfo);
                                                //카테고리값은 바꿀필요 X
                                            }}
                                        >
                                            <img
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    `/images/goods/${cat}/m${num}.png`
                                                }
                                                alt="썸네일 이미지"
                                            />
                                        </a>
                                    );
                                })}
                        </div>
                    </section>
                    <section className="gdesc scbar">
                        <h1>HOME &gt; {cat.toUpperCase()}</h1>
                        <div>
                            <ol>
                                <li>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/images/dx_ico_new-28143800.gif"
                                        }
                                        alt="new버튼"
                                    />
                                </li>
                                <li id="gtit">상품명: {ginfo[1]}</li>
                                <li>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/images/icon_type02_social01.gif"
                                        }
                                        alt="페이스북"
                                    />
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/images/icon_type02_social02.gif"
                                        }
                                        alt="트위터"
                                    />
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/images/icon_mail02.gif"
                                        }
                                        alt="이메일"
                                    />
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/images/btn_source_copy.gif"
                                        }
                                        alt="URL복사"
                                    />
                                </li>
                                <li>
                                    <span>판매가</span>
                                    <span id="gprice">
                                        {addComma(ginfo[3])}원
                                    </span>
                                </li>
                                <li>
                                    <span>적립금</span>
                                    <span>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/images/icon_my_m02.gif"
                                            }
                                            alt="적립금"
                                        />
                                        4,950(5%적립)
                                    </span>
                                </li>
                                <li>
                                    <span>무이자할부</span>
                                    <span>
                                        부분 무이자 할부 혜택
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/images/view_btn_nointerest_card.gif"
                                            }
                                            alt="무이자카드보기"
                                        />
                                    </span>
                                </li>
                                <li>
                                    <span>상품코드</span>{" "}
                                    <span id="gcode">{ginfo[2]}</span>
                                </li>
                                <li>
                                    <span>사이즈</span>{" "}
                                    <span>95 100 105 110</span>
                                </li>
                                <li>
                                    <span>구매수량</span>
                                    <span>
                                        <input
                                            type="text"
                                            id="sum"
                                            defaultValue="1"
                                        />
                                        <b className="chg_num">
                                            <img
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    "/images/cnt_up.png"
                                                }
                                                alt="증가"
                                            />
                                            <img
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    "/images/cnt_down.png"
                                                }
                                                alt="감소"
                                            />
                                        </b>
                                    </span>
                                </li>
                                <li>
                                    <span>컬러</span> <span></span>
                                </li>
                                <li>
                                    <span>권장계절</span> <span>여름</span>
                                </li>
                                <li className="tot">
                                    <span>총합계</span>
                                    <span id="total">
                                        {addComma(ginfo[3])}원
                                    </span>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <button className="btn btn1">BUY NOW</button>
                            <button className="btn">SHOPPING CART</button>
                            <button className="btn">WISH LIST</button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
