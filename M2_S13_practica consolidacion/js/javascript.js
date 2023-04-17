//declarar elementos tabladigimon y tablacontenido
let tabla = document.getElementById("tablaDigimon");
let contenido = document.getElementById("tablaContenido");
let carta = document.getElementById("carta");

// consumo API con fetch
fetch('https://digimon-api.vercel.app/api/digimon')
.then(response => response.json())
.then(data =>{
    //console.log(data);
    mostrarTabla(data);
}) .catch(error=>console.log(error))

//funciion para los datos del digimon y mostrar en la tabla 
function mostrarTabla(response) {
    //limpiar tablacontenido
    contenido.innerHTML = "";
   // console.log(response);
    for(let temp of response){     //recorrer datos obtenidos de la API digimon
        contenido.innerHTML +=
    `
    <td>${temp.name}</td>
    <td><img src="${temp.img}" alt="${temp.name} width="50px" height="50px"> </td>
    <td>${temp.level}</td>
    `
    }
}
function mostrarCarta(response) { //obtener los datos y mostrar el div id carta
    
    //obtener el valor del input
    let busqueda = document.getElementById("busqueda").value.toLowerCase();
    console.log(busqueda);
    let tabla = document.getElementById("tablaDigimon");
    let contenido = document.getElementById("tablaContenido");
        if (tabla != null && contenido !=null) {
            tabla.style.display= "none"
            contenido.style.display="none"
        }
    //api
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${busqueda}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            construirCarta(data);
        }).catch(error => console.log(error))
}

function construirCarta(params) {
    //ocultar la tabla y contenido
    
    tabla.innerHTML = "";
    contenido.innerHTML = "";
    carta.innerHTML = "";

    for (let temp of params) {     //recorrer datos obtenidos de la API digimon
        carta.innerHTML +=
        `
    <div class="card col-sm-12 col-md-6 mx-auto" style="width: 18rem;">
        <img src="${temp.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${temp.name}</h5>
            <p class="card-text"> Nivel: ${temp.level}</p>
        </div>
    </div>
    `

    }
}