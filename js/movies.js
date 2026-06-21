let movies = [];

fetch("data/movies.json")
  .then(res => res.json())
  .then(data => {
    movies = data;
    renderMovies(movies);
  });

function renderMovies(list) {
  const container = document.getElementById("moviesContainer");
  container.innerHTML = "";

  list.forEach(m => {
    container.innerHTML += `
      <div class="movie" onclick="openMovie(${m.id})">
        <img src="${m.poster}">
        <p>${m.title}</p>
      </div>
    `;
  });
}

function getMovieById(id) {
  return movies.find(m => m.id == id);
}

function openMovie(id) {
  location.href = "movie.html?id=" + id;
}
