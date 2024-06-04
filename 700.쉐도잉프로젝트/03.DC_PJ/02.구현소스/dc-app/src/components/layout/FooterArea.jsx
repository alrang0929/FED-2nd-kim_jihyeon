// 하단영역 컴포넌트 ///
import Logo from "../modules/Logo";
import { bmData } from "../data/bmenu";

import "../../css/footer_area.scss";
///////////import area//////////////////////////////////

export default function FooterArea(){

    //// 코드 리턴구역 //////////////
    return(
           <footer className="info">
            <ul>
                <li>
                    <Logo logoStyle="bottom" />
                </li>
                <li>
                    {/* 하단링크박스 */}
                    <ol className="bmenu">
                        {bmData.map((v,i)=>
                        <li key={i}>
                            <a href={v.link} target="_blank">
                                {v.txt.toUpperCase()
                                //toUpperCase: 대문자변환
                                //toLowerCase: 소문자변환
                                }
                            </a>
                        </li>
                        )}
                    </ol>
                </li>
                <li>
                © & ™ DC. ALL RIGHTS RESERVED
                </li>
            </ul>
            </footer>
    );

} /////////// FooterArea /////////////////////