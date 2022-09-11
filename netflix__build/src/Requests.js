// typically we would store in (process.env.API_Key)
const API_KEY = "3a71581371ff2677d92895bd67589f44";

const request = {
    fetchTrending :`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// Actually  what happen first it will run our main Axios.connect string automatically 
// after that request come to this file and then the above listed link will add as a substring to 
// like https://themoviedb.org/3/${fetchTrending} included API_KEY too .

export default request;

// https://developers.themoviedb.org/3/movies/get-movie-videos