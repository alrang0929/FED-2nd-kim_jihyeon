//GNB생성 js - gnb_menu.js
//gnb 데이터 불러오기
import mdata from "./mdata.js";
// console.log(mdata);
import mFn from "./my_function.js";
////////////////////import area//////////////////////

export default function makeMenu(target){
    //target = 메뉴구현 대상박스
console.log("으앙",target);

//대상요소에 매뉴태그 넣기 
//mData는 객체이므로 객체 key만 모아 배열을 만들어 map 매서드 순회하여 코드를 반복생성
//object.keys().map().join('');
target.innerHTML = `
<ul>
${
    // mdata는 객체이므로 객체키만 모아서 배열로 만들고
    // map() 메서드를 순회하여 코드를 반복 생성함!
    // Object.keys(객체).map().join("")
    // -> 오브젝트 키쓰 맵 쪼잉~!!!
    Object.keys(mdata).map(v=>`        
    <li>
        <a href="#">${v}</a>
        <div class="smenu">
            <aside class="smbx">
                <h2>
                <div class="stit">${v}</div>
                    <a href="#">전체보기</a>
                </h2>
                <div class="swrap">
                <!-- 2차메뉴 dl생성 -->
                ${
                    // mdata[키배열값] -> 키배열값은 v
                    // 그런데 이 데이터는 객체이므로
                    // map()을 쓰기위해 또 키배열로 뽑아낸다!
                    // v2키값은 2차메뉴임!
                    Object.keys(mdata[v])
                    .map(v2=>`
                        <dl>
                            <dt>${v2}</dt>
                            <!-- 3차메뉴 dd생성 -->
                            ${
                                // mdata[v][v2] -> 3차메뉴배열
                                mdata[v][v2]
                                .map(v3=>`                                    
                                    <dd>
                                        <a href="#">${v3}</a>
                                    </dd>
                                `).join('')
                            }
                        </dl>                        
                    `).join('')
                }
                </div>
            </aside>
        </div>
    </li>
    `).join('')
}
</ul>
`;


/*********************************************** 
     [상위메뉴 li에 오버시 하위메뉴 보이기]
     이벤트 대상: .gnb ul li
     변경대상: .gnb ul li > .smenu
     읽어올 높이값: smenu > .snbx
***********************************************/

//1. 이벤트 대상선정
const gnb = mFn.qsa(".gnb ul li");

//2. 이벤트 설정 및 함수 구현
gnb.forEach(ele => {
    mFn.addEvt(ele,"mouseenter",(e)=>{
        //currentTarget: 버블링된 것도 타겟팅
        //target: 버블링을 발생시킨 근원지 타겟팅
        //        버블링되지 않는 이벤트일 경우 ㄱㅊ

        //이벤트 대상: 
        let tg = e.currentTarget;
        console.log("오버",tg);

        //하위중 .smbx의 높이값을 읽어서 smenu의 높이값 변경
        mFn.qsEl(tg,".smenu").style.height = 
        mFn.qsEl(tg,".smbx").offsetHeight + "px";

    });////////mouseenter//////
    mFn.addEvt(ele,"mouseleave",(e)=>{
        //이벤트 대상:
        let tg = e.currentTarget;
        //높이값 0 만들기
        mFn.qsEl(tg,".smenu").style.height = "0px"
        console.log("아웃",tg); 

    });/////////////mouseleave///////
});////////////forEach ////////////




}////////////makeMenu Fn////////////////
