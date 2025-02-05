import React from "react";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import { useState } from "react";

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleSubmitGuesses(tentativeGuess) {
    // create an object to assign a unique value for each guess
    const nextGuess = {
      value: tentativeGuess,
      id: `${tentativeGuess}-${Math.random()}`, // you'd have to be really lucky to repeat this id
    };
    setGuesses([...guesses, nextGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuesses={handleSubmitGuesses} />
    </>
  );
}

export default Game;
