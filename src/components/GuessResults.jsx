import Guess from "./Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";
import { range } from "../utils";

function GuessResults({ validatedGuesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} value={validatedGuesses[num]} />;
      })}
    </div>
  );
}

export default GuessResults;
