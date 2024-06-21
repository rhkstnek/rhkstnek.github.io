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
      // kkk(abc.data.data.movies)
      // console.log(movie[0].id)
    })
  },[])

  
  return (
    
    <div>
      {/* {console.log(kkk)} */}
      <ul className="movie_area">
        {movie.map((a, i) => {
          let kk = movie[i].id
          // console.log(kk)
          return (
            <li key={i}>
              
              <img src={a.medium_cover_image} />
              {/* <p>{a.id}</p> */}
              <Link to={`/Mdetail/${kk}`}>{movie[i].title}</Link>
              {/* <Link to={`/Mdetail/${id}`}>{movie[i].title}</Link> */}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Six