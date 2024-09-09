const asignar = document.querySelectorAll(".asignar")
let boxAsigStatus = 0


asignar.forEach((asignar) => {
    asignar.addEventListener('click', () => {
        if (boxAsigStatus === 0) {
            main.insertAdjacentHTML("afterend",
            `
            <div class="boxAsig">
                <div class="cancelar"></div>
                <img class="emoji" src="imagenes/INFORMATIVO.png" alt="Informativo">
                <span>
                    Asigna mínimo 2 asesores que van a realizar la gentión
                </span>
                <form class="boxInput" autocomplete="off">
                    <input type="checkbox" name="asignar" id="asesor1">
                    <label class="cBox checkBox1 uncheck" for="asesor1"></label>
                    <input type="text" placeholder="Nombres y Apellidos">
                    <input type="number" placeholder="Número de celular">
                    <input type="email" placeholder="Mail">
                    <input type="text" placeholder="Producto a gestionar">
                    <select class="sexo">
                            <option value="" disabled selected hidden>Sexo</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="binario">Binario</option>
                    </select>
                
                    <input type="checkbox" name="asignar" id="asesor2">
                    <label class="cBox checkBox2 uncheck" for="asesor2"></label>
                    <input type="text" placeholder="Nombres y Apellidos">
                    <input type="number" placeholder="Número de celular">
                    <input type="email" placeholder="Mail">
                    <input type="text" placeholder="Producto a gestionar">
                    <select class="sexo">
                            <option value="" disabled selected hidden>Sexo</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="binario">Binario</option>
                    </select>
                
                    <input type="checkbox" name="asignar" id="asesor3">
                    <label class="cBox checkBox3 uncheck" for="asesor3"></label>
                    <input type="text" placeholder="Nombres y Apellidos">
                    <input type="number" placeholder="Número de celular">
                    <input type="email" placeholder="Mail">
                    <input type="text" placeholder="Producto a gestionar">
                    <select class="sexo">
                            <option value="" disabled selected hidden>Sexo</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="binario">Binario</option>
                    </select>
                </form>
                <input class="enviar" type="submit" value="Asignar">
            </div>
            `
            )
            const asesor1 = document.getElementById("asesor1")
            const asesor2 = document.getElementById("asesor2")
            const asesor3 = document.getElementById("asesor3")
            const checkBox1 = document.querySelector(".checkBox1")
            const checkBox2 = document.querySelector(".checkBox2")
            const checkBox3 = document.querySelector(".checkBox3")
            
            asesor1.addEventListener("change",()=>{
                if (asesor1.checked) {
                    checkBox1.classList.remove("uncheck");
                    checkBox1.classList.add("check");
                }else{
                    checkBox1.classList.remove("check");
                    checkBox1.classList.add("uncheck");
                }
            })
            asesor2.addEventListener("change",()=>{
                if (asesor2.checked) {
                    checkBox2.classList.remove("uncheck");
                    checkBox2.classList.add("check");
                }else{
                    checkBox2.classList.remove("check");
                    checkBox2.classList.add("uncheck");
                }
            })
            asesor3.addEventListener("change",()=>{
                if (asesor3.checked) {
                    checkBox3.classList.remove("uncheck");
                    checkBox3.classList.add("check");
                }else{
                    checkBox3.classList.remove("check");
                    checkBox3.classList.add("uncheck");
                }
            })

            boxAsigStatus = 1
            const boxAsig = document.querySelector(".boxAsig")

            const cancelar = document.querySelector(".cancelar")
            cancelar.addEventListener("click", ()=>{
                boxAsig.remove();
                boxAsigStatus = 0
            })

            const enviar = document.querySelector(".enviar")
            enviar.addEventListener("click", ()=>{
                boxAsig.remove();
                boxAsigStatus = 0

                main.insertAdjacentHTML("afterend",
                `
                <div class="loadBox">
                    <img src="imagenes/Cargando.gif" alt="Cargando">
                </div>
                `)
            })

        }else{
            const boxAsig = document.querySelector(".boxAsig")
            boxAsig.remove();
            boxAsigStatus = 0
        }
    });
});

`
<div class="boxResult exito">
<img class="emoji" src="imagenes/VALIDACION.png" alt="Informativo">
<span>
    ¡ Excelentes noticias !
</span>
<span>
    Referido asignado con éxito
</span>
</div>
`

`
<div class="boxResult Error">
<img class="emoji" src="imagenes/Error.png" alt="Informativo">
<span>
    ¡ Oops !
</span>
<span>
    Deben asignarse minímo 1 asesor
</span>
</div>
`