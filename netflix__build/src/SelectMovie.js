import React, { useEffect, useState } from 'react';
import "./selectmovie.css";
import Nav from './Nav';
import { useParams } from "react-router-dom";
import VideoPlayer from './VideoPlayer';
import Upcomming from './Charecteristics/Upcomming';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Crew from './Charecteristics/Crew';
import Recommandation from './Charecteristics/Recommandation';
import Sentiment from './Charecteristics/Sentiment';

function SelectMovie(props) {

    const params = useParams();
    const [reviews , setReviews] = useState([]);

    const feed = `https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=3a71581371ff2677d92895bd67589f44`;

    useEffect(()=>{
        async function fetching(){
            const resultt = await axios.get(feed);
            //console.log(resultt.data.results);
            setReviews(resultt.data.results);
        };
        fetching();
    },[])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + " ....." : string;
    }

   


    async function sentiment(){
        const op =await axios.post("https://srflask.herokuapp.com/predict",{feedback:"this is good movie."});
        return op.data;
    }
    
    return (
        <div>
            <Nav />
            <header
                className='banner'
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${params.imgpath}")`,
                    backgroundSize: "cover",
                    height: "100%",
                    backgroundPosition: "center center",
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title" >{params.title}</h1>
                    <div className="banner__buttons">
                        <button  className="banner__button">Play</button>
                    </div>
                    <p className="sm__head__description"> {params.releasedate} </p>
                    <p className="sm__description" >{params.overview}</p>
                    




                </div>
                <div className='sm__rating'>
                    <h1>{params.rating} </h1><p>/10</p><br />
                    <span className='sm-rating-bottom'>count <b>{params.votecount}</b></span>
                </div>
                <div className="banner__fadeEffect" />
            </header>

            <VideoPlayer  link={params.id} lang={params.lang} />

            <Crew id={params.id}/><br/><br/><br/><br/><br/><br/>
            <Recommandation movieid={params.id} isLargeRow="true"/><br/><br/>
            <Upcomming />

            <div>
               
            </div>

            <Sentiment data={reviews}/>
        </div>
    )
}

export default SelectMovie;
