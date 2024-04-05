import home from './view/viewHome.js';
import cards from './view/viewMovieDetail.js';
/* Recomendamos usar src/main.js, como punto de entrada de tu aplicación. Aquí es donde recomendamos implementar su SPA (Single Page Application).
*/
//crear una variable para traer la información de HTML y enlazar el contido de Home cuando esté cargado

const contenerdorHtml = document.querySelector('#root');

const init = () => {
    window.addEventListener('hashChange', () => {
        contenerdorHtml.innerHTML = "";
        switch (window.location.hash) {
            case "":
                contenerdorHtml.appendChild(home());
                break;
            case "/#card":
                contenerdorHtml.appendChild(cards());
                break;
            default:
                contenerdorHtml.appendChild(home());
                break;
        }
    });
};

window.addEventListener("load", () => {
    contenerdorHtml.appendChild(home());
    init();
});
