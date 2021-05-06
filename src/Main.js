import React from 'react';
import './Main.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';
import Nav1 from './Nav1';

function Main() {
    return (
        <div>
            {/* <Nav/> */}
            <Nav1/>
            <Banner/>
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow id="originals"/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} isNotLarge id="trending"/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isNotLarge id="top-rated"/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isNotLarge id="action"/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isNotLarge id="comedy"/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isNotLarge id="horror"/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isNotLarge id="romance"/>
            <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} isNotLarge id="documentries"/>
            <br/><br/><br/><br/>
            <Footer/>
        </div>
    )
}

export default Main
