import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import { WORDS } from "../data";
import { useState } from "react";
import { sample } from "../utils";

const answer = sample(WORDS);
console.log(`Answer: ${answer}`);

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleSubmitGuesses(tentativeGuess) {
    const nextGuess = {
      value: tentativeGuess,
      id: `${tentativeGuess}-${Math.random()}`,
    };

    setGuesses([...guesses, nextGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuesses={handleSubmitGuesses} />
    </>
  );
}

export default Game;
