import './style.css';
import { newLike, getLikes, likedItemID } from './Modules/likes.js';
import { newComment, getComments } from './Modules/comments.js';

// to fetch movie data from API
const getSeries = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const series = await response.json();
  const data = series.splice(0, 15);
  return data;
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

const popup = async () => {
  await displayMovies();
  const moviesArr = await getSeries();
  const popup = document.querySelector('#popup-wrapper');
  const btns = document.querySelectorAll('.button-wrapper');

  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      document.querySelector('header').style.display = 'none';
      document.querySelector('section').style.display = 'none';
      document.querySelector('footer').style.display = 'none';
      popup.style.display = 'block';
      popup.innerHTML = `<div class="popup"><i class="fa fa-times fa-3x" aria-hidden="true"></i><div class="movie-data"><img class="pop-img" src=${moviesArr[i].image.medium} alt="movie"/><div><h1>${moviesArr[i].name}</h1><h2>${moviesArr[i].genres}</h2><p>${moviesArr[i].summary}</p></div></div>
      <form><input id="username" type="text" placeholder="name" /><input id="comment" type="text" placeholder="comment" /><input id="comment" type="submit" value="submit" /></form>
      <div class="comments-section"></div></div>`;
      const cross = document.querySelector('.fa-times');
      cross.addEventListener('click', () => {
        popup.style.display = 'none';
        document.querySelector('header').style.display = 'block';
        document.querySelector('section').style.display = 'flex';
        document.querySelector('footer').style.display = 'flex';
      });

      const showComments = async () => {
        const allComments = await getComments(i);
        allComments.forEach((comment) => {
          if (comment.username != '[object Object]' && comment.comment != '[object Object]') {  // eslint-disable-line
            const cmSec = document.querySelector('.comments-section');
            const div = document.createElement('div');
            div.innerHTML = `<h4>${comment.username}</h4><br/><p>${comment.comment}</p>`;
            cmSec.appendChild(div);
          }
        });
      };
      const form = document.querySelector('form');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.querySelector('#username').value;
        const comment = document.querySelector('#comment').value;
        await newComment(i, username, comment);
        document.querySelector('.comments-section').innerHTML = '';
        await showComments();
        form.reset();
      });
      showComments();
    });
  });
};
popup();