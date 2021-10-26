//パズル　ブロッククラス

class Block {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.size = 0;
        this.pressed = false;
        //2次元座標
        this.place = [0,0];
        //番号
        this.num;
    }

    create(a, b, s, i){
        this.x = a;
        this.y = b;
        this.size = s;
        //番号から2次元座標へ
        this.place[0] = i%numOfBlocks;
        this.place[1] = parseInt(i/numOfBlocks);
        this.num = i+1;
    }

    draw(){
        if(this.pressed) {
            this.clicked();
        }

        this.pressed = false;

        //複数のブロックを押さないよう少しずらした判定
        if(rectMouseXY(this.x-1, this.y-1, this.size-1, this.size-1)){
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
class ReverseBlock extends Block {
    constructor(){
        super();
        this.color = "white";
    }

    display(){
        strokeWeight(1);
        strokeCap(ROUND);


        if(this.color == "white"){
          fill(250);
          stroke (0);
        } else {
          fill(10);
          stroke (255);
        }

        //クリックで色を変える
        if(rectMouseXY(this.x, this.y, this.size, this.size) && mouseIsPressed){
            if(this.color == "white"){
                fill(200);
            } else {
                fill(60);
            }
        }

        rect(this.x,this.y,this.size,this.size);
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
    reverseS(x,y){
        block.reverse[this.place[0]+x + (this.place[1]+y)*numOfBlocks].reverse();
    }

    //クリックしたブロックを中心に周囲を反転
    clicked(){
        //離したときに作動
        if(!mouseIsPressed){
            //本体
            this.reverse();
            //左
            if(this.place[0] != 0) this.reverseS(-1,0);
            //上
            if(this.place[1] != 0) this.reverseS(0,-1);
            //右
            if(this.place[0] != numOfBlocks-1) this.reverseS(1,0);
            //下
            if(this.place[1] != numOfBlocks-1) this.reverseS(0,1);
            //左上
            if(this.place[0] != 0 && this.place[1] != 0) this.reverseS(-1,-1);
            //右上
            if(this.place[0] != numOfBlocks-1 && this.place[1] != 0) this.reverseS(1,-1);
            //左下
            if(this.place[0] != 0 && this.place[1] != numOfBlocks-1) this.reverseS(-1,1);     
            //右下
            if(this.place[0] != numOfBlocks-1 && this.place[1] != numOfBlocks-1) this.reverseS(1,1);     
        }
    }
}

//スライドパズルのブロック
class SlideBlock extends Block {
    constructor(){
        super();
    }

    display(){

        strokeWeight(1);
        strokeCap(ROUND); 
        stroke(themeColor.blockText); 
        
        if(rectMouseXY(this.x, this.y, this.size, this.size)){
            fill(themeColor.block-10);
        } else {
            fill(themeColor.block);
        }
        rect(this.x,this.y,this.size,this.size);

        textSize(this.size/3);
        fill(themeColor.blockText);
        strokeWeight(0);
        text(this.num, this.x+this.size/2, this.y+this.size/1.6);
    }

    clicked(){
        if(!solveSlidePuzzle) this.slide();
    }

    slide(){
        //ゴーストブロック座標があれば座標を入れ替えて移動
        //左
        if(this.place[0]-1 == ghostBlock[0] && this.place[1] == ghostBlock[1]){
            this.place[0]--;
            this.x -= this.size;
            ghostBlock[0]++;
            return;
        }
        
        //右
        if(this.place[0]+1 == ghostBlock[0] && this.place[1] == ghostBlock[1]){
            this.place[0]++;
            this.x += this.size;
            ghostBlock[0]--;
            return;
        }

        //上
        if(this.place[1]-1 == ghostBlock[1] && this.place[0] == ghostBlock[0]){
            this.place[1]--;
            this.y -= this.size;
            ghostBlock[1]++;
            return;
        }

        //下
        if(this.place[1]+1 == ghostBlock[1] && this.place[0] == ghostBlock[0]){
            this.place[1]++;
            this.y += this.size;
            ghostBlock[1]--;
            return;
        }
    
    }
}