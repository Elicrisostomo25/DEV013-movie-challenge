//Elementos HTML
import contenidoTarjeta from "../components/appContenido.js";

export default () => {
    const container = document.createElement('div');
    const template = 
    `
        <div class="vistaTarjeta" id="vistaTarjeta">
          <a href=""><i class="fa-solid fa-house"></i></a>
        </div>
    `;
container.innerHTML = template;
const renderDataPost= container.querySelector('#vistaTarjeta');
const movieLocation = window.location.hash;
const location = movieLocation.indexOf('=');
const locationSinHash= movieLocation.substring(location +1);
renderDataPost.appendChild(contenidoTarjeta(locationSinHash));
return container;
//contenido de la vista card
};
