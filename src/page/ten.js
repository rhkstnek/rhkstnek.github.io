import { useSelector, useDispatch  } from "react-redux";
import { 함수1,car } from "../store";


function Ten() {
  const dispatch = useDispatch()
  let sky = useSelector((sta)=>{ return sta });

  return(
    <div className="tC">
      <button onClick={()=>{
        dispatch(함수1())
      }}>버틍</button> 
      {sky.user}
      
      <br/><br/>

      <button onClick={()=>{
        
        dispatch(car(
          
        ))
      }}>버틍</button>
      {sky.kim}
    </div>
    
  )
}

export default Ten;