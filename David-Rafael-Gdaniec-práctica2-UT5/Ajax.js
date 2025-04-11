'use strict'

let fichero = "libro.xml";
let fichero2 = "holaa.txt"
let http = new XMLHttpRequest();
http.open("GET",fichero2, true);
let extension = fichero2.split(".");
http.setRequestHeader("Content-type", "text/xml");
http.send();
http.addEventListener('load', () => 
    {
        if(http.status == 200)
        {
            if(extension[1] == "xml")
            GestionarFicheroXML(http.responseXML);
            else
            GestionarFicheroTXT(http.responseText);
        }
    });
