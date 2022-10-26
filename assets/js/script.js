// added an event listener to get game button element and content

window.addEventListener('DOMContentLoaded', () =>{
    const playerDisplay = document.querySelector('.display-player');
    const cell = Array.from(document.querySelectorAll('.tile'));
 const resetButton = document.querySelector('#reset');
 const announcer=document.querySelector(".announcer");

 //

    resetButton.addEventListener('click', resetBoard);
});