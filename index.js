
let w = 260;
let h = 400;
let score = 0;
var begin;
//获取绘画环境
let c=document.getElementById('canvas');
let canvas=c.getContext('2d');
// function go(){
//     begin = true;
//     // running = setInterval("goGame();", 10);
// }

function Rect(y, arr) {
    //每一个rect表示一行
    //y表示这一行的高度
    this.y = y;
    //arr是一个数组，用于描述，四个小矩形，每一个的颜色
    //颜色：0表示白，2表示黑，1表示红，3表示灰，大于3也是灰
    this.arr = arr;
}

// 用二维矩阵存储格子的情况
var a = new Array();
for (var i=0;i<6;i++)
{
    var arr = new Array();
    for (var j=0;j<4;j++){
        arr[j] = 0;
    }
    var n = Math.floor(Math.random() * 4);
    arr[n] = 1; // 为1代表要染色的格子
    a[i] = new Rect(100*i-200,arr);
}

function drawGame() {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].arr.length; j++) {
            //颜色是什么？
            if (a[i].arr[j]==0)
                canvas.fillStyle = "white";
            if (a[i].arr[j]==1)
                canvas.fillStyle = "black";
            if (a[i].arr[j]==2) // 点错了
                canvas.fillStyle = "red";
            if (a[i].arr[j]==3)
                canvas.fillStyle = "green";
            canvas.fillRect(j * (w / 4), a[i].y, (w / 4), (h / 4));
            //描边
            canvas.strokeStyle = "#666666";
            canvas.strokeRect(j * (w / 4), a[i].y, (w / 4), (h / 4));
        }
    }
    canvas.strokeStyle = "#000000";
    canvas.strokeRect(0, 0, w, h);
}

//能动的方法
function goGame() {
    drawGame();
    for (var i = 0; i < a.length; i++) {
        a[i].y++;
        if (a[i].y > h) {
            // for (var j = 0; j < a[i].arr.length; j++) {
            // //     if (a[i].arr[j] == 2) {
            // //         //gameover
            // //         // isrunning = false;
            // //         clearInterval(running);
            // // //         a[i].arr[j] = 1;
            // // //         //回退
            // // //         // backing = setInterval("goBack();", 10);
            // //         // return;
            // //     }
            // }

            //出去了，就再利用
            for (var j = 0; j < a[i].arr.length; j++) {
                a[i].arr[j] = 0;
            }
            var n = Math.floor(Math.random() * 4);
            a[i].arr[n] = 1;
            //放到最上面去
            a[i].y -= h / 4 * 6;
        }
    }
}

// for (let k = 0;k<4;k++)
//     {
//         if (a[a.length].arr[k] == 1)
//         {
//             break;  
//         }
//     }
window.onkeydown = function(e){ //event可以简写成 e

    // 此时 k 表示第k个轨道需要被点击
    if (e.key == "g"){  // 按g键开始游戏
        running = setInterval("goGame();", 10);
    }
    if (e.key == "h"){  // 按h键暂停游戏
        clearInterval(running);
    }
    var m = -1;
    if (e.key == "s")
            m = 0;
    if (e.key == "d") // d
        m = 1;
    if (e.key == "j") // j
        m = 2;
    if (e.key == "k") // k
        m = 3;
    // for (var i = 0; i < a.length; i++) {
    a[5].arr[m] +=2;
    if (a[5].arr[m] == 3)
    {
        score++;
        div.innerHTML = "得分：" + score;
    }
    else if (a[5].arr[m] == 2){
        // drawGame();
        clearInterval(running);
        alert("点错啦 \n 按g重新开始~");
    }
    // if (m = k)
    //     score++;
    // else
    //     clearInterval(running);
    // if (m!=-1)
    // alert(m);
}
