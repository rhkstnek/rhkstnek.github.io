import React from 'react';

function Cre({ chan1, chan2, na1, na2, bc, clk }) {


  return (
    <>
      < div className="in" >
        <input type="text" placeholder="이름" onChange={chan1} value={na1 || ''}
          ref={bc} />
        /<input type="text" placeholder="전화번호" onChange={chan2} value={na2 || ''} />
        <button onClick={clk}>등록</button>
      </div>
    </ >
  )
}

export default Cre;