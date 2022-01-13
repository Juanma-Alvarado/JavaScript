// Objeto (Reune Caracteristicas)
var juan = {
	nombre: 'juan',
	apellido: 'alvarado',
	edad: 12
}
//  (Clave) Y (Valor)
var juanC = {
	nombre: 'juan Carlos',
	apellido: 'alvarado',
	edad: 44
}

// Funcion
function imprimirNombreEnMayusculas({ nombre }){
	console.log(nombre.toUpperCase())
}

// Invocar La Function Imprimir...
imprimirNombreEnMayusculas(juan)
imprimirNombreEnMayusculas(juanC)

// Solo Se Pueden Modificar Objetos
function cumpleaños(persona){
	return{
		...persona,
		edad: persona.edad + 1
	}
}

