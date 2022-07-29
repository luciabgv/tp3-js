// Solicitar por pantalla al usuario ingresar el valor de los lados de un
// rectángulo, luego crear una función para calcular su perímetro 
// mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)
/*

let resultado = []
let pruebavalorLado1 = []
let pruebavalorLado2 = []

//for(let i = 0; i++)

    let valorLado1 = parseInt(prompt('Ingrese los valores de un rectangulo'));
    let valorLado2 = parseInt(prompt('Ingrese los valores de un rectangulo'));
    let perimetro = 2 * (valorLado1 + valorLado2);

    resultado.push(perimetro);
    pruebavalorLado1.push(valorLado1);
    pruebavalorLado2.push(valorLado2);



document.write('Resultado perimetro: ' + resultado);
document.write('<br>Valor 1 rectangulo: ' + pruebavalorLado1);
document.write('<br>Valor 2 rectangulo: ' + pruebavalorLado2);


*/


// otra forma
 

const perimetroRectangulo = (valor1, valor2)=>{
    return 2*(valor1+valor2)

 }


 // const perimetroRectangulo (valor1, valor2){
//     let resultadoFinal = 2* (valor1+valor2)
//     return resultadoFinal

// }

let valor1 = parseFloat(prompt('Ingrese el valor de un lado del rectangulo en cm'));
let valor2 = parseFloat(prompt('Ingrese el valor del segundo lado del rectangulo en cm'));

document.write(`El perimetro del rectangulo es:  ${perimetroRectangulo(valor1, valor2)} cm.`)
