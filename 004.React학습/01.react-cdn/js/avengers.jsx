//외부 컴포넌트 파일 분리하기////////////////

//export default 는 컴포넌트 맨앞에서 또는 맨 아래에서 사용 가능
//export default 는 받을 떄 받는 곳에서 다른이름으로 받아도됨!

export default function Avengers(){

return(
   <React.Fragment>
    <h1>어벤저스여 모두 모여라!!!!</h1>
    <img src="./images/ab1.jpg" alt="어벤저스" />
    <img src="./images/ab2.jpg" alt="어벤저스" />
    <img src="./images/ab3.jpg" alt="어벤저스" />
    <img src="./images/ab4.jpg" alt="어벤저스" />
   </React.Fragment>
)
}/////////Avengers 컴포넌트///////////

