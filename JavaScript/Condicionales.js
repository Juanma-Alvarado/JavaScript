// Programa (Profeciones)
var juanC = {
    nombre: 'juan Carlos',
    apellido: 'alvarado',
    edad: 44,
    ganadero: true,
    profecional_de_ajedrez_y_dama: true,
    cocinero: false,
    cantante: true,
    futbolista: true,
    astrotauta: false,
    trafiker: false
}

var juan = {
    nombre: 'juan',
    apellido: 'alvarado',
    edad: 12
}

function imprimirProfeciones(persona){
    console.log(`${persona.nombre} es:`)
    
    if(persona.ganadero){
        console.log('Ganadero')
    }

    if(persona.profecional_de_ajedrez_y_dama){
        console.log('profecional de ajedrez and dama')
    }


    if(persona.cantante){
        console.log('cantante')
    }

    if(persona.futbolista){
        console.log('futbolista')
    }

    if(persona.cocinero){
        console.log('cocinero')
    }else{
        console.log('No es cocinero')
    }


    if(persona.astrotauta){
        console.log('astrotauta')
    }else{
        console.log('No es astrotauta')
    }

    if(persona.trafiker){
        console.log('es trafiker')
    }else{
        console.log('No es trafiker')
    }
}

// Programa (Edad)

// Cosntante
const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function esJoven(persona){
    return persona.edad <= 10
}

function imprimirSiEsmayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else if (esJovem(persona)){
        console.log(`${persona.nombre} es menor de edad`)
    }else{
        console.log(`${persona.nombre} es joven`)
    } 
}

const permitirAcceso = ({ edad }) => !esMayorDeEdad({ edad }) ? console.log('Acceso denegado') : console.log('Bienvenido')

imprimirProfeciones(juanC)
imprimirSiEsmayorDeEdad(juanC)
permitirAcceso(juanC)