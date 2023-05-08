const mjecontacto = []

const formularioContacto = document.querySelector(".form-contacto")

const renderizarContactos = []

formularioContacto.addEventListener("submit", (event) =>{
    event.preventDefault()
    mjecontacto.push({
        nombre: formularioContacto.name.value,
        email: formularioContacto.emailcontac.value,
        cajaComentario: formularioContacto.cajacomentario.value,
                
    })
    alert("Su Mensaje Fue Enviado Con Exito")
    formularioContacto.reset()
    console.log(mjecontacto)
    

})
