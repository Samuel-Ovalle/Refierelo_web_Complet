const form = document. querySelector(".form")
const tipoPersona = document.querySelector(".tipoPersona");
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const term = document.getElementById("terminos")
const processing = document.getElementById("tratamiento")
const termText = document.querySelector(".checkOne")
const processingText = document.querySelector(".checkTwo")
const submit = document.getElementById("join")

let passwordValue
let valor = tipoPersona.value;
tipeVal()
tipoPersona.addEventListener("change",()=>{
    tipeVal()
})
term.addEventListener("change",()=>{
    let cError = document.querySelector(".checkError")
    if (term.checked && cError) {
        termText.classList.add("checkbox");
        termText.classList.remove("checkError");
    }
})
processing.addEventListener("change",()=>{
    let cError = document.querySelector(".checkError")
    if (processing.checked && cError) {
        processingText.classList.add("checkbox");
        processingText.classList.remove("checkError");
    }
})
submit.addEventListener("click", (e)=>{
    let value = [
     one.value.length,
     two.value.length,
     three.value.length,
     four.value.length,
     five.value.length,
     six.value.length,
     seven.value.length
    ]
    value.forEach((element, index)=>{
        if (element == 0) {
            e.preventDefault()
            switch (index + 1) {
                case 1:
                    createError(one)
                break;
                case 2:
                    createError(two)
                break;
                case 3:
                    createError(three)
                break;
                case 4:
                    createError(four)
                break;
                case 5:
                    createError(five)
                break;
                case 6:
                    createError(six)
                break;
                case 7:
                    createError(seven)
                break;
            
                default:
                break;
            }
        }
    });

    if (valor == "natural") {
        const pOne = document.querySelector(".pOne")
        const pTwo = document.querySelector(".pTwo")
        if (pOne.value.length == 0) {
            createError(pOne)
        }
        else if (pTwo.value.length == 0) {
            createError(pTwo)
        }
        else if (pOne.value === pTwo.value) {
            pOne.classList.remove("error");
            pTwo.classList.remove("error");
        }
        else{
            createError(pOne)
            createError(pTwo)
        }
    }

    if (!term.checked) {
        termText.classList.remove("checkbox");
        termText.classList.add("checkError");
    }
    if (!processing.checked) {
        processingText.classList.remove("checkbox");
        processingText.classList.add("checkError");
    }

    let error = document.querySelector(".error");
    let cError = document.querySelector(".checkError")
    if (error || cError) e.preventDefault()
})
form.addEventListener("submit", (e)=>{
    const data = Object.fromEntries(
        new FormData(e.target)
    )

    var url = 'codigo_ticket.js';

    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Error al enviar la solicitud:', error);
    });
})

function tipeVal() {
    let valor = tipoPersona.value;
    termText.classList.add("checkbox");
    termText.classList.remove("checkError");
    processingText.classList.add("checkbox");
    processingText.classList.remove("checkError");
    if (valor == "juridica") {
        const tSItem = document.querySelector(".tItem")
        three.style.display = "inline"
        if (tSItem) {
            tSItem.remove()
        }
        changeElement(one, "Nombre de la empresa", "text", "nombreEpresa")
        changeElement(two, "Nit", "number", "nit")
        changeElement(three, "Dirección", "text", "direccion")
        changeElement(four, "Responsable convenio", "text", "Responsable")
        changeElement(five, "Cargo actual", "text", "cargo")
        changeElement(six, "Celular", "number", "celular")
        changeElement(seven, "Mail", "email", "mail")
        three.classList.remove("tItem");
        four.classList.remove("fItem");

        createListener(one, 0, 40, /^[a-zA-Z\s]+$/)
        createListener(two, 0, 40, /^\d{9}$/)
        createListener(three, 0, 40, /^[A-Za-z0-9\s#-]+$|^Carrera\s\d{1,4}\w?$|^Cra\s\d{1,4}\w?$|^Calle\s\d{1,4}\w?$|^Cl\s\d{1,4}\w?$|^Transversal\s\d{1,4}\w?$|^Tv\s\d{1,4}\w?$|^Diagonal\s\d{1,4}\w?$|^Dg\s\d{1,4}\w?$|^Avenida\s\d{1,4}\w?$|^Av\s\d{1,4}\w?$|^Circular\s\d{1,4}\w?$|^Cierra\s\d{1,4}\w?$|^Manzana\s\d{1,4}\w?$|^Mz\s\d{1,4}\w?$|^Kilómetro\s\d{1,4}\w?$/)
        createListener(four, 0, 40, /^[a-zA-Z\s]+$/)
        createListener(five, 0, 40, /^[a-zA-Z\s]+$/)
        createListener(six, 0, 40, /^(\+\d{1,3}\s?)?\d{6,14}$/)
        createListener(seven, 0, 40, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    }
    else if (valor == "natural") {
        three.style.display = "none"
        changeElement(one, "Nombres", "text")
        changeElement(two, "Apellidos", "text")
        two.insertAdjacentHTML("afterend", `
            <select class="three tItem">
                <option value="C.C">C.C</option>
                <option value="C.E">C.E</option>
                <option value="P.A">P.A</option>
                <option value="A.S">A.S</option>
                <option value="C.D">C.D</option>
                <option value="S.C">S.C</option>
                <option value="P.R">P.R</option>
                <option value="P.E">P.E</option>
                <option value="P.T">P.T</option>
            </select>
            `
        );
        changeElement(four, "Número documento", "number")
        changeElement(five, "Celular", "number")
        changeElement(six, "Clave 4 dígitos", "password")
        changeElement(seven, "Confirma la clave", "password")
        four.classList.add("fItem");
        six.classList.add("pOne");
        seven.classList.add("pTwo");

        createListener(one, 0, 40, /^[a-zA-Z\s']{1,40}$/)
        createListener(two, 0, 40, /^[a-zA-Z\s']{1,40}$/)
        createListener(four, 0, 40, /^\d{6,10}$/)
        createListener(five, 0, 40, /^(\+\d{1,3}\s?)?\d{6,14}$/)
        createListener(six, 0, 4, /^\d{4}$/)
        createListener(seven, 0, 4, /^\d{4}$/)
    }
    function changeElement(element, message, typeM, name) {
        element.classList.remove("error");
        element.placeholder = message;
        element.type = typeM;
        element.setAttribute('name', `${name}`)
    }
    function createListener(element, min, max, expReg) {
        element.addEventListener("blur", ()=>{
            let val = element.value;
            if (val.length <= min || val.length > max) createError(element)
            else if (!expReg.test(val)) createError(element);
            else element.classList.remove("error");
        })
    }
}
function createError(element) {
    element.classList.add("error")
}