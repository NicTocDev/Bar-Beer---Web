
const etiquetas = document.getElementById("etiquetas")

fetch("./js/staff.json")
        .then(response => response.json())
        .then(datos => {
            for(const integrante of datos){
                etiquetas.innerHTML += `
                <div class="etiqueta" >
                    <img class="fotos" src="${integrante.imgUrl}" alt="Imagen del Staff">
                    <h3>${integrante.name}</h3>
                    <h3>${integrante.tarea}</h3>

                </div>
                `
            }
        })