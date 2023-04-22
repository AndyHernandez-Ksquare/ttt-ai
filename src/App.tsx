import useTikTakToe from "./hooks/useTikTakToe";
import "./App.css";
import TikTakToeBoard from "./TikTakToeBoard";
import ShowWinner from "./ShowWinner";

function App() {
  // Get the custom hooks
  const {
    playerChip,
    board,
    winner,
    draw,
    gameStarted,
    handleTileClick,
    setPlayerChip,
    resetGame,
    setGameStarted,
  } = useTikTakToe();

  const handleChipSelect = (chip: string) => {
    // Only allowed to change chip before the game has started
    if (!gameStarted) {
      setPlayerChip(chip);
    }
    setGameStarted(!gameStarted ? true : gameStarted);
  };

  return (
    <section className="App">
      <h1>Tik Tak Toe</h1>
      <section className="chip-select">
        <p className={`select-chip ${!gameStarted && "warning"}`}>
          Select your chip:
        </p>
        {/* Generate two buttons using a map */}
        {["X", "O"].map((chip) => (
          <button
            className="chip-button"
            onClick={() => {
              handleChipSelect(`${chip}`);
            }}
          >
            {chip}
          </button>
        ))}
      </section>

      <TikTakToeBoard
        playerChip={playerChip}
        board={board}
        handleTileClick={handleTileClick}
      />
      {/* If the game has started show this message */}
      {gameStarted && (
        <p className="warning">Cannot change chip once the game has started!</p>
      )}

      <ShowWinner winner={winner} isDraw={draw} resetGame={resetGame} />
    </section>
  );
}

export default App;
