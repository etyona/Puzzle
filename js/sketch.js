//ボタン定義
const button = {};
button.hub = new sceneButton("menu");
button.reversePuzzleReady = new sceneButton("reversePuzzleReady");
button.reversePuzzlePlay = new sceneButton("reversePuzzlePlay");
button.slidePuzzle = new sceneButton("reversePuzzle");
button.numOfBlocks = new changeNumOfBlockButton();


//パズルのブロック数 一辺
let numOfBlocks = 3;
const numOfBlocksMax = 6;

//パズルブロック インスタンス
const block = {};
block.reverse = [];
for (let index = 0; index < numOfBlocksMax*numOfBlocksMax; index++) {
  block.reverse[index] = new reverseBlock(); 
}



//シーン変数
let scene = "menu";

//背景色
let bg =[83,125,194];




//セットアップ
function setup() {
  //キャンバスの位置を変更
 // const canvas = createCanvas(300, 300);
//  canvas.parent('canvas');

  createCanvas(1024, 768);
  frameRate(60);
  background(bg);
  
}

  

//メインループ
function draw() {
  //背景を更新
  background(bg);

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


    case "slidePuzzle":

      break;
  }
  
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