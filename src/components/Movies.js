
//Guardo en constantes los datos fuertes de la API.
const api_Key = 63678adfb9fb329b14118688d228cc7c;
//crear una función para hacer el llamado a la Api
const cargarPeliculas = ()=>{
//fetch (es una función) ayuda a traer la información del llamado de la api, hay que usar la URL
const respuesta = fetch('https://api.themoviedb.org/3/collection/collection_id?language=en-US');
console.log(respuesta);
};

//Requiero y llamo a la API con y lo exporto a mis rutas.

//Llamado a todas las movies.
//Llamado a una movie en particular a través de su id
//Llamado al buscador de movies.
