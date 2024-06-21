import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Three() {
  let [data1, setData1] = useState([]);
  // let [count, setCount] = useState(0);
  // if(count == 0){
  axios.get('https://codingapple1.github.io/shop/data2.json')
  .then((e)=>{
    setData1(e.data)
    // console.log(data1)

  })
  .catch(()=>{
    alert('데이터 주소를 확인해주세요!~')
  })
  // }
  return (
    data1.map((aa, ii)=>{
      return( 
        
          <li key={ii}>
            <Link to='/detail'>
            <img src={process.env.PUBLIC_URL + `./img/shoes${ii+1}.jpg` } alt='shoes{ii+1}'/>
            </Link>
            <div className="sh_txt">
              <span>{data1[ii].price}</span>
              <p>info : {data1[ii].content}</p>
              <h4>{data1[ii].title}</h4>
            </div>
            {/* <Outlet></Outlet> */}
          </li>
      )
    })
  )

}

export default Three;