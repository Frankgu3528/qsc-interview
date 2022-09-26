function plotTabular(){
    let q=document.querySelector("canvas");
    let w=q.getContext("2d");
    let gridSize=50;
    //console.log(q.offsetWidth);
    //console.log(q.offsetHeight);
    //console.log(w.canvas.width);
    //console.log(w.canvas.height);
    // w.fillStyle = 'green';
    // w.fillRect(0,0,400,400);
    let canvasWidth=w.canvas.width;
    let canvasHeight=w.canvas.height;
    let row=Math.floor(canvasWidth/gridSize);
    let col = Math.floor(canvasWidth / gridSize);
    for(let i=0;i<row;i++)
    {
        w.beginPath();
        w.moveTo(0,i*gridSize-0.5);
        w.lineTo(canvasWidth,i*gridSize-0.5);
        w.strokeStyle="#ccc";
        w.stroke();
    }
    for(let i=0;i<col;i++)
    {
        w.beginPath();
        w.moveTo(i*gridSize-0.5,0);
        w.lineTo(i*gridSize-0.5,canvasHeight);
        w.strokeStyle="#ccc";
        w.stroke();
    }
}
        