var a = Number(prompt("N1: "));
var b =Number(prompt("N2: "));

/*
operacion:
1. Suma
2. Resta
3. Multiplicacion
4. Division

*/

function menu(){
    document.write("Seleccione opcion: ")
    document.write("1._ Suma")
    document.write("2._Resta")
    document.write("3._ Multiplicacion")
    document.write("4._ Division")
}
function suma(){
    return a+b;
}
function resta(){
    return a-b;
}
function multiplicacion(){
    return a*b;
}
function division() {
    return a/b;
}
function error(){
    document.write("La Opcion no es valida");
}
var o = prompt("Opcion: ");
switch (parseInt(o)) {
case 1:document.write("La Suma es: ",suma());
break;
case 2:document.write("La resta es: ",resta());
break;
case 3:document.write("La multiplcacion es: ",multiplicacion());
break;
case 4:document.write("la division es: ",division());
break;
default: error();
break;
}