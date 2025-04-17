import React, { useState } from "react"

import "../Styles/header.scss"
import NavListItem from "./NavListItem"
import navListData from "../data/NavListData.jsx"
import Search from "./Search"
import Button from "./Button"

function Header ({ scroll }) {
    const [navList, setNavList] = useState(navListData)
    const [openMenu, setOpenMenu] = useState(false)

    const handleNavOnClick = id => {
        const newNavList = navList.map(nav => ({
          ...nav,
          active: nav._id === id
        }));
        setNavList(newNavList);
        setOpenMenu(false)
      };

      const toggleMenu = () => setOpenMenu(!openMenu)

    return (
        <>
            <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
                <div className={`burger ${openMenu ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <a href="/" className="logo">Cinema</a>

                <ul className={`nav ${openMenu ? 'open' : ''}`}>
                    {
                        navList.map(nav => {
                            return (
                            <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick}/>
                            )
                        })
                    }
                </ul>
                <Search />
                <Button 
                    name="Sign in"
                />
        </header>
        </>
    )
}

export default Header