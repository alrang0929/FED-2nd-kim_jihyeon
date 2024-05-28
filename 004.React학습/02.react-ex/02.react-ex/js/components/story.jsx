//산 너머 산  서브 컴포넌트 
//컨테스트 불러오기
import { 누구냐 } from "./provider";
import { mtInfo } from "../data/mt_data";


export default function 이야기(){

    //컨텍스트를 사용하려면 useContext() 메서드 사용
    const 나야나 = React.useContext(누구냐);
    //산정보는 배열이므로 순회하여 해당 데이터를 할당함
    //선택된 산 정보 변수 할당 하기
    const selMtInfo = mtInfo.find(v=>{
        if(v.이름 == 나야나.mtName) return true;
    });

    console.log(selMtInfo);

    //산이름 변경 메서드
    const changeMtName = (e) =>{  
        console.log(e.target.innerText);
        //부모 프로바이더로 부터 전달받은 상태변수 변경 메서드를 사용하여
        //산이름을 업데이트
        나야나.setmtName(e.target.innerText);
    }///////changeMtname
return(
    <div style={나야나.mtBoxCss}>
        {/* 1. 산 이름 정보 */}
        <h1>{나야나.mtName}</h1>
        {/* 2. 산 이미지 */}
        <img src={selMtInfo.이미지} alt={selMtInfo.이름} style={{width:"100%"}}/>
        {/* 3. 산 정보 박스 */}
        <div className="" style={나야나.mtInfoBoxCss}>
            <ul>
                <li>
                    <span>이름: {selMtInfo.이름}</span><br/>
                    <span>설명: {selMtInfo.설명}</span><br/>
                    <span>높이: {selMtInfo.높이}</span><br/>
                    <span>융기: {selMtInfo.융기}</span><br/>
                    <span>최초등반: {selMtInfo.최초등반}</span><br/>
                    <span>최초등반가: {selMtInfo.최초등반가}</span><br/>
                    <span>산맥: {selMtInfo.산맥}</span><br/>
                </li>
            </ul>
        </div>
        <button onClick={changeMtName}>후지산</button>
        <button onClick={changeMtName}>에베레스트산</button>
        <button onClick={changeMtName}>백두산</button>
    </div>
);
}//이야기 컴포넌트