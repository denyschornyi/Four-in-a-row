let game = new Game();
let beginGame = document.querySelector('#begin-game');

beginGame.addEventListener('click', () => {
    game.startGame();
    beginGame.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

document.addEventListener('keydown', game.handleKeydown);