function menu() {
    logo();

    button.reversePuzzleReady.draw("Reverse", 434,360);
}


//ロゴを表示
function logo() {
let y;

y = 7*sin(frameCount/25);

textAlign(CENTER);
textSize(60);
fill(0);
text("Acuty", 519, 190+y);
fill(255);
text("Acuty", 514, 190+y);
}