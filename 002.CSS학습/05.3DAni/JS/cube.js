//큐브 애니메이션 JS - cube.js

/* 

[요구사항 분석]

1. 버튼을 클릭하여 멈춰있던 큐브의 애니메이션
설정 상태 업데이트하여 작동시킨다.

2. 이때 버튼은 돌아에서 멈춰로 변경시킨다.

3. 다시 멈춰버튼을 클릭 시 돌고있던 큐브에 애니메이션
설정상태를 변경하여 멈추게 한다.
-> 버튼은 다시 돌아로 변경

*/

//1. 대상선정
//1-1 이벤트 대상 선정: .btngo
const btngo = document.querySelector('.btngo');

//1-2 변경대상: .cube
const cube = document.querySelector('.cube');
//console.log('대상:',cube,btngo);

//2. 이벤트 속성 셋팅하기
// 대상: 버튼 .btngo -> btngo 변수
// 이벤트 속성에 익명함수를 할당하면
//이벤트 발생시 익명함수 내부의 코드가 실행됨
btngo.onclick = function(){

    //1. 함수 호출확인(this는 버튼자신)
    console.log('나양',this.innerText);

    //2. 변경대상: .cube -> cube변수
    //3. 변경내용: cube에 클래스 on을 없으면 넣고 있으면 제거
    //미리 셋팅된 애니 작동 멈춤됨!
    cube.classList.toggle('on')
    //classList는 요소의 클래스만 전문적으로 다루어주는 JS내장 객체
    //메서드로 add() - 넣기, remove() - 제거, toggle() - 넣기 뺴기

    //4. 버튼글자 변경하기
    // - 읽어온 버튼 글자가 "돌아"면 "멈춤"
    // - "돌아"가 아니면 "돌아"를 텍스트로 넣는다.
    // ->> 조건 연산자(삼항연상자) 사용!
    //->> 비?집:놀이동산

    this.innerText =
    this.innerText == '돌아'?'멈춰':'돌아';

    //if문 돌아
    //if(this.innerText == '돌아'){this.innerText = '멈춰'}
    //else{this.innerText = '돌아'};

};//////////click 이벤트 함수///////////////////////////
//////////////////////////////////////////////////////
