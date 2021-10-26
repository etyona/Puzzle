function menu() {
    stat = "Ready";
    logo();

    button.reversePuzzle.draw("Reverse", 434,360);
    button.slidePuzzle.draw("Slide", 434, 460);

    button.changeColor.draw(" ",20,20);
}


//ロゴを表示
function logo() {
let y;

y = 7*sin(frameCount/25);

textAlign(CENTER);
textSize(60);
fill(themeColor.text);
text("Puzzle", 514, 190+y);
}