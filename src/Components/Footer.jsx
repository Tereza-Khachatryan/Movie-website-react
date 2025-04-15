import '../Styles/footer.scss'
import instaIcon from "../assets/FooterIcons/instagram.png"
import twitterIcon from "../assets/FooterIcons/twitter.png"
import facebookIcon from "../assets/FooterIcons/facebook.png"
import youtubeIcon from "../assets/FooterIcons/youtube.png"
import FooterNavItem from './FooterNavItem'

function Footer(){
    const usefulLinks = [
        'Home',
        'Movies',
        'My list',
        'Terms of service',
        'Privacy Policy'
    ]
    const locations = [
        'Dolorum optio',
        'Non rem rerum',
        'Cras fermentum odio',
        'Justo eget',
        'Fermentum iaculis'
    ]
    return (
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href='/' className='logo d-flex align-items-center'>
                                <span>CINEMA</span>
                            </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Optio quia fuga debitis nam ipsam iusto tenetur harum officia cupiditate tempora asperiores,
                                quae voluptatem omnis eveniet dolores reprehenderit alias labore sequi.
                            </p>
                            <div className="social-links mt-3">
                                <a href='#' className='twitter'>
                                    <img className='a' src={twitterIcon}/>
                                </a>
                                <a href='#' className='facebook'>
                                    <img className='a' src={facebookIcon}/>
                                </a>
                                <a href='#' className='instagram'>
                                    <img className='a' src={instaIcon}/>
                                </a>
                                <a href='#' className='youtube'>
                                    <img className='a' src={youtubeIcon}/>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful links</h4>
                            <ul>
                                {usefulLinks.map(link => {
                                   return (
                                        <FooterNavItem key={link} name={link}/>
                                   )
                                })}
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Cinemas</h4>
                            <ul>
                                {locations.map(link => {
                                    return (
                                        <FooterNavItem key={link} name={link}/>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact us</h4>
                            <p>
                                Street Name <br/>
                                city name, State 123456
                                <br/>
                                Australia <br/>
                                <strong>Phone:</strong> +1 111 000 10
                                <br/>
                                <strong>Email:</strong> info@example.ru
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; CopyRight{' '}
                    <strong>
                        <span>IT Company</span>
                    </strong>
                    . All Rights Reerved
                </div>
                <div className="credits">
                    Designed by <a href='#'>Design Studio</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer