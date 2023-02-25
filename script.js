let  main = document.getElementsByClassName("main")
console.log(main)
let aa = [0,0,0,0];
for (let index = 0; index < main.length; index++) {
    const element = main[index];
    element.style.background = "blue"
    element.addEventListener("click",function (e) {
        console.log(aa)
        // aa[index]++
        if (aa[index]==0) {
            aa[index] = 1
            element.style.background = "green"
        } else {
            aa[index] = 0
            element.style.background = "blue"
        }
    })
}
