//Elementos HTML
//Renderizado de data HTML
export default () => { 
const container = document.createElement('div');

const template = `

    <header>
        <h1>PELISPEDIA</h1>
    </header>


    <div>

        <a href="/#">HOME</a>

        <label class="genre" for="filtro"> Genero: </label>
        <select class = "genero" name="name" id="filtro">
            <option value="">--Seleccione--</option>
        
        </select>
    
        <label class="order" for="ordenar"> Ordenar: </label>
        <select class = "ordenar" name="name" id="orden">
            <option value="">--Seleccione--</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
        </select>
        
        <button id="boton">Limpiar</button>

        <input type="text" id="myInput" placeholder="Buscar por nombre..">
      
    </div>
   
    <div id="cards">
        <a href="/#card">card</a>
        <button type="button"id="card"> Tarjeta </button>
    </div>
    
    <button type="button" id="boton">Página 1</button>

    <footer> @Elisabeth Crisóstomo</footer>

`;
container.innerHTML = template;

return container;
//contenido de la vista Home
};