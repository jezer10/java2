var x = prompt("Numero: ");

function factorial(){
    var total =1;
    for (i=1; i<=x; i++) {
        total = total*i;
    }
    return total;
}
document.write("el factorial de ",x," es ",factorial());