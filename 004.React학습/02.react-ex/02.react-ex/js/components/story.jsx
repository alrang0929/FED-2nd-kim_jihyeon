//산 너머 산  서브 컴포넌트
//컨테스트 불러오기
import { 누구냐 } from "./provider";
import { mtInfo } from "../data/mt_data";
import MtIcon from "./mt_icon";

export default function 이야기() {
  //컨텍스트를 사용하려면 useContext() 메서드 사용
  const 나야나 = React.useContext(누구냐);
  //산정보는 배열이므로 순회하여 해당 데이터를 할당함
  //선택된 산 정보 변수 할당 하기
  const selMtInfo = mtInfo.find((v) => {
    if (v.이름 == 나야나.mtName) return true;
  });

//   console.log(selMtInfo);

  //버튼 만들기에 사용할 산이름 배열 만들기
  //기존 산정보 객체의 배열에서 산이름값만 모아서
  //새로운 배열을 만든다!! 이것이 map() 메서드의 본래 사용법!
  const mtTotal = mtInfo.map((v) => v.이름);
  // console.log("산이름 새배열", mtInfo);

  //산이름 변경 메서드
  const changeMtName = (e) => {
    console.log(e.target.innerText);
    //부모 프로바이더로 부터 전달받은 상태변수 변경 메서드를 사용하여
    //산이름을 업데이트
    나야나.setmtName(e.target.innerText);
  }; ///////changeMtname
  return (
    <div style={나야나.mtBoxCss}>
      {/* 1. 산 이름 정보 */}
      <h1>
      {나야나.mtName != "후지산" && 
        <MtIcon mtName={나야나.mtName} />}

        {나야나.mtName}
        {나야나.mtName != "후지산" && 
        <MtIcon mtName={나야나.mtName} />}
        
        </h1>
      {/* 2. 산 이미지 */}
      <img
        src={selMtInfo.이미지}
        alt={selMtInfo.이름}
        style={{ width: "100%" }}
      />
      {/* 3. 산 정보 박스 */}
      <div className="" style={나야나.mtInfoBoxCss}>
        <ul>
          <li>
            <span>이름: {selMtInfo.이름}</span>
            <br />
            <span>설명: {selMtInfo.설명}</span>
            <br />
            <span>높이: {selMtInfo.높이}</span>
            <br />
            <span>융기: {selMtInfo.융기}</span>
            <br />
            <span>최초등반: {selMtInfo.최초등반}</span>
            <br />
            <span>최초등반가: {selMtInfo.최초등반가}</span>
            <br />
            <span>산맥: {selMtInfo.산맥}</span>
            <br />
          </li>
        </ul>
      </div>
      {/* 4. 현재산을 제외한 나머지 산 버튼 생성하기 */}
      {
        mtTotal.map((v) =>
          v != 나야나.mtName && (
            <button
              style={{
                padding: "15px",
                fontSize: "20px",
                margin: "10px",
              }}
              onClick={changeMtName}
            >
              {v}
            </button>
          )
        ) //map
      }
    </div>
  );
} //이야기 컴포넌트


