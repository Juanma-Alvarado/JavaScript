// Variable
var contador = 0;

// Constante
const llueve = () => Math.random()>0.25;

// While
do{
  contador++;
}while(!llueve());

var frecuencia = contador===1 ? "vez":"veces";

// Imprimir
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);
