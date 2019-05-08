document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      cell: 0,
      row: 0,
      col: 0,
      isMine: true,
      hidden: true,
    },
    {
      cell:1,
      row: 1,
      col: 0,
      isMine: true,
      hidden: true,
    },
    {
      cell: 2,
      row: 2,
      col: 0,
      isMine: true,
      hidden: true,
    },
    {
      cell:3,
      row: 0,
      col: 1,
      isMine: false,
      hidden: true,
    },
    {
      cell: 4,
      row: 1,
      col: 1,
      isMine: false,
      hidden: true,
    },
    {
      cell: 5,
      row: 2,
      col: 1,
      isMine: false,
      hidden: true,
    },
    {
      cell: 6,
      row: 0,
      col: 2,
      isMine: false,
      hidden: true,
    },
    {
      cell: 7,
      row: 1,
      col: 2,
      isMine: true,
      hidden: true,
    },
    {
      cell: 8,
      row: 2,
      col: 2,
      isMine: false,
      hidden: true,
    }
  ]


}

function startGame () {

  for (let index = 0; index < board.cells.length; index++) {
    const cell = board.cells[index];
    cell.surroundingMines = countSurroundingMines(cell);
  };

  document.addEventListener('click', function(){
    checkForWin();
  });
  document.addEventListener('contextmenu', function(){
    checkForWin();
  })

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    
    var hasntWonYet = true;
    if (!hasntWonYet) {
      
    }
  

    //if cell is a mine & its not marked then you havent won soz
    //check if all mines are marked
    //find how many mines
    //find how many are marked
    let mines = board.cells.filter(cell => cell.isMine).length;
    let markedMines = board.cells.filter(mine => mine.isMarked).length;
    let hiddenCells = board.cells.every(cell => cell.hidden);

    if (markedMines == mines) {
      if (hiddenCells) {
        console.log('still hidden cells')
      }else if(!hiddenCells){
        lib.displayMessage('You win!')
        console.log('you win')
      }
      console.log('marked all')
    }else if(markedMines != mines){
      allMinesMarked = false;
      console.log('havent marked all')
    }

}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
  
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;

  // console.log(surrounding[1].isMine)

  for (let i = 0; i < surrounding.length; i++) {
    const element = surrounding[i];

    if (element.isMine) {
      ++count;
      // console.log('count ' + count)
    }
    
    // return cell.isMine
  }
}

