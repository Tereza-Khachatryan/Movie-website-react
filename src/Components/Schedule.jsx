import React, {useState, useEffect} from 'react'
import '../Styles/schedule.scss'
import moviesData from '../data/movieData.json'
import Card from './Card'

function Schedule (){
    const filterList = [
        {
            id: 1,
            name: 'All',
            active:true
        },
        {
            id: 2,
            name: 'Romance',
            active: false
        },
        {
            id: 3,
            name: 'Action',
            active:false
        },
        {
            id: 4,
            name: 'Thriller',
            active:false
        },
        {
            id: 5,
            name: 'Horror',
            active:false
        },
        {
            id: 6,
            name: 'Adventure',
            active:false
        }
    ]
    const [data, setData] = useState(moviesData)
    const [movies, setMovies] = useState([])
    const [filters, setFilters] = useState(filterList)

    useEffect(() => {
        setMovies(data)
    }, [data])

    const handleFilterMovies = category => {
        setFilters(
            filters.map(filter => {
                filter.active = false
                if(filter.name === category){
                    filter.active = true
                }
                return filter
            })
        )

        if(category === 'All'){
            setMovies(data)
            return
        }
        const filteredMovies = data.filter(movie => movie.category === category)
        setMovies(filteredMovies)
    }
    return(
        <section id="schedule" className='schedule'>
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Opening this week</h4>
                </div>
                <div className="row">
                    <ul className="filters">
                        {
                            filters.map(filter => (
                                <li 
                                    key={filter.id}
                                    className={`${filter.active ? 'active' : undefined}`}
                                    onClick={() => {handleFilterMovies(filter.name)}}
                                >
                                    {filter.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="row mt-5">
                    {movies && movies.length > 0 && 
                    movies.map(movie=> (
                        <Card key={movie._id} movie= {movie} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Schedule