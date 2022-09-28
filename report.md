https://blog.csdn.net/qq_37805832/article/details/114903520
```
// function plotTabular(){
//     let q=document.querySelector("canvas");
//     let w=q.getContext("2d");
//     let row = 5;
//     let col = 4;
//     let canvasWidth=w.canvas.width;
//     let canvasHeight=w.canvas.height;
//     let gridSize = Math.floor(canvasWidth/col);
//     for(let i=0;i<row;i++)
//     {
//         w.beginPath();
//         w.moveTo(0,i*gridSize-0.5);
//         w.lineTo(canvasWidth,i*gridSize-0.5);
//         w.strokeStyle="red";
//         w.stroke();
//     }
//     for(let i=0;i<col;i++)
//     {
//         w.beginPath();
//         w.moveTo(i*gridSize-0.5,0);
//         w.lineTo(i*gridSize-0.5,canvasHeight);
//         w.strokeStyle="red";
//         w.stroke();
//     }
// }
// plotTabular();
```
```
// let x = 0;
// let r =  Math.floor(Math.random()* 4);
// function plotBox()
// {   
    
//     let c=document.getElementById('canvas');
//     //获取绘画环境
//     let cv=c.getContext('2d');
//     cv.clearRect(r*50,x-50,49,49);

//     //指定填充颜色
//     cv.fillStyle= "red";
    
//     //绘制一个矩形cv.fillRect(x,y,width,height)
//     cv.fillRect(r*50,x,50,50);
//     x = x + 50;
//     // 边界控制
//     if (x>canvas.height-50)
//         x = canvas.height-50;
// }
```
