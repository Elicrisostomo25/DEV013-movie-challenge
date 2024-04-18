//Elementos HTML
import contenidoTarjeta from "../components/appContenido.js";

export default () => {
    const container = document.createElement('div');

    const template = 
    `
        <div class="vistaTarjeta" id="vistaTarjeta">
            <a href="/#home></a>
                i class='bx bx-home'></i>
            <p> Contenido Película </p> 
        </div>
    `;
container.innerHTML = template;
const renderDataPost= container.querySelector('#vistaTarjeta');
renderDataPost.appendChild(contenidoTarjeta());
return container;
//contenido de la vista card
};
