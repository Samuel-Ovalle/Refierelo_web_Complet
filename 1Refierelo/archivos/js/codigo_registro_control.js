const sexCheck = document.querySelectorAll(".sexCheck")
let checkStatus = 0

sexCheck.forEach((sexCheck) => {
    sexCheck.addEventListener('click', () => {
        if (checkStatus == 0) {
            sexCheck.classList.add("check")
            checkStatus = 1
        }else{
            sexCheck.classList.remove("check")
            checkStatus = 0
        }
    })
})

const autorizacion = document.querySelector(".autorizacion")
let autorizacionStatus = 0
autorizacion.addEventListener("click", ()=>{
    if (autorizacionStatus == 0) {
        autorizacion.classList.add("checkL")
        autorizacionStatus = 1
    }else{
        autorizacion.classList.remove("checkL")
        autorizacionStatus = 0
    }
})