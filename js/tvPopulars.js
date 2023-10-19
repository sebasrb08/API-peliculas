export function Tv(){

    const URL_PELIS2='https://api.themoviedb.org/3/tv/popular?api_key=b53b30728ee622cb860092e73f1b0f1c&page=1&language=es-CO'

    fetch(URL_PELIS2)
    .then(resolve => resolve.json())
    .then(datos=> {
        console.log(datos)
        let tvShows=datos.results
        console.log(tvShows)
        añadirTv(tvShows)
    })
}
function añadirTv(tvShows){
    let contenedor=document.querySelector(".containers2")
    tvShows.forEach(element => {
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
