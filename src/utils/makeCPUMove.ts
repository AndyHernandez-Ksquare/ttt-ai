import { TileValue } from "../types/types";
const makeCPUMove = (
  board: TileValue[],
  playerChip: string,
  setBoard: React.Dispatch<React.SetStateAction<TileValue[]>>,
  setIsPlayerTurn: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  const availableMoves = board
    .map((tile, index) => (tile === null ? index : null)) // Map each tile to its index if it's empty, or null if it's not
    .filter((tile) => tile !== null); // Filter out the null tiles to get only the available moves

  const randomIndex = Math.floor(Math.random() * availableMoves.length); // Generate a random index based on the number of available moves
  const cpuMoveIndex = availableMoves[randomIndex]; // Get the index of the chosen move

  const newBoard = [...board];
  // If a valid move was chosen
  if (cpuMoveIndex !== null) {
    // Update the board with the CPU's move
    newBoard[cpuMoveIndex] = playerChip === "X" ? "O" : "X";
  }
  setBoard(newBoard);
  setIsPlayerTurn(true);
};
export default makeCPUMove;
