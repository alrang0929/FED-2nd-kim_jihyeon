///////////메인컴포넌트 - MainCont ///////////////////////

import React from "react";

//modules import
import Benner from "../modules/Benner";

//////import area/////////////////////////

function MainCont(props) {
  return (
    <>
      <section
        id="ban"
        className="page none-sel"
        style={{ background: "lightblue" }}
      >
        {/* 1. 배너 컴포넌트 */}
        <Benner />
      </section>
    </>
  );
}

export default MainCont;
