//スライドパズル

let solveSlidePuzzle = false;

//背景枠の一辺
let backLength = 450;

//ゴーストブロック座標
let ghostBlock = [0,0];

//スライドパズル準備
function slidePuzzleReady() {
    solveSlidePuzzle = true;

    //背景
    slidePuzzleBack();

    //ブロック配置
    setSlideBlock();
    drawSlideBlock();

    //ボタン
    button.hub.draw("Menu", 820, 660 );
    button.slidePuzzlePlay.draw("Slide", 820,560 );
    button.numOfBlocks.draw(numOfBlocks+"×"+numOfBlocks, 820, 460);

    //ベストタイムを表示
    drawBestTime("slidePuzzle", 750,100);

    text("READY",475,100, 35 ,255); 
    text("SORT ALL BLOCK",470,700); 
}

//プレイ画面
function slidePuzzlePlay(){
    //ゲーム開始時にブロックをリセット
    if(solveSlidePuzzle) {
        solveSlidePuzzle = false;
        slideBlockRandom();
    }

    slidePuzzleBack();
    drawSlideBlock();

    //ボタン
    button.hub.draw("Menu", 820, 660 );
    button.slidePuzzleReady.draw("Restart",820,560);

    //ベストタイムを表示
    drawBestTime("slidePuzzle", 750,100);

}

//背景
function slidePuzzleBack(){
    strokeWeight(1);
    strokeCap(ROUND);
    stroke(themeColor.blockText);
    fill(themeColor.back);
    rect(250,150,backLength,backLength);
}

//ブロック数に合わせて配置を更新
//ゴーストブロック座標を取得
function setSlideBlock(){
    let l=0;
    let size = parseInt(450/numOfBlocks);
    backLength = size*numOfBlocks;

    for(let i=0; i < numOfBlocks; i++){
        for (let j = 0; j < numOfBlocks; j++) {
            block.slide[l].create(blockX+j*size ,blockY+i*size, size,l)
            l++;
        }
    }
    ghostBlock = [numOfBlocks-1, numOfBlocks-1];
}

//ブロックを描画(一つ抜く)
function drawSlideBlock(){
    for (let index = 0; index < numOfBlocks*numOfBlocks-1; index++) {
        block.slide[index].draw();       
    }
}

//ブロックをランダムにスライド
function slideBlockRandom(){
    for(let i=0; i<10000; i++){
        block.slide[int(random(numOfBlocks*numOfBlocks-1))].clicked();
    }
}