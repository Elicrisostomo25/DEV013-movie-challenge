
//Guardo en constantes los datos fuertes de la API.
const API_KEY= '63678adfb9fb329b14118688d228cc7c';
const URL_KEY= 'https://api.themoviedb.org/3';
const llamado_URL= URL_KEY + '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'+ API_KEY;
const IMG=;

//crear una función para hacer el llamado a la Api
const cargarPeliculas = async()=>{
//fetch (es una función) ayuda a traer la información del llamado de la api, hay que usar la URL
const respuesta = await fetch(llamado_URL); 
//const que sea igual al resultado de la petición

console.log(respuesta);
};

cargarPeliculas();

 //function 
 //Requiero y llamo a la API con y lo exporto a mis rutas.

 //Llamado a todas las movies.
 //Llamado a una movie en particular a través de su id
 //Llamado al buscador de movies
