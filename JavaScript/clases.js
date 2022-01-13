class persona {
    constructor(nombre,apellido,altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
       }

saludar(fn) {
    //var nombre = this.nombre
    //var apellido = this.apellido
    var {nombre, apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn){
        fn(nombre, apellido, null)
    }
}

soyAlto() {
    return this.altura >= 1.80
}
}

class Desarrollador extends persona {
constructor(nombre, apellido, altura) {
    super(nombre,apellido,altura)
}
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        if (fn){
            fn(nombre, apellido, true)
        }
    }

}

function responderSaludo (nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)

    if(esDev){
        console.log(`ah mira, no sabia que eras desarrollador`)
    }
}

var juanC = new persona('juan Carlos', 'reyes', 1.68)
var linet = new persona('linet', 'pallares', 1.60)
var lina = new persona('lina', 'alvarado', 1.62)
var juan = new Desarrollador('juan Manuel', 'alvarado', 1.54)
var juanM = new persona('juan miguel', 'alvarado', 1.38)


juanC.saludar(responderSaludo)
linet.saludar(responderSaludo)
lina.saludar(responderSaludo)
juan.saludar(responderSaludo)
juanM.saludar(responderSaludo)
