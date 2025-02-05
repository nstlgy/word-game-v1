import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="game-wrapper">
          <Game />
        </div>
      </div>
    </>
  );
}

export default App;
