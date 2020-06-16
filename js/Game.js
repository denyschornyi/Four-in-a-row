class Game {
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }    


    createPlayers(){
        let players = [     ['Player 1', '#e15258', 1, true],
                            ['Player 2', '#e59a13', 2, false]];
        return players;
    }

    // Gets game ready to plya
    startGame(){}
}