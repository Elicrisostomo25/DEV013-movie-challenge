//Elementos HTML
import contenidoTarjeta from "../components/appContenido.js";

export default () => {
    const container = document.createElement('div');

    const template = 
    `
        <div class="vistaTarjeta" id="vistaTarjeta">

            <button class= "regresar-inicio"> Regresar a Inicio </button> 
        </div>
    `;
container.innerHTML = template;
const renderDataPost= container.querySelector('#vistaTarjeta');
renderDataPost.appendChild(contenidoTarjeta());
return container;
//contenido de la vista card
};
