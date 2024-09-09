const form_sugerencia = document.querySelector(".form_sugerencia").addEventListener("submit", (e)=>{
    e.preventDefault()
    let formData = Object.fromEntries(
        new FormData(e.target)
    )
    console.log(Object.fromEntries(
        new FormData(e.target)
    ));

})
