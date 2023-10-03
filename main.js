function calcularTabla(numero){
    
    if(isNaN(numero)){
    
        alert("Por favor ingrese un número válido")

        return;
    
    } else if (numero <1 || numero >10){
    
        alert("Recuerde que el número a ingresar debe ser entre el 1 y el 10 inclusive")
    
        return;
    }

    let tabla = "";

    for (let i = 1; i<=10; i++){

        tabla += `${numero} x ${i} = ${numero*i}\n`
    
    }

    alert(tabla)
}

let numeroIngresado = Number(prompt("por favor ingrese un número del 1 al 10"))

calcularTabla(numeroIngresado)