////////////다국어 -js4-2.language.js

//나의 함수 불러오기
import myFn from "./my_function.js";
// console.log('호출확인',myFn);
// 제이슨 호출: 어서써 타입 제이슨 / 같이써 타입 제이슨
import langData from "./data_lang.json" assert{type:"json"};
console.log(langData);


//1. 다국어 요구사항
//1) 언어 선택박스에서 언어를 변경하면 코드에 맞게 다국어 데이터를 json파일에서 읽어와 본 페이지의 해당 데이터를 업데이트 한다!

//2. 대상선정
//2-1. 이벤트 대상: .sel
const selBox = myFn.qs('.sel');
//2-2. 변경 대상: #gnb a/ #cont img / #intro address
//(1)GNB메뉴: #gnb a
const gnbList = myFn.qsa('.gnb a');
//(2)메인 이미지: #cont img
const mainImg = myFn.qsa('#cont img');
//(3) 하단 주소: #info address
const addrBox = myFn.qs('#info address');

// console.log(selBox,gnbList,addrBox);

//3. 이벤트 설정하기
//이벤트 종류: 선택박스가 선택될때 변경되는 이벤트는? change
myFn.addEvt(selBox,'change',chgLang);

//1. 함수 만들기
function chgLang(){
//선택된 option velue속성값
let optVal = this.value;

//2. option의 value값으로 다국어 객체값 매칭하기
let selLang = langData[optVal];
//호출 및 값확인
console.log('변경',optVal,selLang);

//3. 데이터 셋팅하기
//3-1 GNB 메뉴 셋팅하기
gnbList.forEach((ele,idx) =>{

    ele.innerText = selLang['메뉴'][idx];

})//////forEach//////////////

}///////chgLang////////////////////////////