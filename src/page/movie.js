import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom';

function Movie() {
  let [movie, setMovie] = useState([])
  let [start, setStart] = useState(false)
  
  // let ran = Math.floor(Math.random()*9+1)
  // console.log(ran)
  useEffect(() => {
    axios.get(`https://yts.mx/api/v2/list_movies.json?minimum_rating=1&sort_by=year`)
    .then((abc) => {
      setMovie(abc.data.data.movies)
      setStart(true)
      console.log(abc.data.data.movies)
    })
  },[])

  
  return (
    
    <div>
      <div>
        {start != ''?  
          <div className="movie_wrap">
          <p className="">Movie List</p>
          <ul className="movie_area">
          {movie.map((a, i) => {
            let kk = movie[i].id
            return (
              <li key={i}>
                <Link  to={`/Mdetail/${kk}`} className="mva">
                <div className="mvd">
                  <img src={a.medium_cover_image} />
                </div>
                <p>{movie[i].title}</p>
                </Link>
                {/* <Link to={`/Mdetail/${id}`}>{movie[i].title}</Link> */}
              </li>
            )
          })}
        </ul>
          <div className="page">
            <Link to="" >1</Link>
            <Link to="" >2</Link>
          </div>
        </div> 
        : <div className="movie_loading"><img style={{width:'40%'}} src={process.env.PUBLIC_URL + `/img/loading2.png`} alt='loading' /></div>
        }
      </div>
      
    </div>
  )
}
export default Movie