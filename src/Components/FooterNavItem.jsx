import arrowIcon from "../assets/FooterIcons/arrow.png"
import '../Styles/footerNavItem.scss'

function FooterNavItem ({ name }){
    return (
        <li>
            <img src={arrowIcon}/> {' '}
            <a href="#">{name}</a>
        </li>
    )
}

export default FooterNavItem

