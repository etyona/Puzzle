//リバースパズル

let solveReversePuzzle = false;

//パズルブロックの配置　左上座標
const blockX = 250;
const blockY = 150;

//プレイ画面
function reversePuzzlePlay() {
    if(solveReversePuzzle) {
        solveReversePuzzle = false;
        reverseBlockRandom();
        console.log("reset");
    }

    button.hub.draw("HUB", 820, 660 );
    button.reversePuzzleReady.draw("Restart", 820, 560);

    setReverseBlock();
    drawReverseBlock();

    judgeReverseBlock();

    drawTime(470,90);
    drawBestTime(0,750,100);
}

//準備画面
function reversePuzzleReady(){
    solveReversePuzzle = true;
    reverseBlockBlack();

    //ボタン
    button.hub.draw("HUB", 820, 660 );
    button.reversePuzzlePlay.draw("Reverse", 820,560 );
    button.numOfBlocks.draw(numOfBlocks+"×"+numOfBlocks, 820, 460);

    setReverseBlock();
    drawReverseBlock();

    drawBestTime("reversePuzzle", 750,100);

    textAlign(CENTER);
    text("READY",475,100,35,255); 
    text("FILL ALL BLOCK",470,700); 

    setStartTime();
}

//ブロック数に合わせて配置を更新
function setReverseBlock(){
    let l=0;
    let size = parseInt(450/numOfBlocks);

    for(let i=0; i < numOfBlocks; i++){
        for (let j = 0; j < numOfBlocks; j++) {
            block.reverse[l].create(blockX+j*size ,blockY+i*size, size,l)
    
            l++;
        }
    }
}

//ブロックを描画
function drawReverseBlock(){
    for (let index = 0; index < numOfBlocks*numOfBlocks; index++) {
        block.reverse[index].draw();
        
    }
}

//解　判定
function judgeReverseBlock(){
    let count=0;
    for(let i=0; i<numOfBlocks*numOfBlocks; i++){
        if(block.reverse[i].color == "black") count++; 
    }

    if(count == numOfBlocks*numOfBlocks) {
        solveReversePuzzle = true;
        scene = "reversePuzzleReady";
        getBestTime("reversePuzzle");
    }
}

//ブロックを黒にする
function reverseBlockBlack(){
    for(let i=0; i<numOfBlocks*numOfBlocks; i++){
        block.reverse[i].black();
    }
}

//ブロックをランダムに反転
function reverseBlockRandom(){
    for(let i=0; i<100; i++){
        block.reverse[int(random(numOfBlocks*numOfBlocks-1))].clicked();
    }
}