import React, {useState} from "react"
import "../Styles/playButton.scss"
import playIcon from "../assets/Icons/play-button.png"
import Modal from "./Modal"

function PlayButton({ movie }) {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <>
            <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
                <a href="#" className="playBtn" onClick={toggleModal}>
                    <img src={playIcon} className="play-icon"/>
                </a>
                <p>Watch Trailer</p>
            </div>
            {movie.active && <Modal movie={movie} status={modal} toggleModal={toggleModal}/>}
        </>
    )
}

export default PlayButton 