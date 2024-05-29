import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    $(".App-header span").hover(
      (e) => {
        // 오버시
        $(e.currentTarget).stop().animate(
          {
            scale: 1.4,
          },
          500
        );
      },
      (e) => {
        // 아웃시
        $(e.currentTarget).stop().animate(
          {
            scale: 1,
          },
          500
        );
      }
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <span>
          <img
            src="https://e7.pngegg.com/pngimages/823/859/png-clipart-cats-cats.png"
            className="App-logo"
            alt="logo"
          />
        </span>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
