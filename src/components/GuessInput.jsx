import React from "react";

function GuessInput({ handleSubmitGuesses, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuesses(tentativeGuess);
    console.log("Tentative Guess:", tentativeGuess);
    setTentativeGuess("");
  }
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter Guess:</label>
        <input
          required
          type="text"
          maxLength={5}
          disabled={gameStatus !== "running"}
          pattern="[a-zA-Z]{5}"
          title="5 Letter Word"
          id="guess-input"
          value={tentativeGuess}
          onChange={(event) => {
            setTentativeGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
