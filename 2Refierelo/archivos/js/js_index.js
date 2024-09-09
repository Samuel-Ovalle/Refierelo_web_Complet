// funciones
const porcentajeRef = (vAn, vAc)=>{
    let valorAnterior = vAn
    let valorActual = vAc

    let total = ((valorActual - valorAnterior)/valorAnterior)*100
    total = Math.round(total)
    return total
}
const imprimirPromedio = (element, porcentaje)=>{
    let tipo
    if (porcentaje > 0) tipo = "Subio"
    else if (porcentaje == 0) tipo = "Constante" 
    else if (porcentaje < 0) tipo = "Bajo" 
    else tipo = "Error"

    element.insertAdjacentHTML("beforeend", 
    `
    <span class="${tipo}">
    ${porcentaje} % ${tipo}
    </span>`
    );
}
const modificarGrafica = (element, porcentaje)=>{element.style.strokeDasharray = `${porcentaje} 100`}
const imprimirPopUp = (popUpE)=>{
    let p = popUpE
    if (p == 1) {
        fondoDifuminado.insertAdjacentHTML("afterbegin",
            `
            <div class="popUp bienvenida">
                <h3>Bienvenido(a)</h3>
                <form class="inputInfo" action="">
                    <input type="text" placeholder="Nombres">
                    <input type="text" placeholder="Apellidos">
                    <input type="tel" placeholder="Número de celular">
                    <input type="email" placeholder="Mail">
                    <input type="text" placeholder="Producto a gestionar" disabled="true">

                    <div class="genero">
                        <input id="hombre" class="checkBox" type="checkbox" name="hombre">
                        <label  id="generoUno" class="generoCheck unverified" for="hombre">Hombre</label>
                        <input id="mujer"   class="checkBox" type="checkbox" name="mujer">
                        <label  id="generoDos" class="generoCheck unverified" for="mujer">Mujer</label>
                        <input id="binario" class="checkBox" type="checkbox" name="binario">
                        <label  id="generoTres" class="generoCheck unverified" for="binario">Binario</label>    
                    </div>

                    <div class="terminosDatos">
                        <label for="terminosCondiciones" class="terCon"><input type="checkbox" name="terminos_y_condiciones" id="terminosCondiciones">Acepto los <b>términos y condiciones</b></label>
                        <label for="tratamientoDatos" class="tratDat"><input type="checkbox" name="tratamiento_de_datos" id="tratamientoDatos">Acepto el <b>tratamiento de mis datos personales</b></label>    
                    </div>

                    <input id="guardarDatos" type="submit" value="Guardar">
                </form>
            </div>
            `
        )
        // pop datos y autirizacion
        const generoCheckObj = document.querySelectorAll(".generoCheck")
        const checkBoxSex = document.querySelectorAll(".checkBox")
        const terCon = document.querySelector(".terCon")
        const tratDat = document.querySelector(".tratDat")
        const terminosCondiciones = document.getElementById("terminosCondiciones")
        const tratamientoDatos = document.getElementById("tratamientoDatos")

        let checkBoxStatus = [0, 0, 0];

        generoCheckObj.forEach((generoCheck, index) => {
            generoCheck.addEventListener('click', () => {
                if (checkBoxStatus[index] == 0) {checkBoxStatus[index] = 1;}
                else if (checkBoxStatus[index] == 1) {checkBoxStatus[index] = 0;}

                let checkElementsArray = checkBoxStatus.filter(status => status === 1).length
                if (checkElementsArray >= 2) {
                    for (let i = 0; i < checkBoxStatus.length; i++) {checkBoxStatus[i] = 0;}
                    checkBoxStatus[index] = 1
                }
                checkBoxStatus.forEach((element) => {
                    if (element == 1) {
                        generoCheck.classList.remove('unverified');
                        generoCheck.classList.add("checked");
                    }else if (element == 0) {
                        console.log(checkBoxStatus);
                        console.log(element);
                        console.log(generoCheck);
                    }
                })
            });
        });

        terminosCondiciones.addEventListener("change", ()=>{
            if (terminosCondiciones.checked){terCon.classList.add("checked")}
            else{terCon.classList.remove("checked")}
        })
        tratamientoDatos.addEventListener("change", ()=>{
            if (tratamientoDatos.checked){tratDat.classList.add("checked")}
            else{tratDat.classList.remove("checked")}
        })
    }
    else if (p == 2) {
        fondoDifuminado.insertAdjacentHTML("afterbegin",
            `
            <div class="popUp paralelo">
                <img class="exit exitParalelo" src="img/X.png" alt="exit button">
                <img class="emoji" src="img/emoji_informativo.png" alt="emoji informativo">
                <h3>¡ Excelentes noticias <br>
                    Tienes un <b>nuevo referido para gestionar !</b>
                </h3>
                <form action="" class="nuevoReferidoData">
                    <input type="text" placeholder="Nombres y Apellidos">
                    <input type="text" placeholder="Tipo">
                    <input type="text" placeholder="Documento">
                    <input type="text" placeholder="Producto a gestionar">
                    <input type="text" placeholder="Monto">
                    <input type="text" placeholder="Situación laboral">
                    <input class="aceptarReferido" type="submit" value="Lo quiero">
                </form>
            </div>
            `
        )
        const aceptarReferido = document.querySelector(".aceptarReferido")
        const botonExit = document.querySelector(".exit")

        
        aceptarReferido.addEventListener("click", (e)=>{
            alert("hola")
        })
        botonExit.addEventListener("click", (e)=>{
            fondoDifuminado.remove()
        })
    }
    else if (p == 3) {
        fondoDifuminado.insertAdjacentHTML("afterbegin",
            `
            <div class="popUp popUpLoading">
                <img class="exit exitLoading" src="img/X.png" alt="exit button">
                <img src="img/LOADING.gif" alt="cargando">
            </div>
            `
        )
        const botonExit = document.querySelector(".exit")
        botonExit.addEventListener("click", (e)=>{
            fondoDifuminado.remove()
        })
    }
    else if (p == 4) {
        fondoDifuminado.insertAdjacentHTML("afterbegin",
            `
            <div class="popUp popUpAsignado">
                <img class="exit exitAsignado" src="img/X.png" alt="exit button">
                <img src="img/GIF VÁLIDACIÓN.png" alt="referido asignado">
                <p>¡ Excelentes noticias !</p>
                <p>Referido asignado con éxito</p>
            </div>
            `
        )
        const botonExit = document.querySelector(".exit")
        botonExit.addEventListener("click", (e)=>{
            fondoDifuminado.remove()
        })
    }
    else if (p == 5) {
        fondoDifuminado.insertAdjacentHTML("afterbegin",
            `
            <div class="popUp popUpNoAsignado">
                <img class="exit exitNoAsignado" src="img/X.png" alt="exit button">
                <img src="img/Error_Artboard.png" alt="referido no asignado">
                <p>¡ Oops !</p>
                <p>Referido esta siendo gestionado por otro asesor</p>
            </div>
            `
        )
        const botonExit = document.querySelector(".exit")
        botonExit.addEventListener("click", (e)=>{
            fondoDifuminado.remove()
        })
    }
}

