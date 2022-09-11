import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./crew.css";

function Crew(props) {

    const [cast , setCast] = useState([]);
    const [crew , setCrew] = useState([]);
    const [loading , setLoading] = useState(false);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function details(){
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=3a71581371ff2677d92895bd67589f44`);
            setCast(result.data.cast);
            setCrew(result.data.crew);
            setLoading(true);
            return result;
        };
        details();
    },[props])

   

    const truncate = (string , n) =>{
        return string?.length > n ? string.substr(0 , n-1)+"...":string;
    }


    if(loading){
        return (
            <div>
                <div className='crew__heading'>
                        <h1 className='crew__heading__identifier'>Crew</h1>
                    </div>
                <div className='crew__crew'>
                    {cast.map((i,key)=>{
                        return(
                            <div>
                                {i.profile_path && (
                                    <>
                                    <div className='card' key={key}>
                                    <img
                                    className='crew__images'
                                    src={`${base_url}${i.profile_path}`}
                                    />
                                    
                                        <div className='card__inner'>
                                        <h2 > {truncate(i.character , 12)}</h2>
                                        <p >{truncate(i.name , 20)}</p>
                                        <p style={{color:"#ffd700"}}><b>{truncate(i.known_for_department, 10)}</b></p>
                                        </div>
                                    
                                    </div>
                                    
                                    </>
                                )}
                                
                            </div>
                        )
                    })}
                </div>
    
    
                <div className='cast__heading'>
                        <h1 className='cast__heading__identifier'>Cast</h1>
                    </div>
                <div className='cast__cast'>
                    {crew.map((i,key)=>{
                        return(
                            <div key={key}>
                                {i.profile_path && (
                                    <>
                                    <img
                                    className='cast__images'
                                    src={`${base_url}${i.profile_path}`}
                                    />
                                    <h3 className='cast__name'>{i.name}</h3>
                                    <p className='cast__job'>{truncate(i.job,15)}</p>
                        
                                    </>
                                )}
                                
                            </div>
                        )
                    })}
                </div>
    
            </div>
        )
    }

    else{
        return(
            <h2 style={{color:"white"}}>Keep Scrolling !!!</h2>
        )
    }

    // return (
    //     <div>
    //         <div className='crew__heading'>
    //                 <h1 className='crew__heading__identifier'>Crew</h1>
    //             </div>
    //         <div className='crew__crew'>
    //             {cast.map((i,key)=>{
    //                 return(
    //                     <div>
    //                         {i.profile_path && (
    //                             <>
    //                             <div className='card' key={key}>
    //                             <img
    //                             className='crew__images'
    //                             src={`${base_url}${i.profile_path}`}
    //                             />
                                
    //                                 <div className='card__inner'>
    //                                 <h2 > {truncate(i.character , 12)}</h2>
    //                                 <p >{truncate(i.name , 20)}</p>
    //                                 <p style={{color:"#ffd700"}}><b>{truncate(i.known_for_department, 10)}</b></p>
    //                                 </div>
                                
    //                             </div>
                                
    //                             </>
    //                         )}
                            
    //                     </div>
    //                 )
    //             })}
    //         </div>


    //         <div className='cast__heading'>
    //                 <h1 className='cast__heading__identifier'>Cast</h1>
    //             </div>
    //         <div className='cast__cast'>
    //             {crew.map((i,key)=>{
    //                 return(
    //                     <div key={key}>
    //                         {i.profile_path && (
    //                             <>
    //                             <img
    //                             className='cast__images'
    //                             src={`${base_url}${i.profile_path}`}
    //                             />
    //                             <h3 className='cast__name'>{i.name}</h3>
    //                             <p className='cast__job'>{truncate(i.job,15)}</p>
                    
    //                             </>
    //                         )}
                            
    //                     </div>
    //                 )
    //             })}
    //         </div>

    //     </div>
    // )
}

export default Crew
