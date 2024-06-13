import React from "react";
import ReactDOM from "react-dom/client";

///layout
import TopArea from "./components/layout/TopArea";
import MainArea from "./components/layout/MainArea";
import FooterArea from "./components/layout/FooterArea";

/////////////import area////////////////////////////

function MainComponent() {
  return (
    <>
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  );
}

//출력하기
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MainComponent />);
