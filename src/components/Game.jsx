import React from "react";
import { WORDS } from "../data";
import { sample } from "../utils";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";

const answer = sample(WORDS);
console.log(`Answer: ${answer}`);

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuesses(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuesses={handleSubmitGuesses} />
    </>
  );
}

export default Game;
