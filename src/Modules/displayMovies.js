// const moviesWrapper = document.querySelector('#moviesWrapper');

// const getMovies = async () => {
//   await fetch('https://api.tvmaze.com/shows')
//     .then((response) => response.json())
//     .then((data) => {
//       const movies = data.splice(0, 15);
//       movies.forEach((movie) => {
//         const html = `<article class="card">
//     <img class="image-movie" src=${movie.image.medium} alt="movie">
//     <div class="title-heart-wrapper">
//     <h2 class="movie-title">${movie.name}</h2>
//     <div class="lke-wrapper">
//     <i class="far fa-heart heart"></i></i>
//     <span id="likes" class="like-number">5</span>
//     </div>
//     </div>
//     <div class="button-wrapper">
//     <a href="#" type="submit">Comments</a>
//     </div>
//     </article>`;

//         moviesWrapper.innerHTML += html;
//       });
//     });
// };

// getMovies();

// export default getMovies;
