class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token${index} - ${owner.id}`;
        this.dropped = false;
    }

    drawHTMLToken(){
        const token = document.createElement('DIV');
        document.getElementById('game-board-underlay').append(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color; 
    }
}