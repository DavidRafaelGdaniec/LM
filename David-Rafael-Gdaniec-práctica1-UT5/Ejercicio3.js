'use strict'

function Repetidos(original, comprobar)
{
    let contador = 0;
    console.log("Array original " + original.join("/"));
    console.log("Array donde buscar " + comprobar.join("/"));
   original.forEach(nombre => {
    if(comprobar.includes(nombre))
    {
        contador++;
    }
   });

   if(contador == original.length)
   {
    console.log("Todos están incluidos");
   }
   else if(contador > 0)
   {
    console.log("Alguno está incluido");
   }
   else
   {
    console.log("No hay ninguno incluido");
   }
}
Repetidos(["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera"], ["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera"]);
Repetidos(["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera"], ["Elisabet Ricart Monreal"]);
Repetidos(["Elisabet Ricart Monreal"], ["nada"]);

/*Array original*/
/*Ejercicio4(["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera"]);
/*Ninguno incluído*/
/*Ejercicio4(["Lina Armida Machado Iglesias","Apolonia Santiago Buendía","Poncio Cobo Herrera","Rafaela Seco Cañas"
],["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera"])
/*Alguno incluido
Ejercicio4(["Elisabet Ricart Monreal","Poncio Cobo Herrera","Isaac Talavera Luna"],["Elisabet Ricart Monreal"]);*/
