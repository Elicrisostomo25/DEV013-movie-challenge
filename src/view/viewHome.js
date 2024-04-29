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
    </div> 
    <div class="contenedor-cards" id="contenedor-cards">
      <a href="/#card"></a>
    </div>
    <footer> @Elisabeth Crisóstomo</footer>
`;
  container.innerHTML = template;
  const renderData = container.querySelector('#contenedor-cards');
  renderData.appendChild(mostrarData());
  return container;
  //contenido de la vista Home
};
