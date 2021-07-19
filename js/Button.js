class Button {
  
  constructor(){
    this.x = 0; 
    this.y = 0;
    this.pressed = false;
    this.p = false;
    this.args ;
    // this.color = [252,111,3];
    this.color = themeColor.button;
    this.textSize = 30;
    this.sizeX = 160;
    this.sizeY = 60;
  }

  //クリックされた時の動作
  clickedButton(){
  }
  
  //本体
  draw(str, a, b){
    this.args = str;
    this.x = a;
    this.y = b;
        
    if(!mouseIsPressed && this.pressed && rectMouseXY(this.x,this.y,this.sizeX,this.sizeY)){
      this.clickedButton();
    }
    
    if(!mouseIsPressed){
      this.pressed = false;
    }
    
    strokeWeight(8);
    strokeCap(ROUND);
    fill(themeColor.button ,250);
    stroke(themeColor.button);
    
    //ボタンの上でクリックし離した場合のみ動作
    if(rectMouseXY(this.x,this.y,this.sizeX,this.sizeY)){
      noStroke();
      if(mouseIsPressed && this.p){
        this.pressed = true;
      }
      if(!mouseIsPressed){
        this.p = true;
      }      
    } else {  
      this.p = false;
    }
     
    this.buttonText();
    strokeWeight(0);
  }

  buttonText() {
    rect(this.x, this.y , this.sizeX, this.sizeY);
    textAlign(CENTER);
    textSize(this.textSize);
    fill(themeColor.buttonText);
    noStroke();
    text(this.args, this.x+this.sizeX/2, this.y+this.sizeY/2+10);
  }
  
  
}

class sceneButton extends Button {
  constructor(change){
    super();
    this.changeScene = change;
  }

  clickedButton(){
    scene = this.changeScene;
  }
}

class changeNumOfBlockButton extends Button {
  clickedButton(){
    if(numOfBlocks == 6){
      numOfBlocks = 2;
    }
    numOfBlocks++;
  }
  
}
