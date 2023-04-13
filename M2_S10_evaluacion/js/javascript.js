//ejecutar evento submit
$("#reserva").submit(function (event) {
    event.preventDefault();

    // valores del input
    var nombre = $("#nombreReserva").val(); 
    var mail = $("#mailReserva").val();
    var telefono = $("#telefonoReserva").val();
    var fecha = $("#fechaReserva").val();
    var  hora = $("#horaReserva").val();
    var asistentes = $("#asistentesReserva").val();

    //validar formulario//campos obligatorios
    if(nombre == ""){
        alert("El campo nombre es obligatorio")  
    } else if (mail == "" ||  mail == null){
        alert("El campo correo es obligatorio") 
         
    } else if (telefono == ""){
        alert("El campo telefono es obligatorio")  
         
    } else if (fecha == ""){
        alert("El campo fecha es obligatorio")  
         
    } else if (hora == ""){
        alert("El campo hora es obligatorio")  
         
    } else if (asistentes == ""){
        alert("El campo asistentes es obligatorio")   
    }


    alert("Muchas gracias " + nombre + " hemos recibido su sugerencia y enviaremos una pronta repuesta al correo " + mail)  
})


//gaseosa tabla shop
$(document).ready(function () {

     //agrandar imagen
     $("#gaseosa").dblclick(function(){  
        $("#gaseosa").css({width:'300%'})
    })


});
