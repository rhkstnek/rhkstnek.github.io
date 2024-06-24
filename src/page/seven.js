import { useEffect, useState } from "react";


function Seven() {
  let [soccer, setSoccer] = useState([ 'A','B','C','D','E','1','2','3','4','5' ]);
  let [box1 , setB1] = useState([]);
  let [box2 , setB2] = useState([]);
  
  let ran = Math.floor(Math.random()* soccer.length)
  
  
  let output = ()=>{
    if(soccer.length % 2 == 0){
      if(box1.length > 4){
        box1.push(...[soccer.splice(0,0)])
        document.querySelector('.teamOne').textContent='인원: 없음';
      }else{
        box1.push(...[soccer.splice(ran,1)])
        setB1([...box1])
        // console.log(ran)
        // console.log(soccer.length)
      }
    }else{
        box2.push(...[soccer.splice(ran,1)])
        setB2([...box2])
        // console.log('b'+ran)
        // console.log('B'+soccer.length)
    }

  }

  return(
    <div className="tC">
      <button onClick={output}>팀 정하기</button> ← 클릭
      <br/><br/>
      <span className="teamOne">인원: 
      {soccer.map((a,i)=>{
        return(
              <span key={i} style={{paddingLeft:'7px'}}>
                {/* <b style={{color:'red'}}>{soccer[a]}</b> */}
                {soccer[i]},
              </span>
              
        )
      })}
      </span>
      <br/><br/>
      <div className="team_area">  
        <div className="team_a">
          <p>A팀</p>
          <b> 
            {box1.map((q,w)=>{
              return(
                <span key={w}> {box1[w]}, </span>
              )
            })}
            </b>
        </div>    
        <div className="team_b">
          <p>B팀</p>
          <b> 
            {box2.map((q,w)=>{
              return(
                <span key={w}> {box2[w]}, </span>
              )
            })}
            </b>
        </div>
      </div>
    </div>
      
  )
}

export default Seven;