import React, { useState } from "react";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// CSS불러오기
import "../../css/searching.scss";

// 데이터 불러오기 : 캐릭터 리스트 데이터
import { catListData } from "../data/swiper_cat";

// 캐릭터 리스트 결과 컴포넌트
import SearchingCat from "./SearchingCat";

function Searching({ kword }) {
  console.log("catListData", catListData);
  console.log("kword", kword);
  //kword = 전달받은 키워드
  //검색어가 있는 데이터 필터하기

  //키워드에 따른 검색결과가 달라지므로
  //핵심데이터인 검색어를 상태관리 변수로 셋팅

  //((상태관리변수))/////////////////////////////////////
  //[1] 검색어 상태관리 변수
  const [kw, setKw] = useState(kword);
  // setKw(kword);
  //[2] 정렬기준 상태관리 변수
  const [sort, setSort] = useState("asc");
  //값: 오름차순 -> asc / 내림차순-> desc

  //[3] 체크박스 체크여부 상태관리변수
  const [chk, setChk] = useState([true, true, true]);
  console.log("체크훅배열", chk);
  //배열로 만들고 체크박스 상태를 묶어서 관리

  //초기값으로 전달받은 검색어 변수를 넣어준다

  //1. 전체 데이터에서 필터
  const newList = catListData.filter((v) => {
    //2. 속성중 캐릭터 이름중 검색(v.cname)
    //검색어 => 영문일 경우 소문자 처리 (toLocaleLowerCase)

    //3. 검색 결과 담기
    let newVal = v.cname.toLocaleLowerCase();
    // 전달받은 키워드도 소문자처리
    //★중요★ 상태변수인 kw로 대체
    let key = kw.toLocaleLowerCase();
    //문자열이 있는 값만 배열로 재수집

    //4. 결과값에 -1 이 있냐? (결과값 有) > 출력해라 (return true)
    if (
      //1과 2의 조건이 모두 true가 나야 retrun
      //1. 검색어 조건
      newVal.indexOf(key) !== -1 &&
      //2. 체크박스 항목 조건
      //!!주의: 조건문 내의 삼항연산자는 반드시 소괄호로 묶어 논리연산자(ex:&&,||,!)와의
      //충돌을 막아야함
      //||문의 결과가 false이려면 모두 false여야함!
      //따라서 체크박스 모두 미체크시 false로 처리!
      ((chk[0] ? v.alignment == "hero" : false) ||
        (chk[1] ? v.alignment == "comp" : false) ||
        (chk[2] ? v.alignment == "villain" : false))
      // true&&(true||false||false)
      //-> &&문: 전부 true->true / ||문: 하나만 true -> true
    )
      return true;

    //indexOf(문자) 문자열 위치번호 리턴함
    //그런데 결과가 없으면 -1을 리턴함
    //그래서 -1이 아닌 것(true)을 리턴하면

    //filter((<< 결과값 항상 배열로 출력))에서 변수에 저장할 배열로 수집
  }); ////////////filter

  //[결과내 재검색 : 데이터 항목중 alignment 값으로 검색함 / or 검색]

  //[정렬기능 추가하기]
  // (1) 오름차순일 경우

  if (sort == "asc") {
    newList.sort((a, b) =>
      a.cname > b.cname ? 1 : a.cname < b.cname ? -1 : 0
    );
  } /////if////////////

  //(2)내림차순일 경우
  else if (sort == "desc") {
    newList.sort((a, b) =>
      a.cname > b.cname ? -1 : a.cname < b.cname ? 1 : 0
    );
  } ////if///////////

  console.log("newList", newList);

  /*  변수 = 배열.filter(v=>
  {if(v.속성명.indexOf(검색어)!=-1)
  return true
})
ㄴ> 결과: 검색어가 있는 경우 변수에 모아서 담아준다
ㄴ> filter 결과값 = 배열 or (값이 無)빈배열

*/

  // 코드 리턴구역 ////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {/* 1. 옵션선택박스 */}
        <div className="schopt">
          {/* 1-1.검색박스 */}
          <div className="searching">
            {/* 검색버튼 돋보기 아이콘 */}
            <FontAwesomeIcon
              icon={faSearch}
              className="schbtn"
              title="Open search"
            />
            {/* 입력창 */}
            <input
              id="schin"
              type="text"
              placeholder="Filter by Keyword"
              defaultValue={kword}
              //엔터키를 눌렀을 때 검색실행
              //즉 검색어 상태변수만 업데이트 하면 끝 => setKw
              onKeyUp={(e) => {
                if (e.key == "Enter") {
                  //1. 검색어 상태값 변경
                  setKw(e.target.value);
                  //2. 처음 검색시 정렬은 기본 정렬(오름차순:asc), 가상돔에서 먼저 셋팅
                  setSort("asc");
                  //3. 처음 검색시 모두 체크
                  setChk([true,true,true])
                  //정렬선택박스 선택값 변경(html 변경: dom에서 보이기 변경)
                  document.querySelector("#sel").value = "asc";
                }
              }}
            />
          </div>
          {/* 1-2. 체크박스구역 */}
          <div className="chkbx">
            <ul>
              <li>
                {/* 타이틀 */}
                <h2>
                  ALIGNMENT
                  <span className="spbtn">＋</span>
                </h2>
                {/* 체크박스리스트 */}
                <ol>
                  <li>
                    Heroes
                    {/* 숨긴 체크박스 */}
                    <input
                      type="checkbox"
                      id="hero"
                      className="chkhdn"
                      //체크박스를 체크속성값에 hook 연결
                      //체크 변경시 change 이벤트 발생
                      checked={chk[0]}
                      onChange={(e) => {
                        console.log(e.target.checked);
                        //checked: 체크시 true, ㄴ체크 false
                        //훅값 업데이트
                        setChk([e.target.checked, chk[1], chk[2]]);
                      }}
                    />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="hero" className="chklb"></label>
                  </li>
                  <li>
                    It's Complicated
                    {/* 숨긴 체크박스 */}
                    <input
                      type="checkbox"
                      id="comp"
                      className="chkhdn"
                      checked={chk[1]}
                      onChange={(e) => {
                        console.log(e.target.checked);
                        //checked: 체크시 true, ㄴ체크 false
                        //훅값 업데이트
                        setChk([chk[0], e.target.checked, chk[2]]);
                      }}
                    />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="comp" className="chklb"></label>
                  </li>
                  <li>
                    Villains
                    {/* 숨긴 체크박스 */}
                    <input
                      type="checkbox"
                      id="villain"
                      className="chkhdn"
                      checked={chk[2]}
                      onChange={(e) => {
                        console.log(e.target.checked);
                        //checked: 체크시 true, ㄴ체크 false
                        //훅값 업데이트
                        setChk([chk[0], chk[1], e.target.checked]);
                      }}
                    />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="villain" className="chklb"></label>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
          {/* 2-1. 결과 타이틀 */}
          <h2 className="restit">BROWSE CHARACTERS</h2>
          {/* 2-2. 정렬선택박스 */}
          <aside className="sortbx">
            <select
              name="sel"
              id="sel"
              className="sel"
              //값을 변경할 때 이벤트 발생
              onChange={(e) => {
                // console.log(e.target.value);
                setSort(e.target.value);
              }}
            >
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </aside>
          {/* 2-3. 캐릭터 리스트 컴포넌트 : 
            데이터 상태변수 중 첫번째값만 보냄 */}
          <SearchingCat dt={newList} />
          {/* SearchingCat으로 결과값 전달  */}
        </div>
      </section>
    </>
  );
}

export default Searching;
