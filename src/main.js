import home from '.view/viewHome.js';
import { example2 } from './.js';
import data from './data/Movies.js';
/* Recomendamos usar src/main.js, como punto de entrada de tu aplicación. El boilerplate incluye este archivo para conectar o montar el componente App en el DOM. De esta manera podemos hacer test unitarios de nuestros componentes que necesitemos que están conectados a una DOM global.
Aquí es donde recomendamos implementar su SPA (Single Page Application).
*/
//crear una variable para 
const vistaHome = document.querySelector('#contenido');
window.addEventListener(load,()=>{
vistaHome.appendChild(home());
});

