import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../row.css";
import {useNavigate , NavLink} from "react-router-dom"

function Recommandation({movieid,isLargeRow = false}) {
    
    const [loaded , setLoaded] = useState(false);
    const [recommadation , setRecommand] = useState([]);

    // https://api.themoviedb.org/3/movie/572154/recommendations?api_key=3a71581371ff2677d92895bd67589f44

   useEffect(()=>{
       async function get() {
           const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}/recommendations?api_key=3a71581371ff2677d92895bd67589f44`);
           
           setRecommand(res.data.results);
           setLoaded(true)
       }
       get();
   },[movieid]);

   function truncate(string , n){
    return string?.length > n ? string.substr(0,n-1)+"...":string;
}
    
  if (loaded) {
      return(
          <div className='row'>
              <h1 className='row__rec__extra'>You Must Like</h1>
              <div className='row__posters'>
              {recommadation.map((movie)=>(
                  (( isLargeRow && movie.poster_path) ||
                  (!isLargeRow && movie.backdrop_path)) &&(
                      <div>
                          <NavLink to={`/movie${movie.poster_path}/${movie?.title ||movie?.name || movie?.original_name}/${movie.overview}/${movie.vote_average}/${movie.release_date}/${movie.popularity}/${movie.vote_count}/${movie.id}/${movie.original_language}`}>
                      <img 
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/original/${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                alt={`${movie.name}`} /></NavLink>
  
                  <p style={{color:"white"}}>{truncate(movie?.title ||movie?.name || movie?.original_name , 20)}</p>
                  </div>
                  )
              ))}
              </div>
          </div>
      )
  }else{
    return(
        <div className='rec__body'>
        <h2>Loading ..... 🥱 {movieid}</h2>
        </div>
    )
  }
}

export default Recommandation;
