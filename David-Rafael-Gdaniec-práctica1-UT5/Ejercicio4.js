'use strict'



//let longitud = Number(prompt("cuantas asignaturas"));
/*asignaturas.length = longitud;
    for(let i = 0; i < asignaturas.length; i++)
        {
            asignaturas[i] = prompt("asignatura " + (i + 1));
        }*/

            let asignatura = prompt("Escribe las asignaturas separadas por guiones");
            let cursos = prompt("Escribe el curso");
            let alumnos = [
    { nombre: 'Juan', edad: 25},
    { nombre: 'Ana', edad: 30},
    { nombre: 'Pedro', edad: 40}
    ];
    alumnos.map((alumno) => alumno.curso = cursos);
    alumnos.map((alumno) => alumno.asignaturas = asignatura.split("-"));

alumnos.forEach((alumno) => {
    console.log("Nombre: " + alumno.nombre + " Edad: " + alumno.edad + " Cursos " + alumno.curso + " Asignaturas: " + alumno.asignaturas);
});
