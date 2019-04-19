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
  // debugger;
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

window.findSolution = function(row, n, board, callback){
  if (row === n){
    return callback();
  }
  for (var i = 0; i < n; i++){
    board.togglePiece(row, i);
    if (!board.hasAnyRooksConflicts()){
      this.findSolution(row + 1, n, board, callback);
    }
    board.togglePiece(row, i);
  }
}

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var newBoard = new Board ({n:n});
  var solutionCount = 0;
  findSolution(0, n, newBoard, function() {
    solutionCount++;
  });
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
  


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
