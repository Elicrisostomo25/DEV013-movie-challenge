import home from './view/viewHome.js';
import cards from './view/viewMovieDetail.js';
// import mostrarData from './components/app.js'
// import llamadoApi from './lib/apiMovie.js';
// import contenidoTarjeta from './components/appContenido.js';

//crear una variable para traer la información de HTML y enlazar el contido de Home cuando esté cargado
const contenedorHtml = document.querySelector('#root');
const contenedorCards= document.querySelector('#contenedor-cards'); 
const VistaPosterior= document.querySelector('#vistaTarjeta');
const btnRegresar= document.querySelector('regresar-inicio')

const init = () => {
    window.addEventListener('hashchange', () => {
        contenedorHtml.innerHTML = "";
        switch (window.location.hash) {
            case " ":
                contenedorHtml.appendChild(home());
                break;
            case "#card":
                contenedorHtml.appendChild(cards());
                break;
            default:
                contenedorHtml.appendChild(home());
        }
    });
};
window.addEventListener('load', () => {
    contenedorHtml.appendChild(home());
    init();
});

//seleccionar al elemento esta quieres dar click 
//luego se le agrega el evento click 
//y se le pasa la función que quiero que cumpla una vez clickeado
//hacer la ruta para mostrar la informacion
//
const rutaPeliculas = 
contenedorCards.forEach(movie=> {
    //se itera por cada pelicula y se le agrega el evento click con un listener
    movie.addEventListener('click', () => {
        window.location.hash = '#cards';
    
    });
return rutaPeliculas;
})


btnRegresar.addEventListener('click', ()=>{
    window.location.hash = 'home';
})