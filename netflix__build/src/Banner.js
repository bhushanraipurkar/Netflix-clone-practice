import React, { useEffect, useState } from 'react';
import "./banner.css";
import axios from "./axios";
import requests from './Requests';
import {NavLink} from "react-router-dom";

function Banner() {

    const [movie , setMovie] = useState([]);
    const [movieprop , setMovieprop] = useState([]);

    useEffect(()=>{
        async function getchData(){
            const request =await axios.get(requests.fetchNetflixOriginals);
             setMovie(
                 request.data.results[
                     Math.floor(Math.random()*request.data.results.length - 1)
                 ]
             );
                 return request;
        };
        getchData();
    },[]);
    

    // if description is more than 250 words than add substring as "..."
    function truncate(string , n){
        return string?.length > n ? string.substr(0,n-1)+"...":string;
    }
    return (
        <header
        className='banner'
        style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
        }}
        >
           <div className="banner__contents">
               <h1 className="banner__title" >{movie?.title ||movie?.name || movie?.original_name}</h1>
                   <div className="banner__buttons">
                        <NavLink to={`/movie${movie.poster_path}/${movie?.title ||movie?.name || movie?.original_name}/${movie.overview}/${movie.vote_average}/${movie.first_air_date}/${movie.popularity}/${movie.vote_count}/${movie.id}/${movie.original_language}`}><button className="banner__button" >Play</button></NavLink>
                        <button className="banner__button">My List</button>
                   </div>
                   <h1 className="banner__description">{
                       truncate(movie?.overview,200)
                   }</h1>
                   </div> 
                    <div className="banner__fadeEffect" /> {/* This div will just give bottom fade effect . so when you want 
                    to add little faded effect in bottom of the divison than literally add empty div with css name and go and check the properties inside css file .  */}
        </header>
    )
}

export default Banner;
