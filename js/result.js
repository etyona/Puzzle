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