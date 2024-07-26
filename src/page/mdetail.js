import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Mdetail() {
  let [cinema, setCinema] = useState([]);
  // const x = useParams()
  const { id } = useParams()
  // console.log(id)
  useEffect(() => {
    
    
    axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=
    ${id}`)
      .then((kill) => {
        console.log(kill)
        setCinema(kill.data.data.movie)
      })
  }, [])

  

  return (
    <div className='md_wrap'>
        <div className='md_box'>
          <div>
            <img src={cinema.large_cover_image} />
            <a href='/movie'>⬅ 뒤로가기
              
            </a>
            
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

function Kkk(){
  return <div>치킨내놔</div>
}

export default Mdetail;