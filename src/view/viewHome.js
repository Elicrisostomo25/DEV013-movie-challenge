//Elementos HTML
import mostrarData from "../components/app.js";

export default () => { 
const container = document.createElement('div');

const template = `

    <header>
        <h1>PELISPEDIA</h1>
    </header>

    <div class="menu">

        <a href="/#"></a>

        <label class="genre" for="filtro"> Genero: </label>
        <select class = "genero" name="filtro" id="filtro">
            <option value="">--Seleccione--</option>
        
        </select>
    
        <label class="order" for="ordenar"> Ordenar: </label>
        <select class = "ordenar" name="orden" id="orden">
            <option value="">--Seleccione--</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
        </select>
        
        <button id="boton-limpiar">Limpiar</button>
        <div class="bx-buscador">
            <input type="text" id="buscador" placeholder=" Buscar por nombre..">
            <i class='bx bx-search'></i>
        </div>
      
    </div>
   
    <div class="contenedor-cards" id="contenedor-cards">
        <a href="/#card"></a>
    </div>
    
    <button type="button" id="boton">Página 1</button>

    <footer> @Elisabeth Crisóstomo</footer>

`;
container.innerHTML = template;
const renderData= container.querySelector('#contenedor-cards')
renderData.appendChild(mostrarData());
return container;
//contenido de la vista Home
};