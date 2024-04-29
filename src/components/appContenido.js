import llamadoApi from '../lib/apiMovie.js';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export default function contenidoTarjeta(id) {
  const vistaPosterior = document.createElement('div');
  vistaPosterior.classList.add('movie', 'movie2'); //se le da una clase
  llamadoApi
    .then(data => {
      const numeroId= parseInt(id);
      const peliculaSeleccionada = data.find(movie=> movie.id === numeroId);
      console.log(peliculaSeleccionada);
      
        const cardPosterior = document.createElement('div');
        cardPosterior.classList.add('card-Posterior');

        const cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info2');

        const img = document.createElement('img');
        img.classList.add('img1', 'img2');
        img.setAttribute('src', IMG_URL + peliculaSeleccionada.poster_path);
        img.setAttribute('alt', peliculaSeleccionada.title);

        // const img2 = document.createElement('img');
        // img2.classList.add('img2');
        // img2.setAttribute('src', IMG_URL + peliculaSeleccionada.poster_path);
        // img2.setAttribute('alt', peliculaSeleccionada.title);
        const contenedor= document.querySelector('.vistaTarjeta');
        contenedor.style.backgroundImage=`url(${IMG_URL + peliculaSeleccionada.poster_path})`;

        const title = document.createElement('h3');
        title.classList.add('title1');
        title.textContent = peliculaSeleccionada.title;
        
        const fecha = document.createElement('h4');
        fecha.classList.add('fecha1');
        fecha.textContent = `Año de Lanzamiento: ${peliculaSeleccionada.release_date}`;

        const ul = document.createElement('ul');
        const votacion = document.createElement('li');
        votacion.classList.add('votacion');
        votacion.textContent = `Votación: ${peliculaSeleccionada.vote_average}`;

        const resumenLi = document.createElement('li');
        resumenLi.classList.add('resumen');
        resumenLi.textContent = `Resumen: "${peliculaSeleccionada.overview}"`;

        ul.appendChild(votacion);
        ul.appendChild(resumenLi);

        cardInfo.appendChild(title);
        cardInfo.appendChild(fecha);
        cardInfo.appendChild(ul);

        cardPosterior.appendChild(img);
        cardPosterior.appendChild(cardInfo);
        vistaPosterior.appendChild(cardPosterior);
  
      })
  return vistaPosterior;
};    
