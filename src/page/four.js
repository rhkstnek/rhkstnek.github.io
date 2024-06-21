import { useRef, useState } from "react";

function Four() {
  const ex = useRef()
  let [idd, setId] = useState(''); // input
  let [txt, setTxt] = useState(['할일1','할일2','할일3']); // 일


  let fuc1 = (event) => {
    setId(event.target.value)
    // event.target.value = '';
  }

  return (
    <div className="tC">
      <div className="todo">
        <h2>To Do List<button className="allDel" onClick={(e)=>{
          let copy3 = [] 
          // copy3 = []
          setTxt(copy3)
          ex.current.focus();
        }}>전체삭제</button></h2>
        
        <div className="inputBox">
          <input autoFocus type="text" value={idd} placeholder="할일 입력"
            onChange={
              fuc1
            }
            ref={ex}
            />
          <input type="button" value="추가" onClick={
            () => {
              let copy2 = [...txt]
              copy2.push(idd)
              setTxt(copy2)
              setId('')
              ex.current.focus()
            }
          } />
        </div>
        <hr />
        <div >
          <ul>
            <TdList  />
          </ul>
        </div>
      </div>
    </div>
  )

  function TdList() {
    return (
      txt.map((aa, ii) => {
        return (
          <li key={ii}>
            <span>
              {txt[ii]}
            </span>
            <b onClick={() => {
              let copy = [...txt]
              copy.splice(ii, 1)
              setTxt(copy)
            }}>X</b>
          </li>
        )
      })
    )
  }
}

export default Four;