// Primera opción (Forma manuel)

var miAuto = {
    marca: 'kia',
    modelo: 'sportage',
    annio: 2009,
    detalleDelAuto: function(){
    	console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

// Seguda opción (Forma automatica)

function auto (MARCA, MODELO, ANNIO){
  this.marca = MARCA;
  this.modelo = MODELO;
  this.annio = ANNIO;
}
var autos = [];
for(let i = 0 ; i < 30 ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto (marca, modelo, annio));
  break
}
for(let i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}
