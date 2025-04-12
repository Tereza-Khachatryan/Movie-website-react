import "../Styles/button.scss"

function Button({ name, bgColor="#ff3700", color="#ffffff"}) {
    return (
        <a 
            href="#" 
            className="mainBtn" 
            style={{color: color, background: bgColor}}
        >
            {name}
        </a>
    )
}

export default Button