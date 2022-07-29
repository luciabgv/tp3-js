//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
//Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
console.log('Meses del año:' + meses.length);

//mostrar en pantalla
//document.write(meses);
console.log(meses[10]);

document.write('<ul>');

for(let mesesAño =0 ; mesesAño < meses.length; mesesAño++){
document.write('<li>'+ meses[mesesAño]+'</li>')
}

document.write('</li>');
