import React, {useState , useEffect} from 'react'
import axios from './axios';
import './Row.css'
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload,faPlus,faShareAltSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faGoogle,faTelegram,faTwitter,faWhatsapp} from '@fortawesome/free-brands-svg-icons';

// const base_url="https://www.themoviedb.org/t/p/w440_and_h660_face";
const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow,isNotLarge,id}) {

    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            // console.log(movie);
            movieTrailer(movie?.name||movie?.title||movie?.original_name||"")
            .then((url)=>{
                 const urlParams=new URLSearchParams(new URL(url).search);
                 setTrailerUrl(urlParams.get('v'));
                //  console.log(setTrailerUrl);
            })
            .catch((error)=>console.log(error));
        }
    }

    return (
    <div>
        <div className="row" id={id}>
            {/* title */}
            <h2>{title}</h2>

            <div className='row-posters'>
                {movies.map(movie=>(
                    <div>
                        <img 
                            key={movie.id} 
                            onClick={()=>handleClick(movie)}
                            className={`row-poster ${isLargeRow &&'row-poster-large'} ${isNotLarge &&'row-poster-not-large'}`} 
                            src={`${base_url}${
                                isLargeRow?movie.poster_path:movie.backdrop_path
                            }`} 

                            alt={movie.name}
                        />
            
                        <div className='overview hide'>
                            <h2 className='title'>{movie?.name||movie?.title||movie?.original_name||""}</h2>
                            <div className='properties'>
                                <p>Ratings : {movie.vote_average}</p>
                                <p>Lang : {movie.original_language}</p>
                            </div>
                            <p>{movie.overview}</p>
                            <ul className='icon-container'>
                                <li><FontAwesomeIcon icon={faDownload} className='icon' /></li>
                                <li><FontAwesomeIcon icon={faPlus} className='icon' /></li>
                                <li className='share'>
                                    <FontAwesomeIcon icon={faShareAltSquare} className='icon' />
                                    <ul>
                                        <li><FontAwesomeIcon icon={faFacebookF} className='icon' /></li>
                                        <li><FontAwesomeIcon icon={faWhatsapp} className='icon' /></li>
                                        <li><FontAwesomeIcon icon={faTelegram} className='icon' /></li>
                                        <li><FontAwesomeIcon icon={faTwitter} className='icon' /></li>
                                        <li><FontAwesomeIcon icon={faGoogle} className='icon' /></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    </div>
    )
}

export default Row