// seleccion de elementos del DOM
const refRes = document.querySelector(".refRes")
const refGes = document.querySelector(".refGes")
const desM = document.querySelector(".desM")
const tasaCon = document.querySelector(".tasaCon")
const tMAnterior = document.querySelector(".tiempoMedioAnterior")
const tMActual = document.querySelector(".tiempoMedioActual")
const horasAc = document.querySelector(".horasAc")
const horasAn = document.querySelector(".horasAn")
const grafiasCirculares = document.querySelectorAll(".graficaCircualar")
const indicadores = document.querySelector(".indicadores")
const contenedorIndicadores = document.querySelector(".contenedorIndicadores")
const fondoDifuminado = document.querySelector(".fondoDifuminado")

imprimirPopUp(1)

// actualizacion, porcentaje y imprimir la informacion de los referidos

let refResValorAnterior = 10
let refGesValorAnterior = 14
let desMValorAnterior = 20
let tasaConValorAnterior = 7

let refResNuevoValor = 20
let refGesNuevoValor = 15
let desMNuevoValor = 30
let tasaConNuevoValor = 7

let porcentajeRefRes = porcentajeRef(refResValorAnterior, refResNuevoValor)
let porcentajeRefGes = porcentajeRef(refGesValorAnterior, refGesNuevoValor)
let porcentajeDesM = porcentajeRef(desMValorAnterior, desMNuevoValor)
let porcentajeTasaCon = porcentajeRef(tasaConValorAnterior, tasaConNuevoValor)

