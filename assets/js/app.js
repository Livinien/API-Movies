

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

// function getTopRatedMovies() {
  
    
// };


// AFFICHER LES POSTERS DES FILMS

function moviesApi() {
console.log("movieApi");


  // let movies = getTopRatedMovies();
  // console.log("movies");
  // console.log(movies);


  let movies = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8ce9f8f28953d4d7871c62b5ac654555&language=en-US&page=1`)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    let movies = data.results;

    for(let i = 0; i < movies.length; i++)  {
      console.log("i " + i);
      console.log(movies[i].title);
      let apiMovies = document.querySelector(".movies");
      
      let moviesDiv = document.createElement("div");
      moviesDiv.setAttribute("class", "movie");
      apiMovies.appendChild(moviesDiv);
      
      
      let posterMovie = document.createElement("img");
      posterMovie.setAttribute("class", "poster_movie");
      posterMovie.src = "https://www.themoviedb.org/t/p/w188_and_h282_bestv2" + movies[i].poster_path;
      moviesDiv.appendChild(posterMovie);
      
      let title = document.createElement("h5");
      title.setAttribute("class", "title_movie");
      title.textContent = movies[i].title;
      moviesDiv.appendChild(title);
    }
    
  });

  console.log(movies);

};

moviesApi();
  

    
  
    
  
	


 