// added an event listener to get game button element and content

window.addEventListener('DOMContentLoaded', () =>{
    const playerDisplay = document.querySelector('.display-player');
    const tiles = Array.from(document.querySelectorAll('.tile'));
 const resetButton = document.querySelector('#reset');
let board =["","","","","","","","","",]

//track current player

let currentPlayer="1";

//boolean is used to track if game is running

let gameRunning= false;

 //giving winning condition
 const winConditions =[
    //here we declare 9 cells or tiles 0 to 9 for winning condition

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [0,3,6],
    [0,4,8],
    [2,4,6]

 ];
// adding the different function for game 

initializeGame();

function initializeGame(){
    // used for each method and add event listner

    tiles.forEach(tiles=>tiles.addEventListener("cilck","tilesClicked"));
    resetButton.addEventListener("click","resetGame");
    playerDisplay.textContent=`${currentPlayer}'s Turn`;

}
function tilesClicked(){

}
function updatetiles(tiles,index){

}
function changePlayer(){

}
function resetGame(){

}
});