import React from "react";
import Guess from "./Guess";

function GuessResults({ guesses }) {
  return (
    <>
      <div className="guess-results">
        {guesses.map(({ value, id }) => {
          return <Guess value={value} key={id} />;
        })}
      </div>
    </>
  );
}

export default GuessResults;
