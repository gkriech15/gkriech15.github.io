let pen = document.getElementById("b").getContext("2d");
let pen2 = document.getElementById("c").getContext("2d");

drawBackground();
drawBackground2();
// how to repeat the while-body N times
let N = 13;
let i = 0;
while (i < N) {
    drawSquare(10+i*30, 10+i*30);
    ++i; // i = i + 1; i += 1, i++
}
let j = 0;
while (j < N) {
    drawSquare2 (10+j*30, 10+j*30)
    drawSquare2(10 + j * 30, 10 + (N - 1 - j) * 30);
    ++j; // i = i + 1; i += 1, i++
}
function drawBackground () {
  pen.fillStyle = "#aaaaaa";
  pen.fillRect(0, 0, 400, 400);  
} 

function drawBackground2 () {
  pen2.fillStyle = "#aaaaaa";
  pen2.fillRect(0, 0, 400, 400);  
} 

function drawSquare (x, y) {
    pen.fillStyle = "#0000ffff"; // variable for the color
    pen.fillRect(x, y, 20, 20);

}

function drawSquare2 (x, y) {
    pen2.fillStyle = "#0000ffff"; // variable for the color
    pen2.fillRect(x, y, 20, 20);

}

