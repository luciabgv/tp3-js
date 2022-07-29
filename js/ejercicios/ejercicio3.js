//scribir un script que simule el lanzamiento de dos dados. 
//Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 
//para cada uno de los lanzamientos de los dados. 
//Sumar el resultado de lanzar dos dados y anotar en un array 
//el número de apariciones de dicha suma, 
//repitiendo 50 veces esta operación.


//let numero = Math.floor(Math.random() * 7) + 1;

//let dado1 = math.floor(Math.random()*(max - min +1)+1);

let sumas =[]
let pruebaDado1 =[] //prueba
let pruebaDado2 =[] //prueba

for(let i = 0; i < 50; i++){

  let dado1 = Math.floor(Math.random()*(6 - 1 + 1) + 1);
  let dado2 = Math.floor(Math.random()*(6 - 1 + 1) + 1);
  let resultado = dado1 + dado2;

  sumas.push(resultado);
  pruebaDado1.push(dado1); //prueba
  pruebaDado2.push(dado2); //prueba



}

document.write('Resultados sumas' + sumas);
document.write('<br>Resultados dado1' + pruebaDado1); //prueba
document.write('<br>Resultados dado2' + pruebaDado2); //prueba

