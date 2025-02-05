import React from "react";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import { useState } from "react";

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleSubmitGuesses(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuesses={handleSubmitGuesses} />
    </>
  );
}

export default Game;
