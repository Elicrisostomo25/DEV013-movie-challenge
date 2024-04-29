import home from './view/viewHome.js';
import cards from './view/viewMovieDetail.js';
import mostrarData from './components/app.js'


//crear una variable para traer la información de HTML y enlazar el contido de Home cuando esté cargado
const contenedorHtml = document.querySelector('#root');
const contenedorCards= document.querySelector('#contenedor-cards'); 

const init = () => {
    window.addEventListener('hashchange', () => {
        contenedorHtml.innerHTML = "";
        const hash = window.location.hash;
        const [route, movieId] = hash.split("="); 
        switch (route) {
            case "#card":
                contenedorHtml.appendChild(cards(movieId));
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
// btnRegresar.addEventListener('click', ()=>{
//     window.location.hash = 'home';
// })