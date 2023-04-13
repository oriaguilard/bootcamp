//cajero automatico

//cliente: nombre, id, clave, saldo
class Cliente {
    constructor(nombre, rut, clave, saldo) {
        this.nombre = nombre
        this.rut = rut
        this.clave = clave
        this.saldo = saldo
    }
}
var cliente1 = new Cliente("orianna", 259706165, 1234, 10000)
var cliente2 = new Cliente("gabriela", 259706160, 5678, 20000)
var cliente3 = new Cliente("aguilar", 259706161, 9012, 30000)
//indice
var listaClientes = [cliente1, cliente2, cliente3] //arreglo

//pedir ingreso de datos
alert("Bienvenido, banco BCI");
var rutCliente = parseInt (prompt("Ingrese su rut sin guión. Ej 259706165"))
var claveCliente = parseInt (prompt("Ingrese su clave"))

//ingresa id y clave, revisara si coincide con clientes registrados, sino coincide ERROR.
var encontrar = false;
for (var index = 0; index < listaClientes.length; index++) { //recorre la lista de clientes
    if (listaClientes[index].rut===rutCliente && listaClientes[index].clave===claveCliente){ //verifica coincidencia en rut&clave
        encontrar = true;
        alert("Bienvenido, " + listaClientes[index].nombre);
        menu(listaClientes[index]) //Si los datos coinciden se ingresará a un menú en el cual el usuario podrá decidir que desea hacer 

        break
    }
}
if (!encontrar) { //si no coincide rut&clave mensaje ERROR.
    alert("Error");
}

// El menú se repite hasta que el usuario elija salir.
function menu (cliente) {
    let opcion = ""
    do{
        opcion = prompt("Seleccione que desea hacer: \n"+
        "1. Ver saldo\n"+
        "2. Realizar giro\n"+
        "3. Realizar deposito\n"+
        "4. Salir");

        switch (opcion) {
            case "1": //saldo
                alert("Su saldo actual es:" + listaClientes[index].saldo) //busca el saldo según el cliente login
                break;
            
            case "2": //giro,retiro  
                girar(index,girar)
                break;

            case "3": //deposito  
                deposito (index)             
                break;
            case "4":
                break;

            default:
                alert("debe elegir una opción")
                break;
        }
    } while (opcion!="4");         
    }

//Si realiza giros o depósitos, su saldo se modificará.
function girar (index, girar){
    var girar = parseInt(prompt("Su saldo actual es: " + listaClientes[index].saldo + " Ingrese el monto que desea girar ")); //tambien puede ser cliente.saldo
    if (girar > listaClientes[index].saldo) {
        alert ("Saldo insuficiente")
    } else {
        listaClientes[index].saldo -= girar;
        alert ("Giro hecho con éxito. Su nuevo saldo es: " + listaClientes[index].saldo)
    }
    
}

function deposito (index){
    var monto = parseInt(prompt("Su saldo actual es: " + listaClientes[index].saldo + " Ingrese el monto que desea depositar "));
    if (monto < 0 ) {
        alert ("Debe ingresar un número mayor que 0")
    }else {
    listaClientes[index].saldo += monto;
    alert ("Deposito realizado. Su nuevo saldo es: " + listaClientes[index].saldo)
}
}