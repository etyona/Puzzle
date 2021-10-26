//メイン

let canvasPlace = document.getElementById('canvasP');

//テーマカラー
// let themeColor.back =[83,125,194];
let color = {};

//黒基調
color.black = {
  back:0,
  button:85, 
  buttonText:255,
  text:240,
  block:40,
  blockText:255 
};

//白基調
color.white = {
  back:255,
  button:85, 
  buttonText:255,
  text:0,
  block:250,
  blockText:20 
};

//デフォルトは白
let themeColor = color.white;

//ボタン定義
const button = {};
button.hub         = new sceneButton("menu");
button.reversePuzzle = new sceneButton("ReversePuzzle");
button.slidePuzzle = new sceneButton("SlidePuzzle");
button.ready       = new statusButton("Ready");
button.play        = new statusButton("Play");
button.numOfBlocks = new changeNumOfBlockButton();
button.changeColor = new changeColorButton();


//パズルのブロック数 一辺
let numOfBlocks = 3;
const numOfBlocksMax = 6;

//パズルブロック インスタンス
const block = {};

block.reverse = [];
for (let index = 0; index < numOfBlocksMax*numOfBlocksMax; index++) {
  block.reverse[index] = new ReverseBlock(); 
}

block.slide = [];
for (let index = 0; index < numOfBlocksMax*numOfBlocksMax; index++) {
  block.slide[index] = new SlideBlock(); 
}

//シーン変数
let scene = "menu";

//画像
let picture = {};

//セットアップ
function setup() {
  //キャンバスの位置を変更
 // const canvas = createCanvas(300, 300);
//  canvas.parent('canvas');

  let canvas = createCanvas(1024, 768);
  canvas.parent(canvasPlace);

  frameRate(60);
  
  //画像読み込み
  picture.nemuku = loadImage("../pic/nemuku.jpg");
  picture.neru = loadImage("../pic/neru.jpg");
  picture.bero = loadImage("../pic/bero.jpg");
  picture.nikukyu = loadImage("../pic/nikukyu.jpg");

}



//メインループ
function draw() {

  //背景を更新
  background(themeColor.back);

  //statusのシーンによって処理を切り替え
  switch (scene) {
    case "menu":
      menu();
      break;

    case "ReversePuzzle":
      reversePuzzle();
      break;
    
    case "SlidePuzzle":
      slidePuzzle();
      break;
  }
}

//リザルト画面
function result(type){ 

  //リザルト画像
  displayCat();

  //リザルトテキスト
  stroke(0);
  strokeWeight(4);
  fill(255);
  textSize(120);
  text("CLEAR",512,160);
  strokeWeight(2);
  textSize(50);
  if(recordTime == outBestTime(type+"Puzzle")){
    text("TIME:"+recordTime+ "  BestRecord" ,512,600);
  } else {
    text("TIME:"+recordTime+"     BEST:"+outBestTime(type+"Puzzle"),512,600);
  }

  let bestTime = outBestTime(type+"Puzzle");

  button.hub.draw("Menu", 620, 660 );
  button.ready.draw("Play Again",244,660);
}


let pic;
let picNum = 4;

function displayCat(){
  imageMode(CENTER);

  switch (pic) {
    case 1:
      image(picture.nemuku,512,400);
      break;
  
    case 2:
      image(picture.bero,512,400);
      break;

    case 3:
      image(picture.neru,512,400);
      break;
    
    case 4:
      image(picture.nikukyu,512,400);
      break;
  }

}

//テーマカラー設定
function changeThemeColor(c){
  themeColor = color[c];
}

//マウスが四角の内側にあるか判定
function rectMouseXY( x,  y,  sizeX,  sizeY){
  if(mouseX >= x && mouseX <= x+sizeX && mouseY <= y+sizeY && mouseY >= y ){
    return true;
  }   
  return false;
} 

//テキスト
function text( str,  x,  y,  size,  fill) {

  textSize(size);
  fill(fill);
  text(str,x,y);
}

function text(str, x, y, size) {
  textSize(size);
  text(str,x,y);
}

function keyPressed(){
  if(key == "w") changeThemeColor("white");
  if(key == "b") changeThemeColor("black");
}