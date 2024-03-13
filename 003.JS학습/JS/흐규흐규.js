//프로그램 요구사항 및 데이터 파악<<


//이벤트 대상 선정
//고정적인 것들 (변수값x) const로 지정..
const mini = document.querySelectorAll<<복수('.mini << html내 id');
const rbtm = document.querySelector<<단수('.rbtn');




//2. 이벤트 속성 셋팅 .. 반복적인 증가 for문

for(let i=0; i<mini.length; i++){
    mini[i].onclick = insertMini;

}


