import "../Styles/playButton.scss"
import playIcon from "../assets/Icons/play-button.png"

function PlayButton({ movie }) {
    return (
        <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
            <a href="#" className="playBtn">
                <img src={playIcon} className="play-icon"/>
            </a>
            <p>Watch Trailer</p>
        </div>
    )
}

export default PlayButton 