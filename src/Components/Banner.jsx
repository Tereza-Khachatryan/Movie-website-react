import React, { useState, useEffect } from "react";
import bgImg from '../assets/movies/transformer.jpg'
import "../Styles/banner.scss";
import MovieContent from "./MovieContent";
import MovieDate from "./MovieDate";
import PlayButton from "./PlayButton";
import MovieSwiper from "./MovieSwiper";

import moviesData from '../data/movieData.json'

function Banner() {
    const [movies, setMovies] = useState(moviesData);
    const fetchData = () => {
        // fetch("/public/data/movieData.json")
        //     .then((res) => res.json())
        //     .then((data) => setMovies(data))
        //     .catch((e) => console.log(e.message));
    };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const handleSlideChange = id => {
        let newMovies = movies.map(movie => {
            movie.active = false
            if(movie._id === id){
                movie.active = true
            } 
            return movie
        })
        setMovies(newMovies)
    }

    return (
        <div className="banner">
            {
                movies && movies.length > 0 && movies.map(movie => (
                    <div className="movie" key={movie._id}>
                        <img src={movie.bgImg} 
                            alt="Background Image" 
                            className={`bgImg ${movie.active ? 'active' : undefined}`}
                        />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <MovieContent movie={movie}/>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <MovieDate movie={movie}/>
                                    <PlayButton movie={movie}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {movies && movies.length > 0 && (
                <MovieSwiper slideChange={handleSlideChange} slides={movies} />
            )}
        </div>
    );
}

export default Banner;
