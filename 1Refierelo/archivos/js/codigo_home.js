const barsMenu = document.querySelector(".barsMenu")
const nav = document.querySelector(".nav")
const link = document.querySelectorAll(".link")
const li = document.querySelectorAll(".li")
let menuStatus = true

detectorPag("pagInicio", "inicio")
detectorPag("pagRecibidos", "recibidos")
detectorPag("pagAsesores", "Asesores")
detectorPag("pagTicket", "ticket")
detectorPag("pagSugerencias", "Sugerencias")

barsMenu.addEventListener("click", (e)=>{
    if (menuStatus) {
        menuStatus = false
    }else if (!menuStatus) {
        menuStatus = true
    }

    if (menuStatus) {
        link.forEach((a)=> {
            a.removeAttribute("hidden","true")
        });
        nav.classList.remove("navSmile")
        nav.classList.add("navLong")
    }else if (!menuStatus) {
        link.forEach((a)=> {
            a.setAttribute("hidden","true")
        });
        nav.classList.remove("navLong")
        nav.classList.add("navSmile")
    }
})

function detectorPag(Tipe,classElement){
    const pagTipe = document.querySelector(`.${Tipe}`)
    if (pagTipe) {
        const element = document.querySelector(`.${classElement}`)
        element.style.border = "2px solid #00DFEE";
        element.style.boxSizing = "border-box";
    }
}


const main = document.querySelector("main")
const header = document.querySelector("header")
const lista = document.querySelector(".lista")

let navEstado = 0

barsMenu.addEventListener("mouseup", ()=>{
    let navWidth = nav.offsetWidth
    if (navEstado === 0) {
        main.style.right = Math.floor(navWidth / 2) + "px";
        main.style.width = 94.5 + "vw"
        navEstado = navEstado + 1
    }
    else if (navEstado === 1) {
        main.style.right = 0 + "px";
        main.style.width = 89.5 + "vw"
        navEstado = navEstado - 1
    }
})

