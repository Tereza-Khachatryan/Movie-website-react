import React from "react";
import closeIcon from "../assets/Icons/close.png"
import "../Styles/movieModal.scss"

function Modal ({ movie, toggleModal, status }) {
    return (
        <div className={`movieModal ${status ? 'active' : undefined}`}>
            <a href="#" className="modalClose" onClick={toggleModal}>
                <img src={closeIcon} className="modalClose"/>
            </a>
            <iframe 
                width='1280'
                height='720'
                src={movie.video}
                title={`${movie.title} | Officital trailer`}
                frameBorder='0'
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            >
                
            </iframe>
        </div>
    )
}

export default Modal