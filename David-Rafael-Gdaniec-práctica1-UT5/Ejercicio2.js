'use strict'


function Ejercicio2(...ArrayAlumnos)
{
    /*if(array1 !== undefined)
        {
            let asignaturas = Array();
            for(let i = array1.length; i !== 2; i--)
                {
                    asignaturas.unshift(array1.pop());
                }
                console.log(array1.join("-") + ":" + asignaturas.join("/"));
        }
    else
    {
        console.log("No hay datos para mostrar")
    }
    if(array2 !== undefined)
        {
            let asignaturas = Array();
            for(let i = array2.length; i !== 2; i--)
                {
                    asignaturas.unshift(array2.pop());
                }
                console.log(array2.join("-") + ":" + asignaturas.join("/"));
        }
    else
    {
        console.log("no hay datos para mostrar")
    }*/
        if(ArrayAlumnos != 0)
        {
            ArrayAlumnos.forEach(alumno => {
                let [nombre, curso, ...Asignaturas] = alumno;
                console.log(`${nombre}-${curso}-asignaturas:${Asignaturas.join("-")}`);
            });
        }
        else
        {
            console.log("no hay datos para mostrar");
        }
      



        
}

Ejercicio2(["Sara", "DAMA", "Programación", "ED"],["Martín", "DAMB", "Programación", "LM", "ED", "BBDD", "FOL", "SI"]);
Ejercicio2(["Álvaro","Semi","BBDD"]);
Ejercicio2();
