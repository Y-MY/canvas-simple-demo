## 图形组合
Canvas 2D API的 CanvasRenderingContext2D.globalCompositeOperation  属性设置要在绘制新形状时应用的合成操作的类型，其中type是用于标识要使用的合成或混合模式操作的字符串。

在 Canvas Tutorial 中查看 [Compositing](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing) 章节。

```
globalCompositeOperation= type 属性
type 类型如下所示：
source-over 新图形覆盖在原有图形之上，这个是默认属性
source-in 只绘制原有图形与新图形覆盖的部分，原有图形与新图形的其它部分为透明
source-out  
source-atop 只绘制原有图形中被新图层所覆盖的部分与新图层的其它部分，原有图形为透明
destination-over
destination-in 
destination-out
destination-atop
lighter
copy
xor
multiply
screen
overlay
darken
lighten
color-dodge
color-burn
hard-light
soft-light
difference
exclusion
hue
saturation
color
luminosity
```