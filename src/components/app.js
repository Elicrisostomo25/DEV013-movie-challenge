/*Este archivo contiene un componente ejemplo que muestra cómo podemos representar un componente en función que devuelve un HTMLElement. 
function cambiar a app, renderizado de la cards*/
import llamadoApi from '../lib/apiMovie.js';
import cards from '../view/viewMovieDetail.js';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export default function mostrarData() {
  const vistaPrincipal = document.createElement('div');
  vistaPrincipal.classList.add('movie'); //se le da una clase
  llamadoApi
    .then((data) => {
      vistaPrincipal.innerHTML = "";
      data.forEach(movie => {
        //console.log(movie);
        const movieElement = document.createElement('div')
        movieElement.classList.add('card-frontal');
        movieElement.setAttribute('id', `${movie.id}`);
        movieElement.innerHTML +=
          ` 
            <img class="img" src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
            <h3 class="title">${movie.title}</h3>
            <h4 class="fecha">${movie.release_date}</h4>
          `
        vistaPrincipal.appendChild(movieElement);
        })
        const movies = vistaPrincipal.querySelectorAll('.card-frontal');
        movies.forEach(movie=>{
          movie.addEventListener('click', () => {
            const movieId= movie.getAttribute('id');
            console.log(movieId)
            window.location.hash = `#card=${movieId}`;
            console.log(window.location.hash);
          })
        })
      })

  return vistaPrincipal;
};


