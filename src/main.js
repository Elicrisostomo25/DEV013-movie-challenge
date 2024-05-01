import home from './view/viewHome.js';
import cards from './view/viewMovieDetail.js';

//crear una variable para traer la información de HTML y enlazar el contido de Home cuando esté cargado
const contenedorHtml = document.querySelector('#root');

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
