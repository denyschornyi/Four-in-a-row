class Game {
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }    

    get activePlayer(){
        return this.players.find(player => player.active);
    }
    
    createPlayers(){
        const players = [new Player('Player 1', 1, '#e15258', true),
                         new Player('Player 2', 2, '#e59a13')];
        return players;
    }
    // Gets game ready to play
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    handleKeydown(event){
        if(this.ready){
            if(event.key === 'ArrowLeft'){
                this.activePlayer.activeToken.moveLeft();
            }
            if(event.key === 'ArrowRight'){
                this.activePlayer.activeToken.moveRight(this.board.columns);
            }
            if(event.key === 'ArrowDown'){
                this.activePlayer.activeToken.drop(this.board);   
                this.playToken();
            }
        } 
    }

    playToken(){
        let spaces = this.board.spaces;
        let activeToken = this.activePlayer.activeToken;
        let taregtColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;

        for(let space of taregtColumn){
            if(space.token === null){
                targetSpace = space;
            }
        }

        if(targetSpace !== null){
            game.ready = false;
            activeToken.drop(targetSpace);
        }
    }
}