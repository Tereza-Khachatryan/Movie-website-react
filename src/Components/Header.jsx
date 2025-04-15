import React, { useState } from "react"

import "../Styles/header.scss"
import NavListItem from "./NavListItem"
import navListData from "../data/NavListData.jsx"
import Search from "./Search"
import Button from "./Button"

function Header ({ scroll }) {
    const [navList, setNavList] = useState(navListData)

    const handleNavOnClick = id => {
        const newNavList = navList.map(nav => ({
          ...nav,
          active: nav._id === id
        }));
        setNavList(newNavList);
      };
    return (
        <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
            <a href="/" className="logo">Cinema</a>
            <ul className="nav">
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
    )
}

export default Header