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
    <div className='tC'>
      <img src={cinema.large_cover_image} />
      {/* {cinema.id} */}
      <br/><br/>
      <div>{cinema.description_intro}</div>
    </div>
  )
}
export default Mdetail;