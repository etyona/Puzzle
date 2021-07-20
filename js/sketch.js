//テーマカラー
// let themeColor.back =[83,125,194];
let color = {};

color.black = {
  back:0,
  button:85, 
  buttonText:255,
  text:240,
  block:40,
  blockText:255 
};

color.white = {
  back:255,
  button:230, 
  buttonText:0,
  text:0,
  block:250,
  blockText:20 
};

let themeColor = color.black;

//ボタン定義
const button = {};
button.hub = new sceneButton("menu");
button.reversePuzzleReady = new sceneButton("reversePuzzleReady");
button.reversePuzzlePlay = new sceneButton("reversePuzzlePlay");
button.slidePuzzleReady = new sceneButton("slidePuzzleReady");
button.slidePuzzlePlay = new sceneButton("slidePuzzlePlay");
button.numOfBlocks = new changeNumOfBlockButton();


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

  createCanvas(1024, 768);
  frameRate(60);
  picture.nemuku = loadImage("../pic/nemuku.jpg");
  changeThemeColor("white");
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

    case "reversePuzzleReady":
      reversePuzzleReady();
      break;
  
    case "reversePuzzlePlay":
      reversePuzzlePlay();
      break;

    case "slidePuzzleReady":
      slidePuzzleReady();
      break;

    case "slidePuzzlePlay":
      slidePuzzlePlay();
      break;

    case "resultReverse":
      result("reverse");
      break;

    case "resultSlide":
      result("slide");
      break;
  }
  console.log(mouseX,mouseY);
}

//リザルト画面
function result(type){ 
  imageMode(CENTER);
  image(picture.nemuku,512,400);

  stroke(0);
  strokeWeight(4);
  fill(255);
  textSize(70);
  text("CLEAR",512,120);

  strokeWeight(2);
  textSize(30);
  if(recordTime == outBestTime(type+"Puzzle")){
    text("TIME:"+recordTime+ "  BestRecord" ,512,600);
  } else {
    text("TIME:"+recordTime+"    BEST:"+outBestTime(type+"Puzzle"),512,600);
  }

  let bestTime = outBestTime(type+"Puzzle");

  button.hub.draw("Menu", 620, 660 );
  button[type+"PuzzleReady"].draw("Play Again",244,660);
}

//テーマカラー設定
function changeThemeColor(c){
  themeColor = color[c];
}

//マウスが四角の中にあるか判定
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