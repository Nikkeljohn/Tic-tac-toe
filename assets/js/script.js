// added an event listener to get game button element and content

window.addEventListener('DOMContentLoaded', () =>{
    const announcer = document.querySelector('.announcer');
    const playerDisplay = document.querySelector('.display-player');
    const tile = Array.from(document.querySelectorAll('.tile'));
    const resetButton = document.querySelector('#reset');

    resetButton.addEventListener('click', resetBoard);
});