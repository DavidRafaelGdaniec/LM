// script.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("Libreria.json")
        .then((response) => response.json())
        .then((data) => {
            const gallery = document.getElementById("gallery");
            data.forEach((item) => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    
                    <img src="imagenes/${item.cover}" alt="${item.cover}">
                    <h2>${item.title}</h2>
                    <div class="author">${item.author}</div>

                    <p>${item.genre}</p>
                    <p>${item.year}</p>
                    </div>
                    <div class="Descripcion">${item.descripcion}</div>
                    
                `;
                gallery.appendChild(card);
            });
        })
        .catch((error) => console.error("Error loading data:", error));
});
