//メイン

//指定したタグにキャンバスを配置 
let canvasPlace = document.getElementById('canvasP');

//テーマカラー
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

//ボタン　インスタンス生成
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

//パズルブロック インスタンス生成
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

//画像変数
let picture = {};

//セットアップ
function setup() {
  //html出力時のキャンバスの位置を変更
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

  //sceneの値によって処理を切り替え
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

