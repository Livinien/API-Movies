

// API MOVIES


// RECUPERER LES INFORMATIONS DANS L'INPUT AVEC LA PROMESSE.

const input = document.getElementById("searchMovies");

let movies = [];

function fetchMovies() {

  input.addEventListener("keyup", () => {
    let valueInput = input.value;
    console.log(valueInput);

    movies = fetch(`https://api.themoviedb.org/3/search/movie?api_key=8ce9f8f28953d4d7871c62b5ac654555&query=${valueInput}`)
    .then(response => response.json());
    
    console.log(movies);
  })
};

//fetchMovies();


// RECUPERER LES FILMS LES MIEUX NOTES - PERMETTANT D'AFFICHER QUELQUES FILMS DE PRESENTATION SUR LA PAGE D'ACCUEIL

function getTopRatedMovies() {
  let movies = fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=8ce9f8f28953d4d7871c62b5ac654555`)
    .then(response => response.json());

    return movies;
}


// AFFICHER LES POSTERS DES FILMS

function moviesApi() {
console.log("movieApi");


  let movies = getTopRatedMovies();
  console.log(movies);

  for(let i = 0; i < movies.length; i++)  {
    console.log("i " + i);
    let apiMovies = document.querySelector(".movies");
    
    let movies = document.createElement("div");
    movies.setAttribute("class", "movie");
    apiMovies.appendChild(movies);
    
    
    let posterMovie = document.createElement("img");
    posterMovie.setAttribute("class", "posterMovie");
    posterMovie.src = movies[i].poster_path;
    movies.appendChild(posterMovie);
    
    let title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.textContent = movies[i].title;
    movies.appendChild(title);
  }
  
  console.log(movies);

}

moviesApi();
  

    
  
    
  
	


 