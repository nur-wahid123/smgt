let  mai = document.getElementsByClassName("mai")
console.log(mai)
    mai[0].addEventListener("mousemove",function (e) {
        document.getElementsByClassName('main')[0].style.left = (e.clientX-100)+"px"
        document.getElementsByClassName('main')[0].style.top = (e.clientY-100)+"px"
    })
