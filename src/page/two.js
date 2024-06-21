import { useState } from "react";

function Two({rhkstn}) {
  let [modal, setModal] = useState(false);
  let [bl, setBl] = useState(0)
  let [jj, setJj] = useState(false)

  function blue(e){
    return setBl(e.target.value)
  }

  function red(e){
    return setBl(e.target.value * 60)
  }

  const Onflip = ()=> setJj((cuu) => !cuu) 

  const reset = ()=> setBl(0)

  return (
    <div>
      <div className="tC">
        <button className=" btn-open-modal"
        onClick={() => {
          setModal(  true )
          // console.log(modal)
        }} >▶ 모달 여기를 누르세요
        </button>
        {
          modal === true ? <Start setModal={setModal} modal={modal}/> : null
        }
        {/* {console.log(modal)} */}
      </div>
      <br/>
      <div className="tC">
        <br/>
          <h3>단위변환 ▼</h3>
          <label htmlFor="분">분</label>
          <input id="분" type="text"
          value={bl}
          onChange={blue} 
          disabled={jj == true}
          />
          <br/><br/>
          <label htmlFor="분1">시간</label>
          <input id="분1" type="text"
          value={bl/60}
          onChange={red}
          disabled={jj == false}
          />
          <br/>
          {/* <button onClick={rhkstn}>리셋</button> */}
          <hr></hr>
          <button onClick={reset}>리셋</button>
          -<button onClick={Onflip}>전환</button>
        </div>
    </div>

  )
}

function Start(props) {
  return (
    <>
      <div className="modal" >
        <div className="modal_body">
          <h2>모달창 제목<span onClick={() => {
          props.setModal(false)
        }}>X</span></h2>
          <p>모달창 내용 </p>
          <textarea disabled style={{width:'100%',marginTop:"25px", height:'150px',resize:'none'}}></textarea>
        </div>
      </div>
    </>
  )
}

export default Two;