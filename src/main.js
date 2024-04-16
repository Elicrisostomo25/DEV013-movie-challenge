import home from './view/viewHome.js';
import cards from './view/viewMovieDetail.js';
import mostrarData from './components/app.js'
import llamadoApi from './lib/apiMovie.js';
import contenidoTarjeta from './components/appContenido.js';

//crear una variable para traer la información de HTML y enlazar el contido de Home cuando esté cargado

const contenedorHtml = document.querySelector('#root');
const contenedorCards= document.querySelector('#contenedor-cards'); 
const VistaPosterior= document.querySelector('#vistaTarjeta');


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
window.addEventListener("load", () => {
    contenedorHtml.appendChild(home());
    init();
});


// contenedorCards.addEventListener('click', (e) => {
//   });


    //crear un evento para escuchar el click
    //cuando haga click ejecutar una función 
    //que se identifique que elemento fue clickeado 
    //que cambie de vista y se muestre el contenido de la tarjeta


