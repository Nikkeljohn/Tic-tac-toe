// added an event listener to get game button element and content

//(window.addEventListener('DOMContentLoaded', () =>{
    const statusText= document.querySelector('#statusText');
    const tiles = document.querySelectorAll(".tile");
 const resetButton = document.querySelector('#reset');
let board =["","","","","","","","","",]

//track current player

let currentPlayer = "X";

//boolean is used to track if game is running

let gameRunning= false;

 //giving winning condition
  //here we declare 9 cells or tiles 0 to 9 for winning condition

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
// adding the different function for game 

initializeGame();

function initializeGame(){
    // used for each method and add event listner

    tiles.forEach(tile=>tile.addEventListener("cilck",tileClicked));
    resetButton.addEventListener("click",resetGame);
    statusText.textContent=`${currentPlayer}'s Turn`;
    gameRunning = true;

}
//when we click into our what will it do

function tileClicked(){

    // this reffers to what ever tile we click on

    const tileIndex = this.getAttribute("tileIndex");

    // now have check if our tileIndexnumber within our board are not empty
    if(board[tileIndex] != "" || !gameRunning){
        return;
    }

    updateTile(this, tileIndex);
    checkWinner();


}

function updatetiles(tile,index){
    board[index] = currentPlayer;
    tile.textContent = currentPlayer;


}
function changePlayer(){ 
    currentPlayer = (currentPlayer == "X") ? "O":"X";
    statusText.textContent = `${currentPlayer}'s Trun`



}
function checkWinner(){
   
}

function resetGame(){

}
