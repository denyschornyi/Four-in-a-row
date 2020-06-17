class Game {
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }    

    get activePlayer(){
        return players.find(player => player.active);
    }
    
    createPlayers(){
        let players = [     new Player('Player 1', '#e15258', 1, true),
                            new Player('Player 2', '#e59a13', 2)];
        return players;
    }
    // Gets game ready to play
    startGame(){}

}