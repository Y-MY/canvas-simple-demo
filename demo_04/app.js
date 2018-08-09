var CANVAS_WIDTH = 500, CANVAS_HEIGHT = 500;
var mycanvas, context;

window.onload = function () {
    createCanvas();
    drawText();
}
function createCanvas() {
    document.body.innerHTML = "<canvas id=\"mycanvas\" height=\""+CANVAS_HEIGHT+"\" width=\""+CANVAS_WIDTH+"\">哈哈哈</canvas>"
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");
}

function drawText() {
    context.font = "48px serif";
    context.direction = "ltr";
    context.strokeText("Hello world", 0, 100);
}