
setupGame();

function setupGame() {
  //create chessboard
  drawBoard();

  //setup pieces on the board acording to the mode used
  // standard: normal way
  // ches960: random setup -- mirrored
  // kings play: game is won when king is captured ("impossible" moves allowed)
  setupPieces();

  console.log("YO",localStorage.getItem('settings'));
}

// 'num' is square id number 
// returns '' if its not a special square
// returns class name if it is
function specialSquare(num: number) {
  // numbers -- top left
  if(num === 1){
    return 'inSquareNum one '
  } else if (num === 9) {
    return 'inSquareNum two '
  } else if (num === 17) {
    return 'inSquareNum three '
  } else if (num === 25) { 

  } else if (num === 33) {

  } else if (num === 41) {

  } else if (num === 49) {

  } else if (num === 57) {

  // letters bottom right
  } else if (num === 58) {

  } else if (num === 59) {

  } else if (num === 60) {

  } else if (num === 61) {

  } else if (num === 62) {

  } else if (num === 63) {

  } else if (num === 54) {

  } else {
    return '';
  } 
    
}

function drawBoard() {
  console.log("drawing...");
  var board = document.getElementById("chessboard");
  if(board === null){
    throw Error("No Element with ID - 'chessboard'")
  }

  var change = true;
  
  var color = 'light';
  var row = null;
  for(let i = 0;i <= 64;++i){
    if(i % 8 === 0){ //new line                                                   
      if(row !== null){
        board.appendChild(row);

      }
      change = false;
      row = document.createElement('div');
      row.id = 'row'+(i/8+1);
      row.className = 'row';
    }

    var sq = document.createElement('div');
    sq.id='square'+(i+1).toString();
    sq.className = 'square ';
    //check if special square for sign (a->h; 1->8)
    sq.className += specialSquare(i+1);

    

    if(change){
      color = color ==='light' ? 'dark' : 'light';
    }


    sq.className += color === 'light' ? 'light': 'dark';
    change = true;
    row?.appendChild(sq);
  }
}

function setupPieces() {
  console.log("setting up pieces...");

}
