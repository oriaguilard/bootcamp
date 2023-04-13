/*//declaracion de variables
//tipo de identificador
//variable global

var identificador1 = "valor" //String-texto
var identificador2 = 10 //int valor entero
var identificador3 = 10.5 //float decimales
var identificador4 = true //boolean true o false
var identificador5 = 'c'// caracter

//let varibale local
var identificador1 = "valor" 
var identificador2 = 10 
var identificador3 = 10.5
var identificador4 = true
var identificador5 = 'c'

//log en programacion es loguear, informar mediante consola
console.log(identificador1)*/

/*//Considerando los conocimientos adquiridos durante 
esta CUE, deberás solicitar el ingreso de dos
números y calcular cual es mayor o si tienen 
el mismo valor. En cualquier caso, debes mostrar un
mensaje indicando cuál de los números es mayor, 
por ejemplo, si ingresamos 5 y 8, se mostrará:*/

//ingreso de datos
var numero1 = prompt("ingrese el primer numero");
var numero2 = prompt("ingreso el segundo numero");

//se convierte sting a numero tipo int (parsear)
numero1 = parseInt (numero1); //se parsea y se acumula en la misma var
numero2 = parseInt (numero2);


//calcular cual es mayor o si tienen el mismo valor
//condicionales if, else, else if, switch case

if(numero1 > numero2){ //si la condicion se cumple, num1 es mayor a num2
    alert(numero1 + " es mayor que "+ numero2) // si no, es estrictamente igual
}else if(numero1 === numero2){
    alert("los numeros son iguales")
}else{ // si no sucede el mayor es num2
    alert(numero2 + " es mayor que " +numero1)
}

//alerta
alert(numero1+numero2);