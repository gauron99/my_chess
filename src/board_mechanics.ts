
setupGame();

function setupGame() {
  //create chessboard
  drawBoard();

  //setup pieces on the board acording to the mode used
  // standard: normal way
  // ches960: random setup -- mirrored
  // kings play: game is won when king is captured ("impossible" moves allowed)
  setupPieces();
}

function drawBoard() {
  console.log("drawing...");
  var board = document.getElementById("chessboard");
  if(board === null){
    throw Error("No Element with ID - 'chessboard'")
  }

  var change = true;
  var color = 'white';
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
    

    if(change){
      color = color ==='white' ? 'black' : 'white';
    }

    sq.className += color === 'white' ? 'white': 'black';
    change = true;
    row?.appendChild(sq);
  }
}

function setupPieces() {
  console.log("setting up pieces...");

  console.log("YO",localStorage.getItem('settings'));
}
