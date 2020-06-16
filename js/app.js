let game = new Game();

let beginGame = document.querySelector('#begin-game');

beginGame.addEventListener('click', startGame);
function startGame(){
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
}