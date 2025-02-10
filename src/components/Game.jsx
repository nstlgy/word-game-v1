import React from "react";

import { sample } from "../utils";
import { WORDS } from "../data";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";
import { checkGuess } from "../game-helpers";

import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import WonBanner from "./WonBanner";
import LostBanner from "./LostBanner";

function Game() {
  // running | lost | won
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  // React Strict Mode might be causing component to mount twice in development,
  // which would explain double console.logs with different values.
  React.useEffect(() => {
    console.log("Answer:", answer);
  }, [answer]);

  // Handlers
  function handleSubmitGuesses(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} />
      <GuessInput
        handleSubmitGuesses={handleSubmitGuesses}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
