import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom';

function Six() {
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
          <ul className="movie_area">
          {movie.map((a, i) => {
            let kk = movie[i].id
            // console.log(kk)
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
        </ul> : <div className="tC"><img style={{width:'40%'}} src={process.env.PUBLIC_URL + `/img/loading2.png`} alt='loading' /></div>
        }
      </div>
      
    </div>
  )
}
export default Six