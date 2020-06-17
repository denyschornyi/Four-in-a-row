class Player {
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.token = this.createTokens(21);
    }

    createTokens(num){
        const tokens = [];
        for(let i = 0; i < num; i++){
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

    get unusedToken(){
        return this.token.filter(token => !token.dropped);
    }
}

// let Denys = new Player('Denys', '12321', 'blue');
// console.log(Denys.token);