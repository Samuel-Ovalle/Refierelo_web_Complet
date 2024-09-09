// imprimir valores numericos y porcentajes

// parte 1

const refRes = document.querySelector(".refRes")
const refGes = document.querySelector(".refGes")
const desM = document.querySelector(".desM")
const tasaCon = document.querySelector(".tasaCon")
const tiempoMed = document.querySelector(".tiempoMed")

let refResValorAnterior = 10
let refGesValorAnterior = 14
let desMValorAnterior = 20
let tasaConValorAnterior = 7
let tiempoMedValorAnterior = 2

let refResNuevoValor = 20
let refGesNuevoValor = 15
let desMNuevoValor = 30
let tasaConNuevoValor = 7
let tiempoMedNuevoValor = 1

let porcentajeRefRes = porcentajeRef(refResValorAnterior, refResNuevoValor)
let porcentajeRefGes = porcentajeRef(refGesValorAnterior, refGesNuevoValor)
let porcentajeDesM = porcentajeRef(desMValorAnterior, desMNuevoValor)
let porcentajeTasaCon = porcentajeRef(tasaConValorAnterior, tasaConNuevoValor)
let porcentajeTiempoMed = porcentajeRef(tiempoMedValorAnterior, tiempoMedNuevoValor)

refRes.insertAdjacentText("beforeend", refResNuevoValor)
refGes.insertAdjacentText("beforeend", refGesNuevoValor)
desM.insertAdjacentText("beforeend", `$${desMNuevoValor} m`)
tasaCon.insertAdjacentText("beforeend", `${tasaConNuevoValor}%`)
tiempoMed.insertAdjacentText("beforeend", `${tiempoMedNuevoValor} Días`)

imprimirPromedio(refRes, porcentajeRefRes)
imprimirPromedio(refGes, porcentajeRefGes)
imprimirPromedio(desM, porcentajeDesM)
imprimirPromedio(tasaCon, porcentajeTasaCon)
imprimirPromedio(tiempoMed, porcentajeTiempoMed)

// parte 2

const horasAc = document.querySelector(".horasAc")
const horasAn = document.querySelector(".horasAn")

let dLeft
let hAc = 2
let hAn = 7
horasAc.innerText = `${hAc} hs`
horasAn.innerText = `${hAn} hs`

let porcentajeHorasAc = porcentajeRef(hAn, hAc)

if (porcentajeHorasAc > 0) {
    porcentajeHorasAc = "Subio"
    dLeft = 48.2
}
else if (porcentajeHorasAc == 0) {
    porcentajeHorasAc = "Constante" 
    dLeft = 46.9
}
else if (porcentajeHorasAc < 0) {
    porcentajeHorasAc = "Mejoro" 
    dLeft = 47.9
}
horasAc.insertAdjacentHTML("afterend", 
    `
    <span style="left: ${dLeft}%;">
    ${porcentajeHorasAc}
    </span>`
);

//parte 3

const contactoInicial = document.querySelector(".contactoInicial")
const radicacion = document.querySelector(".radicacion")
const decision = document.querySelector(".decision")
const formalizacion = document.querySelector(".formalizacion")

contactoInicial.textContent = "0"
radicacion.textContent = "0"
decision.textContent = "0"
formalizacion.textContent = "0"


