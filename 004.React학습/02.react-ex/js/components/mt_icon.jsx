//산 이름 옆 출력할 아이콘 이미지 생성 컴포넌트

const isrc = 
{
    에베레스트산:"https://cdn-icons-png.freepik.com/512/2036/2036196.png",
    백두산:"https://www.svgrepo.com/show/2207/mountain.svg",
    후지산:"https://icon2.cleanpng.com/20240109/ct/transparent-icon-mountain-snow-capped-peaks-bright-orange-sun-minimalist-image-of-mountain-sun-and-1710930048130.webp"
}

export default function MtIcon({mtName}){
    //mtName: 산이름 변수

    //화면랜더링 후 실행구역(DOM생성 후)
    React.useEffect(()=>{

        console.log("산아이콘 렌더링 되었습니까?")
        //현재 해당 컴포넌트가 제거될 경우 관리구역
        return(()=>{
            console.log("산아이콘은 소멸한다ㅠ");
            alert("후지산은 후지산이다");
        });/////////return 함수구역

    },[]); //컴포넌트 한번만 실행



    //코드리턴구역////////////////////////////////////////
    return(
        <img 
        src={isrc[mtName]}
        alt={mtName + "아이콘"}
        style={{width: "10%", 
        verticalAlign: 
        "middle",
        margin:"0 20px",
        borderRadius:"50%"
    }}
        />
    );

}/////////mtIcon컴포넌트////////////