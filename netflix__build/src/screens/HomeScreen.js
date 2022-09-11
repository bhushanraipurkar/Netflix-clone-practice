import React from 'react';
import "../homeScreen.css";
import Nav from '../Nav';
import Banner from '../Banner';
import request from '../Requests';
import Row from '../Row';
import Footer from '../Charecteristics/Footer';

function HomeScreen() {
    return (
        <div className='homeScreen' >
          <Nav/>  
          <Banner />
         <Row title="Trending Now" fetchUrl={request.fetchTrending} isLargeRow="true"/>
         <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
         <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
         <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
         <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
         <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
         <Row title="Documentries" fetchUrl={request.fetchDocumentries}/>
         <Footer/>
        </div>
    )
}

export default HomeScreen
