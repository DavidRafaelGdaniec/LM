'use strict'

let fichero = "libro.xml";
let http = new XMLHttpRequest();
http.open("GET",fichero, true);
let extension = fichero.split(".");
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