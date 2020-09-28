const button = document.getElementById('button')
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=7a78372c9666466c223f25edb1c630f5&language=en-US`

async function getPopularMovies(){
  const res = await fetch(`${API_URL}`);
  const data = await res.json();
  console.log(data);
}




// EVENT LISTENERS 
button.addEventListener('click', getPopularMovies)