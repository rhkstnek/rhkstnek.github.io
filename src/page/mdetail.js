import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Mdetail() {
  let [cinema, setCinema] = useState([]);
  const { id } = useParams()
  const backpage = useNavigate();
  useEffect(() => {
    
    
    axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)  
      .then((kill) => {
        console.log(kill)
        setCinema(kill.data.data.movie)
      })
  }, [])

  //  목록
  const moving = () => { backpage('/movie'); };
  

  return (
    <div className='md_wrap'>
        <div className='md_box'>
          <div>
            <img src={cinema.large_cover_image} />
            <p onClick={()=>{moving()}}>⬅ 뒤로가기
            </p>
            
          </div>
          <ul>
            <li><span>{cinema.title}</span></li>
            <li>
              <em>genres</em> : {[cinema.genres].join(', ')}
            </li>
            <li><em>runtime</em> : {cinema.runtime}</li>
            <li><em>rating</em> : {cinema.rating}</li>
            <li><em>info</em><br/><br/>{cinema.description_intro}</li>
          </ul>
        </div>
    </div>
  )
}



export default Mdetail;