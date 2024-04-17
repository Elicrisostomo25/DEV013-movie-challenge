import llamadoApi from '../lib/apiMovie.js'
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export default function contenidoTarjeta(response) {
    //navegar por los resultados de las pelis y hacer el llamado a las propiedades que necesito mostrar
    const vistaPosterior = document.createElement('div');
    llamadoApi
        .then((data) => {
            data.forEach(movie => {
                const tarjeta = document.createElement('div');//Se crea una const almacenar info del nodo que se va a crear
                //console.log(movie)
                tarjeta.classList.add('movie'); //se le da una clase
                tarjeta.innerHTML =
                `
                <div class="card-posterior">   
                <div class="card posterior" style="background-image: url('${IMG_URL + movie.poster_path}');">
                    <img class="img1" src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
                    <h3 class="title1">"${movie.title}"</h3>
                    <h4 class="fecha1">"${movie.release_date}"</h4>
                    <ul>
                        <li class="votacion">Votación: "${movie.vote_average}"</li>
                         <i class='bx bx-star'></i>
                        // <li class="genero">Genero: "${movie.genreNames}"</li> 
                        <li class="resumen">Resumen: "${movie.overview}"</li>
                    </ul>
                </div>
                </div>
                `
                vistaPosterior.appendChild(tarjeta);
            })
        .catch((error) => {
        console.error(err);
        })
    return vistaPosterior;
    });

};    
