class Shape{
    constructor(block,color){
        this.blocks = block;
        this.color = color;

        this.index = 0;
        this.mainBlock = this.blocks[this.index];

        this.x = 4;
        this.y = -2;
    }
    
    fill(color){
        for(let r = 0;r <this.mainBlock.length; r++){
            for(let c=0; c<this.mainBlock[r].length; c++){
                if(this.mainBlock[r][c]){
                    drawBlock(this.x+c,this.y+r,color);
                }
            }
        }
    }
    draw(){
        this.fill(this.color);
    }
    unDraw(){
        this.fill(COLOR);
    }
    createNew(){
        this.lock();
        piece = shapeNext;
        getShape();
        drawShapeRand();
    }

    moveDown(){
        moveSound();
        if(!this.collision(0,1,this.mainBlock)){
            this.unDraw();
            this.y++;
            this.draw();
        }else{
           this.createNew();
        }
        
    }
    moveLeft(){
        moveSound();
        if(!this.collision(-1,0,this.mainBlock)){
            this.unDraw();
            this.x--;
            this.draw();
        }
    }
    moveRight(){
        moveSound();
        if(!this.collision(1,0,this.mainBlock)){
            this.unDraw();
            this.x++;
            this.draw();
        }
    }
    setScore(){
        for(let r = 0;r<ROW;r++){
            let isFull = true;
            for(let c = 0;c<COL;c++){
                isFull = isFull && (board[r][c] != COLOR);
            }
            if(isFull){
                removeSound();
                for(let y = r;y>1 && this.checkLine(r);y--){
                    for(let c = 0; c<COL;c++){
                        board[y][c] = board[y-1][c];
                    }
                }
                for(let c =0;c<COL;c++){
                    board[0][c] = COLOR;
                }
                SCORE += 10;
            }
        }
        drawBoard();
        document.querySelector('#score').innerText = SCORE;
    }

    checkLine(r){
        for(let c = 0;c<COL;c++){
            if(board[r][c] != COLOR){
                return true;
            }
        }
        return false;
    }

    lock(){
        for(let r = 0;r<this.mainBlock.length;r++){
            for(let c = 0;c<this.mainBlock[r].length;c++){
                if(!this.mainBlock[r][c]){
                    continue;
                }
                if( this.y+r < 0){
                    break;
                }
                board[this.y+r][this.x+c] = this.color;
            }
        }
        if(this.checkLine(0)){
            endGameSound();
            alert('Game Over');
            gameOver = true;
        }
        
        this.setScore();
        if(ETH && SCORE - oldScore >= 100 && LEVEL < 6){
            LEVEL++;
            setDelay();
            oldScore = SCORE;
            clearInterval(interval);
            run();
        }
    }
    rotate(){
        rotateSound();
        let nextPattern = this.blocks[(this.index+1) % this.blocks.length];
        if(!this.collision(0,0,nextPattern)){
            this.unDraw();
            this.index = (this.index+1) % this.blocks.length;
            this.mainBlock = this.blocks[this.index];
            this.draw();
        }
    }
    collision(x,y,shape){
        for(let r = 0; r<shape.length;r++){
            for(let c = 0;c<shape[r].length;c++){
                if(!shape[r][c]){
                    continue;
                }
                let newX = this.x + c + x;
                let newY = this.y + r + y;

                if(newX < 0 || newX >= COL || newY >= ROW){
                    return true;
                }

                if(newY < 0 ){
                    continue
                }

                if(board[newY][newX] != COLOR){
                    return true;
                }
            }
        }
        return false;
    }
    isEmpty(r,c){
        if(r < 0){
            return true;
        }
        return r < ROW && board[r][c] == COLOR;
        
    }
    checkDrop(r,c){
        let drop = 0;
        while (this.isEmpty(r + drop + 1, c)) {
            drop++;
        }
        return drop;
    }
    dropBlock(){
        dropSound();
        let drop = ROW;
        for(let r = 0; r<this.mainBlock.length; r++){
            for(let c =0; c<this.mainBlock[r].length; c++){
                if(this.mainBlock[r][c]){
                    let dropX = c + this.x;
                    let dropY = r + this.y;
                    drop = Math.min(drop, this.checkDrop(dropY, dropX));
                }
            }
        }
        this.y += drop;
        this.createNew();
    }
}