let contenedor=document.querySelector(".container")
const URL_PELIS='https://api.themoviedb.org/3/trending/all/day?api_key=b53b30728ee622cb860092e73f1b0f1c&page=5&languaje=es-US'

    fetch(URL_PELIS)
    .then(resolve => resolve.json())
    .then(datos=> {
        console.log(datos)
        let peliculas=datos.results
        console.log(peliculas)
        añadirPelis(peliculas)
    })

function añadirPelis(peliculas){
    peliculas.forEach(element => {
        let div = document.createElement("div")
        div.classList.add("contents")
        let images = document.createElement("img")
        let titulo = document.createElement("h3")
        titulo.textContent=element.title || element.original_name
        images.src=`https://image.tmdb.org/t/p/w200/${element.poster_path}`
        div.appendChild(images)
        div.appendChild(titulo)
        contenedor.appendChild(div)
    });

}