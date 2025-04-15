import '../Styles/trendCard.scss'
import calendarIcon from "../assets/CardIcons/calendar.png"

function TrendCard ({slide}){
    return (
        <div className="trend-card">
            <img src={slide.previewImg} className="img-fluid" />
            <a href="#">
                Add to calendar <img src={calendarIcon}/>
            </a>
        </div>
    )
}

export default TrendCard