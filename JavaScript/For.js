// Variable
var juan = {
	nombre: 'juan Carlos',
	apellido: 'alvarado',
	edad: 44,
	peso: 76
}

// Interpolación
console.log(`Al INICIO del año ${juan.nombre} pesaba ${juan.peso}Kg`)

// Costante
const INCREMENTO_PESO = 0.3

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.3

const META = juan.peso - 3
var dias = 0

// Logica
while (juan.peso > META){
	if (comeMucho()){
		aumentarDePeso(juan)

	}if (realizaDeporte()){
		adelgazar(juan)
	}
	dias += 1
}



// Imprimir
console.log(`pasaron ${dias} dias hasta que ${juan.nombre} adelgazo 3Kg`)