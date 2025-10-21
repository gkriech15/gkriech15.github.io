document.getElementById("btn").addEventListener("click", onclick)

function onclick (e) {//callback function
    let p = document.getElementById("p").valueAsNumber
    let n = 12*document.getElementById("year").valueAsNumber
    let r = document.getElementById("ARate").valueAsNumber /100 / 12
    let A = p * r * (1+r)**n / ((1+r)**n-1)

    let result = "The monthly payment is $" + A.toFixed (2) +
            "<br>The total payment is $" + (A*n).toFixed(2) +
            "<br>The total interest is $" + (A*n - p).toFixed(2)

    document.getElementById("result").innerHTML = result;
}

