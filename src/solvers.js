/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  //create a grid from given gridsize
  //toggles first square with rook(value)
  //iterate through the row elements
    //if there is no column conflict
      //toggle that value to that position
      //break
    //move to next row
      //iterate through elements and make sure there's no column conflict
      //toggle next rook when there's no column conflict
  //push the grid to solution
  var solution = []; //fixme
  var newBoard = new Board({n:n})
  // newBoard.togglePiece(0, 0)
  for (let y = 0; y < n; y++){
    for (let x = 0; x < n; x++){
      newBoard.togglePiece(y, x)
      if (newBoard.hasColConflictAt(x) || newBoard.hasRowConflictAt(y)){
        newBoard.togglePiece(y, x);
      }
    }
  }
  
  solution = newBoard.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var newBoard = new Board({n:n});
  var solutionCount = 0;
  var solutionFinder = function(row, board){
    if (row === n){
      solutionCount++
      return; 
    }
    for (var col = 0; col < n; col++){
      newBoard.togglePiece(row, col);
      if (!newBoard.hasAnyRowConflicts() && !newBoard.hasAnyColConflicts()){
        solution = solutionFinder(row+1, board)
      }
      newBoard.togglePiece(row, col);
    }
  }
  solutionFinder(0, newBoard)
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};
  //cheat 
  // var solutionCount = undefined; //fixme
  // var handler = function(val){
  //   if (val === 1){
  //     return 1;
  //   } else {
  //     return val * handler(val -1)
  //   }
  // }
  // if (n === 0){
  //   solutionCount = 1;
  // } else {
  //   solutionCount = handler(n)
  // }


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solution;
  if (n === 2 || n === 3){
    return board.rows();
  }
  var solutionFinder = function(row, board) {
    if (row === n) {
      return board.rows();
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        solution = solutionFinder(row + 1, board);
        if (solution) {
          return solution;
        }
      }
      board.togglePiece(row, col);
    }
  };
  solution = solutionFinder(0, board);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var newBoard = new Board({n:n});
  var solutionFinder = function(row, board){
    if (row === n){
      solutionCount++
      return; 
    }
    for (var col = 0; col < n; col++){
      newBoard.togglePiece(row, col);
      if (!newBoard.hasAnyRowConflicts() && !newBoard.hasAnyColConflicts() && !newBoard.hasAnyQueensConflicts()){
        solution = solutionFinder(row+1, board)
      }
      newBoard.togglePiece(row, col);
    }
  }
  solutionFinder(0, newBoard)



  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