function imprimirPromedio(element, porcentaje) {
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
function porcentajeRef(vAn, VAc) {
    let valorAnterior = vAn
    let valorActual = VAc

    let total = ((valorActual - valorAnterior)/valorAnterior)*100
    total = Math.round(total)
    console.log(total);
    if (total !== Number) {
        total = 0
    }
    return total
}

// modificacion y creacion de graficas

const tMAnterior = document.querySelector(".tiempoMedioAnterior")
const tMActual = document.querySelector(".tiempoMedioActual")

let mesAnteriorPrimerValor = 2
let mesAnteriorSegundoValor = 5

let mesActualPrimerValor = 2
let mesActualSegundoValor = 5

modificarGrafica(tMAnterior, 0)
modificarGrafica(tMActual, 0)

function modificarGrafica(element, porcentaje) {
    element.style.strokeDasharray = `${porcentaje} 100`
}

const gUno = document.querySelector(".gUno").getContext("2d")
const gDos = document.querySelector(".gDos").getContext("2d")

let myChartUno = new Chart(gUno,{
    type: "line",
    data: {
      labels: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto'],
      datasets: [{
        label: '',
        data: [1000000, 15000000, 20000000, 17000000, 24000000, 26000000, 18000000, 30000000],
        borderColor: '#02B5E7',
        backgroundColor: '#02B5E7',
        fill: false,
        borderWidth: 2,
        tension: 0.4
      }]
    },
    options: {
        plugins:{
            legend: {
                display: false
            },
        },
        scales: {
            y: {
              beginAtZero: true
            }
        }
    }
});

let datosV = [
    Math.floor(Math.random() * 20) + 1, 
    Math.floor(Math.random() * 20) + 1, 
    Math.floor(Math.random() * 20) + 1, 
    Math.floor(Math.random() * 20) + 1, 
    Math.floor(Math.random() * 20) + 1, 
    Math.floor(Math.random() * 20) + 1, 
    Math.floor(Math.random() * 20) + 1
];
let datosVf = [
    Math.floor(Math.random() * 20) + 1, 
    Math.floor(Math.random() * 20) + 1, 
    Math.floor(Math.random() * 20) + 1, 
    Math.floor(Math.random() * 20) + 1, 
    Math.floor(Math.random() * 20) + 1, 
    Math.floor(Math.random() * 20) + 1, 
    Math.floor(Math.random() * 20) + 1
];
let datos1 = [
    { nombre: "Contacto exitoso", valor: datosV[0], color: "#139CAA" },
    { nombre: "Formalizados", valor: datosV[1], color: "#00DFEE" },
    { nombre: "Aprobados", valor: datosV[2], color: "#02B5E7" },
    { nombre: "Radicados", valor: datosV[3], color: "#80C0FD" },
    { nombre: "Desistidos", valor: datosV[4], color: "#4674B6" },
    { nombre: "Negados", valor: datosV[5], color: "#005499" },
    { nombre: "Contacto no exitoso", valor: datosV[6], color: "#003366" }
];

let datos2 = [...datos1]

datos1.sort((a, b) => a.valor - b.valor);
datos2.sort((a, b) => b.valor - a.valor);

console.log(datos1);
console.log(datos2);

let datos = [];

let indexDatos2 = 0;
let indexDatos1 = 0;

for (let i = 0; i < 7; i++) {
    if (i % 2 !== 0) {
        if (indexDatos2 < 4) {
            datos.push(datos2[indexDatos2]);
            indexDatos2++;
        } else {
            if (indexDatos1 < 3) {
                datos.push(datos1[indexDatos1]);
                indexDatos1++;
            }
        }
    } else {
        if (indexDatos1 < 3) {
            datos.push(datos1[indexDatos1]);
            indexDatos1++;
        } else {
            if (indexDatos2 < 4) {
                datos.push(datos2[indexDatos2]);
                indexDatos2++;
            }
        }
    }
}
console.log(datos);

let myChartDos = new Chart(gDos, {
    type: "doughnut",
    data: {
      labels: [ datos[0].nombre,  datos[1].nombre,  datos[2].nombre,  datos[3].nombre,  datos[4].nombre,  datos[5].nombre,  datos[6].nombre],
      datasets: [{
        data: [ datos[0].valor,  datos[1].valor,  datos[2].valor,  datos[3].valor,  datos[4].valor,  datos[5].valor,  datos[6].valor],
        borderColor: [ datos[0].color,  datos[1].color,  datos[2].color,  datos[3].color,  datos[4].color,  datos[5].color,  datos[6].color],
        backgroundColor: [ datos[0].color,  datos[1].color,  datos[2].color,  datos[3].color,  datos[4].color,  datos[5].color,  datos[6].color],
        fill: false,
        borderWidth: 1,
      }]
    },
    options: {
        plugins:{
            legend: {
                display: false
            },
        }
    }
});

let ul = document.querySelector(".listaEstados");
const ctx = document.querySelector(".gDos").getContext("2d");
  
const radio = 108;
const centerX = ctx.canvas.width / 2;
const centerY = ctx.canvas.height / 2;

let startAngle = -Math.PI / 2;
const totalDatos =  datos.reduce((a, b) => a + b.valor, 0);
const objetosP = []

// datos.forEach((objeto, indice) => {
//     const angle = (Math.PI * 2 * objeto.valor) / totalDatos;
//     if (objeto.valor != 0) {
//         const li = document.createElement("li");
//         li.innerHTML = `${ datos[indice].nombre} <strong>${objeto.valor}</strong>`;
//         ul.appendChild(li);

//         const liWidth = li.offsetWidth;
//         const liHeight = li.offsetHeight;

//         let xCenter = centerX + radio * Math.cos(startAngle + angle / 2);
//         let yCenter = centerY + radio * Math.sin(startAngle + angle / 2);

//         let x = Math.round(xCenter - (liWidth / 2));
//         let y = Math.round(yCenter - (liHeight / 2)); 
        
//         objetosP.push(puntosZ(x, y))
//         ajusteDePosicion(indice, li, liHeight, liWidth)

//         li.style.position = "absolute";
//         li.style.left = objetosP[indice].punto1.x + "px";
//         li.style.top = objetosP[indice].punto1.y + "px";
//     }
//     startAngle += angle;
// });
function ajusteDePosicion(indice, ob, al, an) {
    const ajPos = (arr, x, y)=>{
        arr.punto2.x = x + an
        arr.punto2.y = y
        arr.punto3.x = x
        arr.punto3.y = y + al
        arr.punto4.x = x + an
        arr.punto4.y = y + al
        arr.puntoCentro.x = x + (an / 2)
        arr.puntoCentro.y = y + (al / 2)
        arr.alto.alt = al
        arr.ancho.anc = an
    }

    ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)

    if (objetosP[indice].punto1.x < -20) {
        objetosP[indice].punto1.x = -20
        ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)
    }
    else if (objetosP[indice].punto2.x > 245) {
        objetosP[indice].punto1.x = 245 - an
        ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)
    }

    if (objetosP[indice].puntoCentro.y <= 100 && objetosP[indice].puntoCentro.y > 30){
        objetosP[indice].punto1.y = 30
        ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)
    }
    else if (objetosP[indice].puntoCentro.y > 100 && objetosP[indice].puntoCentro.y < 170){
        objetosP[indice].punto1.y = 158
        ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)
    }

    if (objetosP[indice].punto1.y < -10) {
        objetosP[indice].punto1.y = -10
        ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)
    }

    if (objetosP[indice].punto1.x < 109 && objetosP[indice].punto1.y < 100) {
        let cenIzX = objetosP[indice].puntoCentro.x + (an / 2)
        let cenIzY = objetosP[indice].puntoCentro.y

        if (an == 112 || an == 94 || an == 75) {
            while (cenIzX < 109 && cenIzX > 50 && cenIzY > 25 && cenIzY < 50) {
                cenIzY = cenIzY - 5
            }
            objetosP[indice].punto1.y = cenIzY - (al / 2)
            ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)
        }
    }
    else if (objetosP[indice].punto1.x > 109 && objetosP[indice].punto1.y < 100) {
        let cenDerX = objetosP[indice].puntoCentro.x - (an / 2)
        let cenDerY = objetosP[indice].puntoCentro.y
        
        if (an == 112 || an == 94 || an == 75) {
            while (cenDerX > 109 && cenDerX < 170 && cenDerY > 25 && cenDerY < 50) {
                cenDerY = cenDerY - 5
            }
            objetosP[indice].punto1.y = cenDerY - (al / 2)
            ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)
        }
        else{
            while (cenDerX > 109 && cenDerX < 170 && cenDerY > 25 && cenDerY < 50) {
                cenDerX = cenDerX + 10
                cenDerY = cenDerY - 5
            }
            objetosP[indice].punto1.x = cenDerX
            objetosP[indice].punto1.y = cenDerY - (al / 2)
            ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)
        }
    }
    else if (objetosP[indice].punto1.x < 109 && objetosP[indice].punto1.y > 100) {
        let cenIzX = objetosP[indice].puntoCentro.x + (an / 2)
        let cenIzY = objetosP[indice].puntoCentro.y

        if (an == 112 || an == 94 || an == 75) {
            while (cenIzX < 109 && cenIzX > 50 && cenIzY > 160 && cenIzY < 210) {
                cenIzY = cenIzY + 5
            }
            objetosP[indice].punto1.y = cenIzY - (al / 2)
            ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)
        }
        else{
            while (cenIzX < 109 && cenIzX > 50 && cenIzY > 160 && cenIzY < 210) {
                cenIzX = cenIzX - 10
                cenIzY = cenIzY + 5
            }
            objetosP[indice].punto1.x = cenIzX - an
            objetosP[indice].punto1.y = cenIzY - (al / 2)
            ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)
        }
    }
    else if (objetosP[indice].punto1.x > 109 && objetosP[indice].punto1.y > 100) {
        let cenDerX = objetosP[indice].puntoCentro.x - (an / 2)
        let cenDerY = objetosP[indice].puntoCentro.y

        if (an == 112 || an == 94 || an == 75) {
            while (cenDerX > 109 && cenDerX < 170 && cenDerY > 160 && cenDerY < 210) {
                cenDerY = cenDerY + 5
            }
            objetosP[indice].punto1.y = cenDerY - (al / 2)
            ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)
        }
        else{
            while (cenDerX > 109 && cenDerX < 180 && cenDerY > 150 && cenDerY < 210) {
                cenDerX = cenDerX + 10
                cenDerY = cenDerY + 5
            }
            objetosP[indice].punto1.x = cenDerX
            objetosP[indice].punto1.y = cenDerY - (al / 2)
            ajPos(objetosP[indice], objetosP[indice].punto1.x, objetosP[indice].punto1.y)
        }
    }
}
function puntosZ(xInicial, YInicial) {
    let objeto = {
        punto1: {x: 0, y: 0},
        punto2: {x: 0, y: 0},
        punto3: {x: 0, y: 0},
        punto4: {x: 0, y: 0},
        puntoCentro: {x: 0, y:0},
        alto: {alt: 0},
        ancho: {anc: 0}
    };

    objeto.punto1.x = xInicial
    objeto.punto1.y = YInicial

    return objeto
}