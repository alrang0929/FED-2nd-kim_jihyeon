//데이터생성.js
import guData from"./gu_data.js";
console.log(guData);

let myData = [];
// console.log(myData);
//1. 기존 데이터에 새로운 속성 추가

//국가 옵션배열
const country = ["캄보디아","중국","일본","러시아"]
const countryNum = country.length;
//랜덤수 생성함수
const rdnNum = (n) => Math.floor(Math.random()*n);


//Math.cile: 1~n랜덤수 
//Math.floor: 0~n-1 랜덤수

guData.forEach((v)=>{
    v["소재"] = "천연가죽(소), 면100%";
    v["색상"] = "BLACK/TRUE WHITE";
    v["치수"] = "상단표기";
    v["제조자/수입자"] = "(유)브이에프코리아";
    v["제조국"] = "캄보디아";
    v["제조연월"] = "상품라벨에서 확인";
    v["A/S 책임자와 전화번호"] = "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882";
    v["Model"] = "VN000CYU"+(rdnNum(999)+1000);
    // console.log(rdnNum(countryNum));

});
