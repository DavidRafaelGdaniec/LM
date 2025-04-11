'use strict'

 function GestionarFicheroXML(XMLDoc)
 {
  
   let librerias =  XMLDoc.getElementsByTagName('libreria');
   let Elmain = document.querySelector('main');
   let cadena = "";
   let precioAComparar = XMLDoc.querySelectorAll('precio');
   let precios = Array.from(precioAComparar, precio => parseInt(precio.textContent));
   precios.sort((a,b) => a - b);
   for(let libreria of librerias)
   {
        let libros = libreria.querySelectorAll('libro');
        
        
        cadena+= "<h2>";
        cadena+= libreria.querySelector('nombre').textContent;
        cadena+= "</h2>";
        cadena+= "<table>";
        cadena+= "<tr>";
        cadena+=  "<th>";
        cadena+=  "titulo";
        cadena+=  "</th>";
        cadena+=  "<th>";
        cadena+=  "autor";
        cadena+=  "</th>";
        cadena+=  "<th>";
        cadena+=  "precio";
        cadena+=  "</th>";
        cadena+= "</tr>";
        for(let libro of libros)
        {
          
          cadena+=  "<tr>";
          cadena+=  "<td>";
          cadena+= libro.querySelector('titulo').textContent;
          cadena+=  "</td>";
          cadena+=  "<td>";
          cadena+=  libro.querySelector('autor').textContent;
          cadena+=  "</td>";
          let precio = libro.querySelector('precio').textContent + "€";
          if(precios[0] == parseInt(precio))
            {
              cadena+= "<td class = \"barato\">";
              cadena+= precio;
              cadena+= "</td>"
            }
          else
          {
            cadena+= "<td>";
            cadena+= precio;
            cadena+= "</td>"
          }
          cadena+=  "</tr>";
        }   
        cadena+= "</table>";
   }
   Elmain.innerHTML = cadena;

 }