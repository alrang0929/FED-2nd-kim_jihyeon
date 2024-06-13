//서브 컴포넌트: 상품리스트 jsx - good_lsit.jsx

// 공유신발 데이터 불러오기
import guData from "../data/gu_data";
import hjData from "../data/hj_data";
/////////////////////import area /////////////////////////

export default function GoodsList({ viewDetail, updateIdx, selItem }) {

  // 1) viewDetail - 부모컴포넌트가 전달해준 상태변수
  // (viewList를 업데이트하는 setViewList메서드임!)
  // 2) updateIdx - 부모컴포넌트 setIdx 상태 관리 변수 메서드
  // 3) selItem - 부모컴포넌트에서 "공유" / "효진" 선택코드값
  //    공유: guData  / 효진: hjData

  //선택코드에 따른 데이터 선택하기
  const selData = 
  selItem == "공유" ? 
  guData : 
  selItem == "효진"? 
  hjData :[];

//useEffect 구역 : 화면 업데이트 후 실행구역
React.useEffect(()=>{

  console.log("나는 리스트 컴포넘트");
    //useEffect 함수 구역에 return 함수 코드를 쓰면 함수
  //컴포넌트 소멸시 실행된다
  return(
    ()=>{
      console.log("나는 리스트 컴포넘트 소멸");
    }
  );


});////////////useEffect구역



  // 코드리턴구역 ////////////////
  return (
    <ul>
      {
        // 반복요소 li에 key속성을 쓸것을
        // 리액트는 필수적이라고 함!
        // 어디에 쓰나? 업데이트시 순번구분을 위함
        // node.js개발환경에서는 안쓰면 에러남!
        selData.map((v, i) => (
          <li key={i}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                viewDetail(false);
                //setIdx 메서드가 updateIdx로 들어옴
                updateIdx(i);
              }}
            >
              <ol className="glist">
                <li>
                  {selItem == "공유" ? 
                  <img src={`./images/vans/vans_${v.idx}.jpg`} alt="신발" /> : selItem == "효진" ? 
                  <img src={`./images/gallery/${v.idx}.jpg`}alt="드레스"/> : ""
                }
                </li>
                <li>{v.gname}</li>
                <li>가격 : {v.gprice}원</li>
              </ol>
            </a>
          </li>
        ))
      }
    </ul>
  );
} //////////// GoodsList 컴포넌트 //////////
