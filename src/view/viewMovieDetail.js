//Elementos HTML
export default () => {
    const container = document.createElement('div');

const template = `

    <button id="inicio" class="volverInicio" >Volver a Inicio</button>
    <p> Contenido Película </p> 
`;
container.innerHTML = template;

return container;
//contenido de la vista card
};
