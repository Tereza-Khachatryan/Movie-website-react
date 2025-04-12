import "../Styles/movieContent.scss"
import Button from "./Button";

function MovieContent ({ movie }) {
    return (
        <div className={`content ${movie.active ? 'active' : undefined}`}>
            <img src={movie.titleImg} alt="Movie Titile" className="movie-title" />
            <h4>
                <span>{movie.year}</span>
                <span>
                    <i>{movie.ageLimit}</i>
                </span>
                <span>{movie.length}</span>
                <span>{movie.category}</span>
            </h4>
            <p>{movie.description}</p>
            <div className="button">
                <Button 
                    name='Book' 
                    color='#ff3700' 
                    bgColor='#ffffff'
                />
                <Button 
                    name="Add to my list"
                />
            </div>
        </div>
    )
}

export default MovieContent