var canvas, stage,text,count=0;

window.onload = function () {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    text = new createjs.Text("Hello World", "20px Arial", "#ff7700");
    stage.addChild(text);
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener('tick',handleTick);
}

function handleTick(event){
    count++;
    text.text="Hello World"+count+"!";
    stage.update();
}