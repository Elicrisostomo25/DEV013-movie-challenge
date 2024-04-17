/*Este archivo contiene un componente ejemplo que muestra cómo podemos representar un componente en función que devuelve un HTMLElement. 
function cambiar a app, renderizado de la cards*/
import llamadoApi from '../lib/apiMovie.js'
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export default function mostrarData() {
    console.log(llamadoApi);
    //navegar por los resultados de las pelis y hacer el llamado a las propiedades que necesito mostrar
    const vistaPrincipal= document.createElement('div');
    llamadoApi
        .then((data) => {
            
            vistaPrincipal.innerHTML="";
            data.forEach(movie => {
                const lista = document.createElement('div');//Se crea una const almacenar info del nodo que se va a crear
                console.log(movie);
                lista.classList.add('movie'); //se le da una clase
                lista.innerHTML =
                `
                <div class="card-info">   
                    <div class="card frontal">
                        <img class="img" src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
                        <h3 class="title">"${movie.title}"</h3>
                        <h4 class="fecha">"${movie.release_date}"</h4>
                    </div>
        
                </div>
                `
                //const contenedorCards = document.querySelector('#contenedor-cards');
            vistaPrincipal.appendChild(lista);
            })
        })
        .catch(error=>{
            console.log(error)
        })
    //contenedorCards.appendChild(vistaPrincipal);
    return vistaPrincipal;    
};

