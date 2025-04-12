import "../Styles/header.scss"
import NavListItem from "./NavListItem"
import navListData from "../data/NavListData.jsx"
import Search from "./Search"
import Button from "./Button"
function Header () {
    return (
        <header>
            <a href="/" className="logo">Cinema</a>
            <ul className="nav">
                {
                    navListData.map(nav => {
                        return (
                        <NavListItem key={nav._id} nav={nav}/>
                        )
                    })
                }
            </ul>
            <Search />
            <Button 
                name="Sign in"
            />
        </header>
    )
}

export default Header