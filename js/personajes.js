let contenedor=document.querySelector("#conts")
const URL_PERSO='https://api.themoviedb.org/3/person/popular?api_key=b53b30728ee622cb860092e73f1b0f1c&page=1&language=en-CO'

    fetch(URL_PERSO)
    .then(resolve => resolve.json())
    .then(datos=> {
        console.log(datos)
        let personajes=datos.results
        añadirPersonajes(personajes)
    })
    
    function añadirPersonajes(personajes){
        personajes.forEach(element => {
            let div = document.createElement("div")
            div.classList.add("contents")
            let images = document.createElement("img")
            let titulo = document.createElement("h3")
            titulo.textContent=element.name
            images.src=`https://image.tmdb.org/t/p/w200/${element.profile_path}`
            div.appendChild(images)
            div.appendChild(titulo)
            contenedor.appendChild(div)
        });
    
    }