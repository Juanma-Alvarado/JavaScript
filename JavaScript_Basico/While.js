var estudiantes = ['Maria', 'juan', 'daniel', 'jose'];
​
function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}
​
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

