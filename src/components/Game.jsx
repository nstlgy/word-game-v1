import React from "react";
import { WORDS } from "../data";
import { sample } from "../utils";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";

const answer = sample(WORDS);
console.log(`Answer: ${answer}`);

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuesses(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      {gameStatus}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuesses={handleSubmitGuesses}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
