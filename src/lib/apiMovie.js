//hacer el export para enlazar con otras paginas para usar fuciones y const.
//Guardo en constantes los datos fuertes de la API.
import mostrarData from '../components/app.js';
import contenidoTarjeta from '../components/appContenido.js';

const API_KEY= '63678adfb9fb329b14118688d228cc7c';
const URL_KEY= 'https://api.themoviedb.org/3';
const llamado_URL= URL_KEY + '/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc'+ API_KEY;
const IMG_URL= 'https://image.tmdb.org/t/p/w500/';

//solicitud GET(Request)
//const que sea igual al resultado de la petición
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzY3OGFkZmI5ZmIzMjliMTQxMTg2ODhkMjI4Y2M3YyIsInN1YiI6IjY2MDJjZWRkNjJmMzM1MDE3ZDU0YjU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jVy7rtwPFuZj3ATnIwsk87852ZIfDvmMXJ2SoMHDiqw'
    }
};
//llamadoApi(llamado_URL);

function llamadoApi(){      
return fetch(llamado_URL, options)
    .then(function(respuestaFetch){return respuestaFetch.json()})//convertir la respuesta en archivo JSON
    .then(data => {
        //mostrarData(data.results);
        //console.log(data.results);
        return data.results;
        
    })
    .catch(error => console.error(error));

}

export default llamadoApi;