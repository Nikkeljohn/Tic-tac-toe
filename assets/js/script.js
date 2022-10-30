// added an event listener to get game button element and content

(window.addEventListener('DOMContentLoaded', () =>{
    const playerDisplay = document.querySelector('.display-player');
    const tiles = Array.from(document.querySelectorAll('.cell'));
 const resetButton = document.querySelector('#reset');
 const announcer = document.querySelector('.announcer');
let options =["","","","","","","","","",]
 let player1_Won = "player1_won";
 let player2_Won = "player2_Won";
 let Tie = "Tie";

//track current player

let currentPlayer = "1";

//boolean is used to track if game is running

let gameRunning= true;

 //giving winning condition
  //here we declare 9 cells or tiles 0 to 9 for winning condition
/* index with in board [0,1,2],[3,4,5],[6,7,8]*/

 const winConditions =[
   

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [0,3,6],
    [0,4,8],
    [2,4,6]

 ];

// adding the  function for game 

function InitiateGmae(){

}
function CilckTiles(index, cell){

}
function updateTile(){

}

function changePlayer(){


}
function restartGame()
{// event lister for every tile by for each method//

    /*tiles.forEach(cell, index) => {
    cell.addEventListener("click", () => userAction(cell, index));

resetButton.addEventListener("click", resetBoard);