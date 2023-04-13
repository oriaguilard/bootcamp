//declarar variables
var opcion, num1, num2;

do {
    //Menú de opciones
    opcion = prompt("Seleccione que sea hacer: \n" +
        "1. Calcular cual número es mayor\n" +
        "2. Sumar\n" +
        "3. Restar\n" +
        "4. Multiplicar\n" +
        "5. Dividir\n" +
        "6. Mostrar los números ingresados\n" +
        "7. Salir");

    //Si el usuario ingresa cualquier opción entre 1 y 
    //6 le solicitará que agregue dos números:

    if (opcion != 7 && opcion >= 1 && opcion < 7) { //si es menor a 7 y mayor a 1
        num1 = parseInt(prompt("Agrega el primer numero"))
        num2 = parseInt(prompt("Agrega el segundo numero"))
    }

    //evaluar opción para definir que hacer o flujo
    //swicht case
    //switch key es lo que evalua. Value es el valor contra el que evaluamos
    switch (opcion) {

        case "1"://calcular cual num es mayor
            //console.log("Caso 1")//para verificar la validación
            mayor(num1, num2);//mayo
            break;

        case "2"://suma
            suma(num1, num2)
            break;

        case "3"://resta
            resta(num1, num2)
            break;

        case "4"://multiplicacion
            multiplicar(num1, num2)
            break;

        case "5"://division
            var resultado = dividir(num1,num2);
            alert("La división de los números es: "+resultado);
            break;

        case "6":///Mostrar los números ingresados
            alert(mostrar(num1,num2))            
            break;

        case "7": //salir
            alert("Gracias por participas")
            conndicion = false;
            break;

        default:
            alert("Eleccion incorrecta. Adios")
            break;
    }
} while (opcion != "7");
//funcion para evluar cual numero es mayor
function mayor(numero1, numero2) {
    if (numero1 > numero2) { //si la condicion se cumple, num1 es mayor a num2
        alert(numero1 + " es mayor que " + numero2) // si no, es estrictamente igual
    } else if (numero1 === numero2) {
        alert("los numeros son iguales")
    } else { // si no sucede el mayor es num2
        alert(numero2 + " es mayor que " + numero1)
    }
}
// funcion suma
function suma(numero1, numero2) {
    var suma = numero1 + numero2
    alert("La suma de los numeros es: " + suma);
}
//funcion resta
function resta(numero1, numero2) {
    var resta = numero1 - numero2
    alert("La resta de los numeros es: " + resta);
}
//funcion multiplicar
function multiplicar(numero1, numero2) {
    var condicion = true
    while (condicion == true) { // mientras la condicion sea true
        if (numero1 !=0 && numero2!= 0) {
            var multiplicar = numero1 * numero2;
            alert ("La multiplicacion de los numeros es:" +numero1*numero2)
            condicion = false
        }else{
            alert("ha ingresado un numero igual a 0")
            numero1 = parseInt(prompt("Agrega el primer numero"))
            numero2 = parseInt(prompt("Agrega el segundo numero"))
        }
    }
}
//funcion division
function dividir(numero1, numero2) {


    // sabemos que no se puede dividir por cero, por lo que validaremos, para el caso de una división, que esta no sea por cero. 
    //Si el usuario ingreso cero, solicitaremos nuevamente que ingrese los datos

    var condicion = true
    do {
        if (numero1 !=0 && numero2 !=0) { //si las variables son distitnas 
            condicion = false
            return numero1 / numero2;    
        }else{
            alert ("ha ingresado un numero igual a 0");
            numero1 = parseInt(prompt("Agrega el primer numero"))
            numero2 = parseInt(prompt("Agrega el segundo numero"))
        }
    } while (condicion);    
    }

//funcion mostrar
function mostrar (numero1, numero2) {
    alert("Los numeros ingresados son: " + num1 + " y " + num2)
}

