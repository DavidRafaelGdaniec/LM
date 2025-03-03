'use strict'


function Ejercicio1(cadena,booleano,array, funcion)
{
    let contador = 1;
    let booleano2 = true;
    if(typeof cadena === "string" && typeof booleano === "boolean" && typeof array === "object", typeof funcion === "function")
    {
        switch(booleano)
        {
            case true:
            for(let i of array)
            {
                contador = contador * i;
            }
            debugger;
            if(contador > 100)
            {
                for(let i = 0; i < cadena.length; i++)
                {
                    if(cadena.charAt(i) == 'a')
                    {
                        console.log("la a está prohibida");
                        i = cadena.length + 1;
                        booleano = false;
                    }
                }
                if(booleano2 == "false")
                {
                    console.log("La a no está permitida");
                }
                else
                {
                    console.log("muy bien no has usado la a");
                }
            }
            else
            {
                console.log("El resultado de tu array es insuficiente para comprobar la cadena");

            }
            
            break;
            case false:
                console.log(funcion());
            
            break;
        }
    }
    else
    {
        console.log("error");
    }
}

Ejercicio1()
Ejercicio1("hola mundo",true,[1,2,3,4],()=>{alert("Se acabó el juego")})
Ejercicio1("Sí",true,[10,20,30,40],()=>{alert("Se acabó el juego")})
Ejercicio1("Sí",false,[10,20,30,40],()=>{alert("Se acabó el juego")})