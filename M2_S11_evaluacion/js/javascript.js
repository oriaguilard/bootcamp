
$(document).ready(function () {

    document.getElementById("formulario").addEventListener('submit', function(evento) {
        evento.preventDefault()

        var busqueda = document.getElementById("ingreso").value //obtener el dato ingresado

        //validar el ingreso
        if(busqueda.trim()=="" || busqueda ==null){
            busqueda = "Castle in the sky"
        }


        //fetch api
        fetch(`https://studio-ghibli-films-api.herokuapp.com/api/$(busqueda)`) //url,endpoint
            .then(response => response.json()) //se obtiene el json respuesta y valores
            .then(data => { // los valores son llamados por variable data
                console.log(data)
            }).catch(error => console.log(error))

    });
    
})




//id boton
var boton = document.getElementById("boton")

//accion o evento click


