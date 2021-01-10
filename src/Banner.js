import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css';
const Banner = () => {
 
    const [movie, setMovie] = useState([]);

    useEffect(() => {

     async function fetchData(){

      const request = await axios.get(requests.fetchNetflixOrginals);
      setMovie(request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)]
          );
          return request;
     }
     fetchData();
    },[])
 console.log(movie);

    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
             backgroundposition:"center center",
        }}
        >
       
          <div className="banner_contents">
          <h1 className="banner_title"> 
          {movie?.title || movie?.name || movie?.original_name}
          </h1>
            <div className="banner_buttons">
          <button className="banner_button"> play </button>
          <button className="banner_button"> My List</button>
            </div>
            <div className="banner_description">
            {movie?.overview}
            </div>
            <div className="banner_fadeBottom"></div>
          </div>
        </header>
    );
};

export default Banner;