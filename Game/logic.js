let pen = document.getElementById("Game").getContext("2d")
let counter = 10
drawBackground()
let timer = setInterval(drawFrame, 1000) //clearInterval (id)

function drawFrame(){
    drawBackground()
    showString(counter+ '')
    counter = counter - 1 //--counter
    if(counter === -1) {
        clearInterval(timer)
    }
}

function drawBackground (){
    pen.fillStyle = "#aaaaaa"
    pen.fillRect(0, 0, 400, 400)
}

function showString(String){
    pen.font = "80px Arial" 
    pen.textBaseline = "top"
    pen.testAlign = "center"
    pen.fillStyle = "#ff0000"
    pen.fillText(String, 200, 180)
}




