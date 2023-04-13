$(document).ready(function () {

    $("#text1").mouseover(function(){ //texto2
        $("#text2").toggle()//accion de cambio

    })
    //agrandar imagen
    $("#img").dblclick(function(){  
        $("#img").css({width:'100%'})
    })

    $("#img").mouseout(function(){
        $("#img").css({width:'20%'})
    })
   //agrandar tamaño letra
    $("#caja3").mouseover (function(){
        $("#caja3").css("font-size","32px")
    })

    $("#caja3").mouseout(function(){
        $("#caja3").css("font-size","12px")
    })


});