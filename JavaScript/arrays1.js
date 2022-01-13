var juan_C = {
    nombre: 'Juan carlos',
    apellido: 'Alvarado',
    altura: 1.68,
    cantidadDeDulces: 10
}

var linet = {
    nombre: 'Linet',
    apellido: 'Pallares',
    altura: 1.70,
    cantidadDeDulces: 10
}

var juan_M = {
    nombre: 'Juan Manuel',
    apellido: 'Alvarado',
    altura: 1.30,
    cantidadDeDulces:  30
}

var juan = {
    nombre: 'Juan Miguel',
    apellido: 'Alvarado',
    altura: 1.58,
    cantidadDeDulces: 25
}
var lina = {
    nombre: 'lina',
    apellido: 'Alvarado',
    altura: 1.60,
    cantidadDeDulces: 40
}

// Costante
const esAlta = ({altura}) => altura > 1.8

// Declarar un array
var personas = [juan_C, linet, juan_M, juan, lina]

//metodo para filtrar arreglos (recibe un array como parametro)
var personasAltas = personas.filter(esAlta)


const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})



var personasCms = personas.map(pasarAlturaACms)



const reducer = (acum, {cantidadDeDulces}) => acum + cantidadDeDulces

var totalDeDulces = persona.reduce(reducer, 0)

console.log(`En total todos tiene ${totalDeDulces} dulces!`)


