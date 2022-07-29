// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades
// almacenarlas en un arreglo
// cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, 
//luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.

// Añade en última posición la ciudad de París.

// Escribe por pantalla el elemento que ocupa la segunda posición.

// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
let ciudades = [];

do{
    let ciudadesNueva = (prompt('Ingrese el nombre de 5 ciudades'));
    ciudades.push(ciudadesNueva);
}while (confirm('¿Desea agregar otra ciudad?'))

// document.write(ciudades);
// mostrar la longitud del arreglo

document.write('<br>Cantidad de ciudades: ' + ciudades.length + '</br>');
// mostrar items 1, 3 y el ultimo
document.write(`<ul> 
<li>Ciudad de primera posicion: ${ciudades[0] }</li>
<li>Ciudad de tercera posicion: ${ciudades[2] }</li>
<li>Ciudad de ultima posicion: ${ciudades[ciudades.length -1] }</li>
</ul>`);

//Agregar paris a la ultima posicion
document.write(`<br> Agregar una nueva ciudad al final del arreglo: </br>`);
ciudades.push('París');
document.write(`<br>${ciudades}</br>`);
//Agregar a pantalla la ciudad de la segunda posicion
document.write(`<br> Ciudad de la segunda posicion: </br>`);
document.write(`<br> ${ciudades[1]} </br>`);

// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
document.write(`<br> Reemplazo de ciudad de la segunda posicion: </br>`);
ciudades.splice(1,0,"Barcelona");
document.write(`<br>${ciudades}</br>`);


