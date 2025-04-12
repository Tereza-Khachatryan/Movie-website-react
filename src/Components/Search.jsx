import "../Styles/search.scss"

function Search () {
    return (
        <div className="search">
            <input type="text" placeholder="Search" /> 
            <ion-icon name="search-outline"></ion-icon>
        </div>
    )
}

export default Search