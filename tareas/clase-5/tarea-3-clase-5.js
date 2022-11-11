
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


const $textoPromedio = document.querySelector("#promedio")
const $textoNumeroMasPequenio = document.querySelector("#pequenio")
const $textoNumeroMasGrande = document.querySelector("#grande")
const $textoNumeroMasFrecuente = document.querySelector("#frecuente")

let lista = document.querySelectorAll("li");

let arrayNumeros = [];

// Pasa la OL a un Array
for ( i=0 ; i < lista.length ; i++ ) {

    let numero = lista[i].innerHTML; 
    arrayNumeros[i] = Number(numero);
}


function calcularPromedio (array){
    
    let acumulador = 0

    for (i=0 ; i< array.length ; i++){
        acumulador = acumulador + array[i]
    }
    
    return acumulador / array.length
}


function calcularMenorNumero (array) {
    
    let acumulador = array[0];

    for  (i=0; i<array.length ; i++) {

        if (array[i] < acumulador) {
            acumulador = array[i]
        }
    }

    return acumulador
}

function calcularMayorNumero (array){

    let acumulador = array[0];

    for  (i=0; i<array.length ; i++) {

        if (array[i] > acumulador) {
            acumulador = array[i]
        }
    }

    return acumulador

}


/*
function calcularModa (array) {

    let contadorMax = 0

    let contadorMin = 0 

    for  (i=1; i<array.length ; i++) {

        let comparador = array [i]

        for (i=array.length ; i>=0;  i--) {
            
           if(comparador === array[i]) {
            contadorMax++
           }
            
        }
        
        }
    }

    for (i=array.length ; i>=0;  i--) {
        
        //console.log (arrayNumeros[i])
    }



}
*/


function calcularModa (array) {

    let acumuladorActual = 1
    let acumuladorMaximo = 1
    let resultado
    let numeroAComparar = 0

    for ( let i = array.length-1; i>0; i--) {
        
        numeroAComparar = array[i]
        acumuladorActual = 1
        
        for ( let j = i ; j>0; j--) {

            if (array[j-1] === numeroAComparar) {
                acumuladorActual++
            }

            if (acumuladorActual > acumuladorMaximo) {
                acumuladorMaximo = acumuladorActual
                resultado = numeroAComparar
            }
        }
    }

    return (acumuladorMaximo === 1) ? 
    "No hay numero más frecuente" : resultado
}






$textoPromedio.innerHTML = calcularPromedio(arrayNumeros);
$textoNumeroMasPequenio.innerHTML = calcularMenorNumero(arrayNumeros);
$textoNumeroMasGrande.innerHTML = calcularMayorNumero(arrayNumeros);

$textoNumeroMasFrecuente.innerHTML = calcularModa(arrayNumeros);



