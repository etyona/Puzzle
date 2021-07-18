//パズル　ブロッククラス

class Block {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.size = 0;
        this.pressed = false;
        this.place = [0,0];
    }

    create(a, b, s, i){
        this.x = a;
        this.y = b;
        this.size = s;
        this.place[0] = i%numOfBlocks;
        this.place[1] = parseInt(i/numOfBlocks);
    }

    draw(){
        if(this.pressed && !mouseIsPressed) {
            this.clicked();
        }

        this.pressed = false;

        if(rectMouseXY(this.x, this.y, this.size, this.size)){
            if(mouseIsPressed){
                this.pressed = true;
            }
        }

        this.display();
    }

    display(){}

    clicked(){}

}

//リバースパズルのブロック
class reverseBlock extends Block {
    constructor(){
        super();
        this.color = "white";
    }

    display(){
        strokeWeight(1);
        strokeCap(ROUND);
        stroke (100);

        if(this.color == "white"){
          fill(220);
        } else {
          fill(30);
        }

        rect(this.x,this.y,this.size,this.size);

        if(rectMouseXY(this.x, this.y, this.size, this.size)){
            if(mouseIsPressed){
                this.pressed = true;
            }
            if(this.color == "white"){
              fill(180,100);
            } else {
              fill(255,100);
            }
            rect(this.x+1,this.y+1,this.size-2,this.size-2);
        }
    }

    //反転
    reverse(){
        if(!solveReversePuzzle){
            if (this.color == "white") {
                this.color = "black";
            } else {
                this.color = "white"
            }
        }
    }

    //白にする
    white(){
        this.color = "white";
    }

    //黒にする
    black(){
        this.color = "black";
    }

    getColor(){
        return this.color;
    }

    //指定したブロックを反転
    revrse(x,y){
        block.reverse[this.place[0]+x + (this.place[1]+y)*numOfBlocks].reverse();
    }

    //クリックしたブロックを中心に周囲を反転
    clicked(){
        this.reverse();

        //左
        if(this.place[0] != 0) this.revrse(-1,0);
        //上
        if(this.place[1] != 0) this.revrse(0,-1);
        //右
        if(this.place[0] != numOfBlocks-1) this.revrse(1,0);
        //下
        if(this.place[1] != numOfBlocks-1) this.revrse(0,1);
        //左上
        if(this.place[0] != 0 && this.place[1] != 0) this.revrse(-1,-1);
        //右上
        if(this.place[0] != numOfBlocks-1 && this.place[1] != 0) this.revrse(1,-1);
        //左下
        if(this.place[0] != 0 && this.place[1] != numOfBlocks-1) this.revrse(-1,1);     
        //右下
        if(this.place[0] != numOfBlocks-1 && this.place[1] != numOfBlocks-1) this.revrse(1,1);     
        
    }
}