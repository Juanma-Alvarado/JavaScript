// Primera opción
// Con for

var estudiantes = ['Maria', 'juan', 'daniel', 'jose'];

function saludarEstudiantes(estudiantes){
    console.log(`hola, ${estudiantes}`);
}

for(var i = 0; i < estudiantes.length; i++){
   saludarEstudiantes(estudiantes[i]); 
}


// Seguanda opción
// Con for of

var estudiantes = ['Maria', 'juan', 'daniel', 'jose'];

function saludarEstudiantes(estudiantes){
    console.log(`hola, ${estudiantes}`);
}

for(var estudiante of estudiantes){ 
    saludarEstudiantes(estudiante);
}
