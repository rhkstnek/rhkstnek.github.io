import { useState } from 'react';
import "./new2.scss";

function Calc() {
  let [bl, setBl] = useState('') // 회색칸
  let [box, setBox] = useState('0') // input value
  let [name, setName] = useState('') // input name
  let [giho, setGiho] = useState(''); // 기호

  // 수버튼
  function numBtn(n) {
    if (box === '0') {
      box = ''
    }
    setBox(box + n.target.textContent)
  }
  // 사칙버튼
  function fourBtn(e) {
    setBl(box + e.target.textContent)
    setName(box)
    setBox('')
    giho = e.target.textContent
    setGiho(giho)


  }
  // =
  function end() {
    switch (giho) {
      case '+':
        box = (Number(name) + Number(box))
        setBox(box)
        setBl(box + '+')
        break;
      case '-':
        box = (Number(name) - Number(box))
        setBox(box)
        setBl(box + '-')
        break;
        case '*':
        box = (Number(name) * Number(box))
        setBox(box)
        setBl(box + '*')
        break;
        case '/':
        box = (Number(name) / Number(box))
        setBox(box)
        setBl(box + '/')
        break;
    }
  }

  const dot = (e)=>{
    if (box.includes('.')) {
      console.log(111)
      setBox(box)
    }else{
      setBox(box + e.target.textContent)
      console.log(22)
    }
  }


  return (
    <>
      <div className="calc_wrap">
        <input className="" value={bl || ''} disabled />
        <input className="" name={name} value={box || ''} onChange={(ev) => {

        }} />
        <div className="row">
          <button onClick={numBtn}>7</button>
          <button onClick={numBtn}>8</button>
          <button onClick={(e) => { numBtn(e) }}>9</button>

          <button onClick={fourBtn} className='four'>+</button>
        </div>

        <div className="row">
          <button onClick={numBtn}>4</button>
          <button onClick={numBtn}>5</button>
          <button onClick={numBtn}>6</button>
          <button onClick={fourBtn} className='four'>-</button>
        </div>

        <div className="row">
          <button onClick={numBtn}>1</button>
          <button onClick={numBtn}>2</button>
          <button onClick={numBtn}>3</button>
          <button onClick={fourBtn} className='four'>*</button>
        </div>

        <div className="row">
          <button onClick={numBtn}>0</button>
          <button onClick={dot}>.</button>

          <button onClick={(e) => {
            end()
          }} className='result'>=</button>

          <button onClick={fourBtn} className='four'>/</button>
        </div>
        <div >
          <button className='clear' onClick={() => {
            setBl('')
            setBox('0')
            setName('')
          }}>Clear</button>
        </div>

      </div>
    </>
  )
}


export default Calc;