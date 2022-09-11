import React, { useEffect, useState } from 'react';
import "./row.css";
import axios from "./axios"; // Note that here we included our local file instead of global axios cause we already predefined the path for each request .
import {useNavigate , NavLink} from "react-router-dom"

function Row({title , fetchUrl , isLargeRow = false}) {
    const History = useNavigate();
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=> {
        async function getch(){
            const list = await axios.get(fetchUrl)
            setMovies(list.data.results);
            return list;
        }
        getch();
    },[fetchUrl]);  //anytime you depend on any props than this must be specified in dependency array

    function truncate(string , n){
        return string?.length > n ? string.substr(0,n-1)+"...":string;
    }


    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
            {movies.map((movie) => (
               (( isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) &&(
                    <div>
                        <NavLink to={`/movie${movie.poster_path}/${movie?.title ||movie?.name || movie?.original_name}/${movie.overview}/${movie.vote_average}/${movie.release_date}/${movie.popularity}/${movie.vote_count}/${movie.id}/${movie.original_language}`}>
                    <img 
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt={`${movie.name}`} /></NavLink>

                <p>{truncate(movie?.title ||movie?.name || movie?.original_name , 20)}</p>
                </div>
                )
            ))}
            </div>
        </div>
    )
}

export default Row
