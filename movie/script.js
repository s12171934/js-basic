let fetchMovieInfo = async (url) => fetch(url).then((res) => res.json());

let printMovie = async (url) => {
  let datas = await fetchMovieInfo(url);
  document.querySelector("main").innerHTML = "";
  for (let data of datas.results) {
    let color = "red";
    if (data.vote_average >= 6.0) color = "orange";
    if (data.vote_average >= 7.5) color = "green";

    document.querySelector("main").innerHTML += `
        <div class="movie">
            <img src="https://image.tmdb.org/t/p/w1280${data.poster_path}">
            <div class="movie-info">
                ${data.title}
                <span class=${color}>${data.vote_average}</span>
            </div>
            <div class="overview">
                <h3>OverView</h3>
                <p>${data.overview}</p>
            </div>
        </div>`;
  }
};

let searchMovie = (elem) => {
  let search = elem.firstElementChild.value;
  let url;
  if (search == "") {
    url =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
  } else {
    url = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="${search}"`;
  }
  printMovie(url);
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  searchMovie(event.target);
});
let url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
printMovie(url);

document.forms;
