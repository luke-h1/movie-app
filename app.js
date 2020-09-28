const button = document.getElementById('button')
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=7a78372c9666466c223f25edb1c630f5&language=en-US`
const popularResults = document.getElementById('grid');
async function getPopularMovies(){
  const res = await fetch(`${API_URL}`);
  const data = await res.json();
  showPopularMoviesDOM(data);
}


function showPopularMoviesDOM(data){
  let output = '';
  data.results.forEach((item) => { 
    console.log(item);
    output += `
    <div class="card">
      <div class="card-img--container"></div>
      <img src="${`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}" alt="" />
      <div class="card-info--container">
        <p>Title: ${item.original_title}</p>
        <span class="badge badge-primary">Popularity: ${item.popularity}</span>
        <span class="badge badge-success">Votes: ${item.vote_count}</span>
        <span class="badge badge-success">Release Date: ${item.release_date}</span>

        </div>
  </div>
    `
  }); 
  popularResults.innerHTML = output;

}




// EVENT LISTENERS 
button.addEventListener('click', getPopularMovies)