class Board {
    constructor() {
        this.row = 7;
        this.columns = 6;
        this.spaces = this.createSpaces();
    }
    
    createSpaces(){
        const spaces = [];

        for(let x = 0; x < this.columns; x++){
            const column = [];

            for(let y = 0; y < this.row; y++){
                let space = new Space(x, y);
                column.push(space);
            }

            spaces.push(column);
        }
        return spaces;
    }
}

