/*Consumir una API publica que les guste y
consumirla con el método fetch.
Luego, una vez obtenidos los datos, vamos a
mostrarlos en el navegador (pueden darle formato
de card)*/

let card = document.getElementById("cards")

fetch("https://pokeapi.co/api/v2/pokemon?limit=8&offset=45")
.then(resp => resp.json())
.then(data => {
    data.results.forEach((pokemon, index) => {
        card.innerHTML += `
            <div class="card">
                <h2> ${pokemon.name}</h2>
                <img src="${imagenes[index]}" alt="${pokemon.name}" />
            </div>
        `;
    });
})
.catch(err => console.log(err));

const imagenes = [
    "./imagenes/paras.webp",
    "./imagenes/parasect.webp",
    "./imagenes/venonat.webp",
    "./imagenes/venomoth.jpeg",
    "./imagenes/diglett.png",
    "./imagenes/dugtrio.png",
    "./imagenes/meowth.png",
    "./imagenes/persian.png"
];