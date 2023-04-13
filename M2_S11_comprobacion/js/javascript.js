//id boton
var boton = document.getElementById("boton")

//accion o evento click
boton.addEventListener('click', () => {
    //fetch api
    fetch('https://geek-jokes.sameerkumar.website/api?format=json') //url
        .then(response => response.json()) //se obtiene el json respuesta y valores
        .then(data => { // los valores son llamados por variable data
            console.log(data)
            var texto = document.getElementById("texto") //se obtiene elemento para inyectar data
            //inyectar valor al elemento
            texto.innerHTML = data .joke

        })
}
);

