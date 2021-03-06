const button = document.getElementById('button')
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=xxxxxxxxxxx&language=en-US`
const popularResults = document.getElementById('grid');
const searchBtn = document.getElementById('btn-search')

function   clearFields(){
  popularResults.innerHTML = ''; 
}

function showError(message){
  const errorEl = document.getElementById('error');
  errorEl.innerHTML = message;
  setTimeout(() => { 
    errorEl.innerHTML = '';
  }, 2000)
}

// get popular movies 
async function getPopularMovies(){
  // const res = await fetch(`${API_URL}`);
  const res = await fetch('data.json')
  const data = await res.json();
  showPopularMoviesDOM(data);
}

// show popular movies in DOM 
function showPopularMoviesDOM(data){
  clearFields();
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


// get specific user query
async function getMovieQuery(){
  clearFields(); 
  const query = document.getElementById('searchbtn')
  const input = query.value; 
  if(input === ''){
    showError('Enter a movie')
  }else { 
    const QUERY_URL = `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=xxxxxxxxxxxxx&language=en-US&page=1&include_adult=false`; 
    const response = await fetch(`${QUERY_URL}`) 
    const json = await response.json(); 
    showQueryData(json);   
  }
}

// show specific user query in DOM 
function showQueryData(json){
  console.log(json);
  let final = '';
  json.results.forEach((item) => { 
    final+=`
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
  }) 
  popularResults.innerHTML = final;

}




// EVENT LISTENERS 
button.addEventListener('click', getPopularMovies)
searchBtn.addEventListener('click', getMovieQuery)