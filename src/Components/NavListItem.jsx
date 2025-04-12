import "../Styles/navListItem.scss"

function NavListItem ({ nav }) {
    return (
        <li>
            <a href={nav.link}>{nav.name}</a>
        </li>
    )
}

export default NavListItem