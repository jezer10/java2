var name = prompt("Nombre: ");
var edad =  prompt("Edad: ");

if(edad<16){
    document.write("No tiene la edad suficiente para recibir un salario ",name);
}else {
    var sal = Number(prompt("Salario : "));

    if(edad=>16&&edad<19){
    document.write("Su salario es de ",sal);
}
    if(edad=>19&&edad<=50){
    var comision = sal*0.05;
    document.write("Su salario es de ",(comision + sal));
} else if(edad=>51&&edad<61){
    var comision = sal*0.10;
    document.write("Su salario es de ",(comision + sal));
} else if(edad>60){
    var comision = sal*0.15;
    document.write("Su salario es de ",(comision + sal));  
}
}
