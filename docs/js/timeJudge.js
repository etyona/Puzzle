//タイムを判定

let startTime;
let currentTime;

let bestTime = [
    [1000,1000,1000,1000],
    [1000,1000,1000,1000]
];

function setStartTime(){
    startTime = millis();
}

function outTime(){
    currentTime = (millis() - startTime)/1000;
    return currentTime.toFixed(2);
}

function getBestTime(gameMode){
    let i = 0;
    if(gameMode == "reversePuzzle") i = 0;
    if(gameMode == "slidePuzzle") i = 1;

    if(bestTime[i][numOfBlocks-3] > currentTime){
        bestTime[i][numOfBlocks-3] = currentTime;
    }
}

function drawTime(x,y){
    fill(255);
    textAlign(CENTER);
    text("TIME:" + outTime() +"s", x, y,35,255);
}

function drawBestTime(gameMode, x, y){
    if(gameMode == "reversePuzzle") i = 0;
    if(gameMode == "slidePuzzle") i = 1;
    
    fill(255);
    textAlign(LEFT);
    if(bestTime[i][numOfBlocks-3] == 1000){
      text("BEST:NotSolve", x, y,30,255); 
    } else{
      text("BEST:" + bestTime[i][numOfBlocks-3].toFixed(2)+"s", x, y,30,255); 
    } 

    textAlign(CENTER);
}