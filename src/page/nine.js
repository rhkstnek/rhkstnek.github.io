import Cre from './inside/CreateUser.js';
import User from './inside/UserList.js';

import { useRef, useState } from "react"

function Nine() {
  let abc = useRef(4);
  let bc = useRef('')
  const [info, setInfo] = useState([
    { id:1,name: '마린', number: '010-1111-1111',},
    { id:2,name: '메딕', number: '010-2222-2222',},
    { id:3,name: '화뱃', number: '010-3333-3333',},
  ])
  let [na1, setNa1] = useState()
  let [na2, setNa2] = useState()

  const chan1 = (e) => {
    setNa1(e.target.value)

  }
  const chan2 = (e) => {
    setNa2(e.target.value)
  }

  let clk = () => {
    info.push({id:abc.current, name: na1, number: na2 })
    setInfo([...info])
    abc.current += 1
    bc.current.focus();
    setNa1();
    setNa2();
    // if(abc.current == 6){
      //   document.querySelector('body').innerText='azzzzzz'
      // }
      console.log(info)
    }

  const toggleE = (e)=>{
   console.log(e.target)
   if(e.target.style.color=='white'){
    e.target.style.color='#000'
   }else
    e.target.style.color='white'
  }

  return (
    <div className="tC">

      <Cre clk={clk}
        chan1={chan1} chan2={chan2} na1={na1} na2={na2} bc={bc}
      />
      <User info={info} setInfo={setInfo} 
      toggleE={toggleE}
      />
    </div>
  )
}

export default Nine