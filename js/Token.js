class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token${index} - ${owner.id}`;
        this.dropped = false;
    }

    drawHTMLToken(){
        let div = document.createElement('DIV');
        document.getElementById('game-board-underlay').append(div);
    }
    get htmlToken(){}
}