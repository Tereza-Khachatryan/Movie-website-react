import React from "react"
import "../Styles/main.scss"
import Schedule from "./Schedule"
import Trend from "./Trend"
import Blog from "./Blog"

function Main(){
    return (
        <main>
            <Schedule />
            <Trend />
            <Blog />
        </main>
    )
}

export default Main