import { range } from "../utils";

function GuessResults({ guesses }) {
  return (
    <>
      <div className="guess-results">
        {range(6).map((row, index) => {
          const guess = guesses[index];
          return (
            <p className="guess" key={guess?.id || index}>
              {range(5).map((cell, index) => {
                return (
                  <span className="cell" key={index}>
                    {guess?.value?.[index]}
                  </span>
                );
              })}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default GuessResults;
