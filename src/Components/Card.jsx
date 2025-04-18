import React from "react";
import "../Styles/card.scss"
import addIcon from "../assets/CardIcons/add.png"
import playIcon from "../assets/CardIcons/playIcon.png"

function Card({ movie }){
    return (
        <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="movie-card">
                <img src={movie.previewImg} alt="Preview Image" className="img-fluid"/>
                <p>{movie.length} | {movie.category}</p>
                <div className="content">
                    <h4>{movie.title}</h4>
                    <div className="card-icons">
                        <img src={addIcon} />
                        <img src={playIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card