import React ,{useEffect, useState}from 'react';
import YouTubePlayer from 'react-player/youtube';
import axios from 'axios';
import request from './Requests';
import "./videoplayer.css";

function VideoPlayer(props) {
    const [key, setKey] = useState("");
    const[load , setLoad] = useState(false);
    useEffect(() => {
       async function getting(){
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${props.link}/videos?api_key=3a71581371ff2677d92895bd67589f44&language=${props.lang}`);
           setKey(result.data.results[0].key)
           setLoad(true);
       }
       getting();
    }, [props])
    return (
        <div className="main__player"><br/>
            <h1 style={{fontSize:"40px",borderLeft:"10px solid red",padding:"10px",margin:"2%",}}>Video</h1>
            
            <div className='main__main__player'>
                {
                    load?
                    <YouTubePlayer
           width={'500px'}
           className="main__video__player" 
           url={`https://www.youtube.com/watch?v=${key}`}
           />
                    :
                    "Not Found"
                }
           
           </div>
        </div>
    )
}

export default VideoPlayer
