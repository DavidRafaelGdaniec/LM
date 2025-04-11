

    function GestionarFicheroTXT(TXTDoc)
    {
        let lineas = TXTDoc.split("\n");
        let entradas = new Array();
        let respuestas = new Array();
        lineas.forEach(linea => {
            let li = linea.split("r:");
            respuestas.push(li);
        });
        respuestas.forEach(resp => 
            {
                
                if(resp.length == 2 && resp[0] == "")
                    {
                        resp.shift();
                    }
                else
                {
                    resp.forEach(optimizacion => 
                        {
                           let mensaje = optimizacion.split("e:");
                            mensaje.shift();
                            entradas.push(mensaje);
                        }
                    )                    
                }

            });
            let respuestasFiltradas = respuestas.filter(respuesta => !respuesta.some(mensaje => mensaje.includes("e:")));
            let zona = document.getElementById('zonamensaje');
            let contador1 = 0;
            let contador2 = 0;
            lineas.forEach(mensaje =>
                {
                    if(mensaje.includes("e:"))
                        {
                            let entradaCont = document.createElement('div');
                            entradaCont.classList.add('Paramensajes','escritura');
                            let contenidoE = document.createElement('p');
                            contenidoE.textContent = entradas[contador2];
                            contador2++;
                            entradaCont.appendChild(contenidoE);
                            zona.appendChild(entradaCont);
                        }
                    else
                    {
                            let respuestaCont = document.createElement('div');
                            respuestaCont.classList.add('Paramensajes','respuesta');
                            let contenidoR = document.createElement('p');
                            contenidoR.textContent = respuestasFiltradas[contador1] + "";
                            contador1++;
                            respuestaCont.appendChild(contenidoR);
                            zona.appendChild(respuestaCont);
                    }
                }
            );
                
                
            
    }