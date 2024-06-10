import React from 'react';
import ReactDOM from 'react-dom/client';

/////////////import area////////////////////////////

function MainComponent() {
  return (
    <div>
      <h1>파일럿PJ 입니당당숭당당</h1>
    </div>
  );
}

//출력하기
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<MainComponent />);