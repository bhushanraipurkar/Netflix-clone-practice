import React, { useEffect, useState } from 'react';
import axios from "../axios";
import "../row.css";

function Upcomming() {
    const [list , setList] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
       async function comming (){
           const resultsss = await axios.get("/movie/upcoming?api_key=3a71581371ff2677d92895bd67589f44");
           setList(resultsss.data.results);
           return resultsss;
       };
       comming();
    },[]);

    function truncate(string,i){
       return string?.length > i ? string.substr(0,i-1)+"...":string;
    }
    
    return (
        <div className='row'>
            <h2 style={{borderLeft:"10px solid red", padding:"10px"}}>Upcomming</h2>
            <div className='row__posters'>
            {
               list.map((i)=>{
                   return(
                       <div key={i.id}>
                       
                       <header
                       
                       className='upc__banner'
                       style={{
                           backgroundImage:`url("${base_url}${i.backdrop_path}")`,
                           backgroundSize:"cover",
                           backgroundPosition:"center center"
                       }}>
                           <div className="upc__banner__contents">
                           <h2 className="upc__banner__contents__title">{truncate(i.title || i.original_title,20)}</h2>
                           <p className='upc__banner__p'>{truncate(i.overview,150)}</p> 
                           <div className='ipc__fix'>
                           <h1 className='upc__banner__h1'>{i.vote_average} </h1><p className='upc__banner__pp'>/10</p><br/> 
                           </div> 
                           </div>

                       </header>

                       </div>
                   )
            }) 
            }
            
            </div>
        </div>
    )
}

export default Upcomming
