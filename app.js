/*challenge 17*/
let nota1 = parseInt(prompt('ingrese la primera nota'));
let nota2 = parseInt(prompt('ingrese la segunda nota'));
let nota3 = parseInt(prompt('ingrese la tercera nota'));

document.write('Challenge 17<br/>');
if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3))
{
    alert(`una de sus notas no era un numero, intentelo nuevamente`);
} 
else
{
    document.write('su promedio es: ' + ((nota1+nota2+nota3)/3).toFixed(2) + ' y esta ' + (((nota1+nota2+nota3)/3) >= 6 ? 'aprobado':'desaprobado') + '<br/>');  
    console.log('su promedio es: ' + ((nota1+nota2+nota3)/3).toFixed(2) + ' y esta ' + (((nota1+nota2+nota3)/3) >= 6 ? 'aprobado':'desaprobado') + '<br/>');
}

/*challenge 18*/
let rpm = parseInt(prompt('ingrese las RPM de su vehiculo'));
document.write('<br/>Challenge 18<br/>');

if(isNaN(rpm))
{
    alert(`las rpm ingresadas son incorrectas`);
} 
else
{
    document.write('debe ' + (rpm > 3000? 'subir':(rpm >= 1000? 'mantener': 'bajar')) + ' el cambio actual<br/>');
}

/*challenge 19*/
let vida = parseInt(prompt('ingrese la vida restante de su personaje'));
document.write('<br/>Challenge 19<br/>');

const CuraChica = 25;
const CuraGrande = 50;

if(isNaN(vida))
{
    alert(`valor incorrecto, por favor ingrese un valor de vida valido`);
} 
else
{
    document.write('el valor de vida actual de su personaje es: ' + (vida >= 75 ? vida: (vida > 50 ? (vida + CuraChica):(vida + CuraGrande))) + (vida >= 75 ?' su personaje no necesita una pocion':''));
}
