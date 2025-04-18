import { useDispatch  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 삽입 } from "../store";
import { useState } from "react";
import { useRef } from 'react';

function El1() {
  const navigate = useNavigate();

  // let bc = useRef('')
  const dispatch = useDispatch()

  let [input1, setInput1] = useState()
  const inin = (e) =>{
    setInput1(e.target.value)
  }

  return (
    <div className="tC">
      <br/><br/>
      <input type="text" 
        onChange={inin} value={input1|| ''}
        // ref={bc} 
        autoFocus placeholder="게시글 제목입력 하기"
      /> <button onClick={()=>{
        dispatch(삽입(input1))
        setInput1('')
        navigate('/board');
        // bc.current.focus();
      }}>입력</button>
    </div>
  )
}

export default El1;