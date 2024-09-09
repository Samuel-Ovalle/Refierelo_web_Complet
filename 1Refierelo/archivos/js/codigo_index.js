const flechaIzquierda = document.querySelector(".flechaIzquierda")
const flechaDerecha = document.querySelector(".flechaDerecha")
const infoDiv = document.querySelectorAll(".info")

let width = window.innerWidth;
if (width <= 550) {
    flechaIzquierda.removeAttribute("hidden");
    flechaDerecha.removeAttribute("hidden");
}

let infoMos = 1

flechaDerecha.addEventListener("click", ()=>{
    infoMos = infoMos + 1
    if (infoMos > 3) infoMos = 1

    if (infoMos == 1) {
        infoDiv[4].style.display = "none"
        infoDiv[0].style.display = "flex"
        infoDiv[1].style.display = "flex"
    }
    if (infoMos == 2) {
        infoDiv[0].style.display = "none"
        infoDiv[1].style.display = "none"
        infoDiv[2].style.display = "flex"
        infoDiv[3].style.display = "flex"
    }
    if (infoMos == 3) {
        infoDiv[2].style.display = "none"
        infoDiv[3].style.display = "none"
        infoDiv[4].style.display = "flex"
    }
})
flechaIzquierda.addEventListener("click", ()=>{
    infoMos = infoMos - 1
    if (infoMos < 1) infoMos = 3

    if (infoMos == 1) {
        infoDiv[2].style.display = "none"
        infoDiv[3].style.display = "none"
        infoDiv[0].style.display = "flex"
        infoDiv[1].style.display = "flex"
    }
    if (infoMos == 2) {
        infoDiv[4].style.display = "none"
        infoDiv[2].style.display = "flex"
        infoDiv[3].style.display = "flex"
    }
    if (infoMos == 3) {
        infoDiv[0].style.display = "none"
        infoDiv[1].style.display = "none"
        infoDiv[4].style.display = "flex"
    }
})

// verificacion del ingreso
const number = document.querySelector("[name=userNumber]");
const password = document.querySelector("[name=userPassword]");
const submit = document.querySelector("[type=submit]")
const body = document.body

number.addEventListener("blur", ()=>{
    let value = number.value;
    let numberError = document.querySelectorAll(".numberError")
    let passwordError = document.querySelectorAll(".passwordError")

    if (value.length == 0) {
        createError(number, "Digita tu numero", "numberError error");
        if (numberError.length > 1) numberError[0].remove()
        if (passwordError.length > 1) passwordError[0].remove()
    }else if (!/^(\+\d{1,3}\s?)?\d{6,14}$/.test(value)) {
        createError(number, "El número debe tener 10 caracteres", "numberError error");
        if (numberError.length > 1) numberError[0].remove()
        if (passwordError.length > 1) passwordError[0].remove()
    }else{
        number.style.border = "none";
        number.style.boxShadow = "none"
        let errorElement = document.querySelectorAll(".numberError");
        if (errorElement) {
            errorElement.forEach(errorElement => {
                errorElement.remove();
            });
        }
    }
})
password.addEventListener("blur", ()=>{
    let value = password.value;
    let numberError = document.querySelectorAll(".numberError")
    let passwordError = document.querySelectorAll(".passwordError")

    if (value.length == 0) {
        createError(password, "Digita tu clave", "passwordError error");
        if (numberError.length > 1) numberError[0].remove()
        if (passwordError.length > 1) passwordError[0].remove()
    }else if (!/^\d{4}$/.test(value)) {
        createError(password, "La clave debe tener 4 caracteres", "passwordError error");
        if (numberError.length > 1) numberError[0].remove()
        if (passwordError.length > 1) passwordError[0].remove()
    }else{
        password.style.border = "none";
        password.style.boxShadow = "none";
        let errorElement = document.querySelectorAll(".passwordError");
        if (errorElement) {
            errorElement.forEach(errorElement => {
                errorElement.remove();
            });
        }
    }
})
submit.addEventListener("click", (e)=>{
    let numberValue = number.value;
    let passwordValue = password.value;
    if (numberValue.length == 0 || passwordValue.length == 0) {
        e.preventDefault()
        createError(number, "Ingrese sus datos", "submitError error")
        password.style.border = "2px solid #F20505";
        password.style.boxShadow= "0px 0px 7px 3px #BF0F1E";
    }
    else if (!/^(\+\d{1,3}\s?)?\d{6,14}$/.test(numberValue) || !/^\d{4}$/.test(passwordValue)) {
        e.preventDefault()
        createError(number, "Ingrese los sus datos correctamente", "submitError error")
        password.style.border = "2px solid #F20505";
        password.style.boxShadow= "0px 0px 7px 3px #BF0F1E";
    }
    else{
        let errorElement = document.querySelectorAll(".submitError");
        if (errorElement) {
            errorElement.forEach(errorElement => {
                errorElement.remove();
            });
        }
    }
})

function createError(element, text, tipe) {
    element.style.border = "2px solid #F20505";
    element.style.boxShadow = "0px 0px 7px 3px #BF0F1E";
    body.insertAdjacentHTML("beforeend", 
        `
        <span class="${tipe}">
        <img src="imagenes/alerta.png" alt="icono alerta">
        <p>${text}</p>
        </span>`
    );
}