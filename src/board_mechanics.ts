import sp_settings from "./singleplayer";

setupGame();

function setupGame() {
  //create chessboard
  drawBoard();
  //setup pieces on the board acording to the mode used
  // standard: normal way
  // ches960: random setup -- mirrored
  setupPieces();
}

function drawBoard() {
  console.log("drawing...");
}

function setupPieces() {
  console.log("setting up pieces...");
}
