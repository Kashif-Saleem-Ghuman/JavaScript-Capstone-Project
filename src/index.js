import './style.css';
import { newLike, getLikes, likedItemID } from './Modules/likes.js';

// to fetch movie data from API
const getSeries = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const series = await response.json();
  return series;
};

// to get likes data from the API
const showSeries = async () => {
  await getSeries();
  getLikes();
};

showSeries();

likedItemID();

const displayMovies = async () => {
  const moviesArr = await getSeries();
  const mylikes = await getLikes();
  // to display movies on the page
  const moviesWrapper = document.querySelector('#moviesWrapper');
  moviesWrapper.innerHTML = '';

  moviesArr.forEach(async (movie) => {
    const displayLikes = await likedItemID(mylikes, movie.id);
    const html = `<article class="card">
    <img class="image-movie" src=${movie.image.medium} alt="movie">
    <div class="title-heart-wrapper">
    <h2 class="movie-title">${movie.name}</h2>
    <div class="lke-wrapper">
    <i id="${movie.id}" class="fa fa-heart"></i>
    <span id="likes" class="like-number likes">${displayLikes.toString()}</span>
    </div>
    </div>
    <div class="button-wrapper">
    <a href="#" type="submit">Comments</a>
    </div>
    </article>`;

    moviesWrapper.innerHTML += html;
  });
};

displayMovies();

// to hit the heart button and increase likes
const all = document.querySelector('body');

all.addEventListener('click', async (e) => {
  if (e.target.className === 'fa fa-heart') {
    // console.log(e.target.id);
    await newLike(e.target.id); // send data to api

    const mylikes = await getLikes(); // get the likes again with updated value

    const updatedLike = await likedItemID(mylikes, e.target.id); // update the likes value

    // insert the update like value in the like inner html
    e.target.nextElementSibling.innerHTML = updatedLike;
  }
});
