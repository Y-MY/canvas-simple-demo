var mycanvas, context;

window.onload = function () {
    createCanvas();
    drawRect();
}
function createCanvas() {
    document.body.innerHTML = "<canvas id=\"mycanvas\" height=\"200px\" width=\"200px\">哈哈哈</canvas>"
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");
}

function drawRect() {
    context.fillStyle = "#ff0000";
    //context.rotate(45);        //旋转
    //context.translate(50,50);  //移动
    context.scale(2, 0.5);  //缩放
    context.fillRect(0, 0, 200, 200)
}