refRes.insertAdjacentText("beforeend", refResNuevoValor)
refGes.insertAdjacentText("beforeend", refGesNuevoValor)
desM.insertAdjacentText("beforeend", `$${desMNuevoValor} m`)
tasaCon.insertAdjacentText("beforeend", `${tasaConNuevoValor}%`)

imprimirPromedio(refRes, porcentajeRefRes)
imprimirPromedio(refGes, porcentajeRefGes)
imprimirPromedio(desM, porcentajeDesM)
imprimirPromedio(tasaCon, porcentajeTasaCon)

// porcentaje, tiempo medio de gestion

let dLeft
let hAn = 7
let hAc = 2
horasAc.innerText = `${hAc} hs`
horasAn.innerText = `${hAn} hs`

let mesAnteriorPrimerValor = 2
let mesActualPrimerValor = 7

let porcentajeTmpMesActual = porcentajeRef(mesActualPrimerValor, hAc)
let textoTmpG
if (porcentajeTmpMesActual < 0) textoTmpG = "Mejoro"
else if (porcentajeTmpMesActual == 0) textoTmpG = "Constante" 
else if (porcentajeTmpMesActual > 0) textoTmpG = "Aumento" 
else textoTmpG = "Error"

modificarGrafica(tMAnterior, 70)
modificarGrafica(tMActual, 70)

const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let mesActual = new Date();
mesActual = mesActual.getMonth();
let mesAnterior = nombresMeses[mesActual - 1]
mesActual = nombresMeses[mesActual];

horasAn.insertAdjacentHTML("afterend", `
<span class="mes">
${mesAnterior}
</span>`
);
horasAn.insertAdjacentHTML("afterend", `
<span class="mes">
${mesActual}
</span>`
);
horasAn.insertAdjacentHTML("afterend", `
<span class="textoTmpG">
${textoTmpG}
</span>`
);

// responsive

window.addEventListener("load", (e)=>{
    if (window.innerWidth <= 550) grafiasCirculares.forEach((grafiasCirculares)=> {grafiasCirculares.setAttribute("r", "3.5vh")});
    else grafiasCirculares.forEach((grafiasCirculares)=> {grafiasCirculares.setAttribute("r", "2.5vw")});
})
window.addEventListener("resize", (e)=>{
    if (window.innerWidth <= 550) grafiasCirculares.forEach((grafiasCirculares)=> {grafiasCirculares.setAttribute("r", "3.5vh")});
    else grafiasCirculares.forEach((grafiasCirculares)=> {grafiasCirculares.setAttribute("r", "2.5vw")});
});

// funcion de movimiento indicadores 
let indicadoresPosicion = 0
let transicion = 0
contenedorIndicadores.addEventListener("click", ()=>{
    if (indicadoresPosicion === 0) {
        indicadores.style.right = "100vw"  
        indicadoresPosicion = 1
        tasaCon.style.display = "inline";
    }else if (indicadoresPosicion === 1) {
        indicadores.style.right = "0vw"  
        indicadoresPosicion = 0
    }    
})
indicadores.addEventListener('transitionend', ()=> {
    transicion++
    if (transicion % 2 === 0) tasaCon.style.display = "none";
});