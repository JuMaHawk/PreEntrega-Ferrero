function calcularTabla(numero){
    
    if(isNaN(numero) || numero <= 0){
    
        alert("Por favor ingrese un numero valido")

        return;
    
    }

    let tabla = "";

    for (let i = 1; i<=10; i++){

        tabla += `${numero} x ${i} = ${numero*i}\n`
    
    }

    alert(tabla)
}

let numeroIngresado = Number(prompt("por favor ingrese un numero"))

calcularTabla(numeroIngresado)