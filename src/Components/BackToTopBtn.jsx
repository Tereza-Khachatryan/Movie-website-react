import arrowUp from '../assets/FooterIcons/arrowUp.png'
import '../Styles/backToTopBtn.scss'

function BackToTopBtn ({ scroll }){

    const backToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <a
            className={`back-to-top ${scroll > 100 ? 'active' : undefined}`}
            onClick={backToTop}        
        >
            <img src={arrowUp} className='arrowUp'/>
        </a>
    )
}

export default BackToTopBtn