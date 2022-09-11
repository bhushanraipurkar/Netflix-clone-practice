import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Sentiment(props) {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + " ....." : string;
    }

  return <div>
    {
        props.data.map((i)=>{
            return(
                <>
                
                <Paper sx={{backgroundColor:"#26262646",color:"white",margin:"2%"}} elevation={3}>
                <Paper sx={{backgroundColor:"#26262646",color:"white"}}>
                {/* <Grid container sx={{
                                padding:"2%",
                                borderBottom:"1px solid black"
                             }}>
                                <Grid item xs={10}>
                                
    
                            <div>
                             
                            <h2 style={{color:"rgba(192, 192, 192, 0.877)",marginLeft:"3%",display:"inline"}}>REVIEW</h2> </div>
                                </Grid>
                                <Grid item xs={2}>
                                <h5 style={{marginLeft:"10%",color:"rgba(192, 192, 192, 0.877)"}}>SENTIMENT</h5>
                                </Grid>
                            </Grid>  */}

               
                            <div key={i.id}>
                            <Grid container  sx={{
                                padding:"5%",
                                borderBottom:"1px solid black"
                             }}>
                                <Grid item xs={10}>
                                
                            <p>{truncate(i.content,1000)}</p>
                            <div>
                             
                            <img style={{display:"inline",height:"35px",width:"35px",borderRadius:"20px",marginTop:"100px"}} src="https://cdn.vox-cdn.com/thumbor/tDepA4mL6z91gmGzhqflNMINUy0=/0x0:3840x2560/1200x800/filters:focal(1613x973:2227x1587)/cdn.vox-cdn.com/uploads/chorus_image/image/67710150/netflix_n_icon_logo_3840.0.jpg" alt={i.author}/>
                            <p style={{color:"rgba(192, 192, 192, 0.877)",marginLeft:"3%",paddingTop:"-20px",display:"inline"}}><b>{i.author || i.username}</b></p>                            </div>
                                </Grid>
                                <Grid item xs={2}>
                                   
                                    
                                <h3 style={{marginLeft:"20%",fontSize:"25px",color:"white" , borderLeft:"5px solid red" , padding:"10px"}}><Sentiment12 feed={i.content}/></h3>
                                </Grid>
                            </Grid> 
                            </div>
                       
                    
                </Paper>
                
            </Paper>
                </>
            )
        })
    }
  </div>;
}





 function Sentiment12(sent) {

    const [fine , setFine] = useState(false);
    const [ment , setMent] = useState("");
    useEffect(()=>{
        async function check(){
             const getting = await axios.post("https://srflask.herokuapp.com/predict",{"feedback":sent.feed});
             setMent(getting.data);
             setFine(true);
             return getting;
           
        };
        check();
    },[sent]);
  if (fine) {
    return(
        <>
        <p>{ment}</p>
        </>
    )
  } else {
      return(
          <>
          <h1>Loading .</h1>
          </>
      )
  }
}


export default Sentiment;
