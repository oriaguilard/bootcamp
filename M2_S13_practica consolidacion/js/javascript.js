//declarar elementos tabladigimon y tablacontenido
let tabla = document.getElementById("tablaDigimon");
let contenido = document.getElementById("tablaContenido");
console.log(tabla);
console.log(contenido);


// consumo API con fetch
fetch('https://digimon-api.vercel.app/api/digimon')
.then(response => response.json())
.then(data =>{
    //console.log(data);
    mostrartabla(data);
}) .catch(error=>console.log(error))

//funciion para los datos del digimon y mostrar en la tabla 
function mostrartabla(response) {
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