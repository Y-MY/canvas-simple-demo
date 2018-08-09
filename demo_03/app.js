var CANVAS_WIDTH = 500, CANVAS_HEIGHT = 500;
var mycanvas, context;

window.onload = function () {
    createCanvas();
    drawImage();
}
function createCanvas() {
    document.body.innerHTML = "<canvas id=\"mycanvas\" height=\""+CANVAS_HEIGHT+"\" width=\""+CANVAS_WIDTH+"\">哈哈哈</canvas>"
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");
}

function drawImage() {
   var img = new Image();
   img.onload = function (){
       context.drawImage(img,0,0);
   }
   img.src="1.jpg";
}