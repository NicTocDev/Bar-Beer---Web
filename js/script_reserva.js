const clientes = []

const formularioReserva = document.querySelector(".form")
const contenedorHTML = document.querySelector("#contenedorClientes")


const renderizarClientes = () =>{
        contenedorHTML.innerHTML = ""
    for(const cliente of clientes){
        const date = new Date(cliente.reserva);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const amOrPm = hours < 12 ? 'am' : 'pm';
        hours = hours % 12;
        hours = hours ? hours : 12;

        contenedorHTML.innerHTML +=`
        <div class="card_usuario">
        <h2 class="h21">Su Reservación</h2>
        <h2 class="h22">Nombre: ${cliente.nombre}</h2>
        <p>Telefono: <strong>${cliente.telefono}</strong></p>
        <p>Email: <strong>${cliente.email}</strong></p>
        <p>Reserva el día: <strong> ${day}/${month}/${year} ${hours}:${minutes} ${amOrPm}</strong></p>
        <p>Cantidad de Personas: <strong>${cliente.personas}</strong></p>
        </div>
        `      
        }
    }



formularioReserva.addEventListener("submit", (event) =>{
    event.preventDefault()
    clientes.push({
        nombre: formularioReserva.nombrecompleto.value,
        telefono: formularioReserva.numerotelefono.value,
        email: formularioReserva.email.value,
        reserva: formularioReserva.diareserva.value,
        personas: formularioReserva.cantidadpersonas.value
        
    })
    formularioReserva.reset()
    renderizarClientes ()

})

