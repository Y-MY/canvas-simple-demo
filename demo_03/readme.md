## 绘制图片
```
var img = new Image();
img.onload = function (){
    context.drawImage(img,0,0);
}
img.src="1.jpg";
```