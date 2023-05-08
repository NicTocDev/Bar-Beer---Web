const sabores = document.getElementById("sabores_cerveza")

fetch("./js/cervezas.json")
        .then(response => response.json())
        .then(cervezas => {
            for(const tipo of cervezas){
                sabores.innerHTML += `
                <div class="cervezas">
                    <img class="img_cervezas" src="${tipo.img}">
                    <div class="caracteristicas">                        
                    <h2 class="beerTitle">${tipo.nombre}</h2>
                        <H3 class="beerCaract"> ${tipo.caracteristicas}</H3>
                        <P class="beerDescription"> ${tipo.descripcion}</P>
                    
                        <div class="caracteristicasParticulares">
                            <div class="container-char">
                                <h2 class="char">${tipo.alcohol}</h2>
                                <h3>Alcohol</h3>
                            </div>
                            <div class="container-char">
                                <h2 class="char">${tipo.ibu}</h2>
                                <h3>IBU</h3>
                            </div>
                            <div class="container-char">
                                <h2 class="char">${tipo.amargor}</h2>
                                <h3>Amargor</h3>
                            </div>
                        </div>
                    </div> 
                </div>
                `
            }
        })