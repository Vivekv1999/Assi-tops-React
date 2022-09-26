

// 1.===>  onChange
const Name = () => {
    document.getElementById("namela").style.color = "red"
    document.getElementById("namela").style.backgroundColor = "green"
}

//2.onmouseover
const hover = () => {
    document.getElementById("hover").style.backgroundColor = ""
}

// 3.click event 
document.getElementById("btnnn").addEventListener("click", function (e) {
    location.href = '//google.com'
})


// 4.mouse move 
document.getElementById('container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetY})`
})