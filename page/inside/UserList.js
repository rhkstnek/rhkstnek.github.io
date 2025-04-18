import React from 'react';

const User = ({info, setInfo, toggleE}) => {
  
  

  return (
    <>
      <div className="out">
        <br />
        {info.map((a, i) => {
          const del = ()=>{
            info.splice(i,1)
            setInfo([...info])
          }
          return (
            <div key={i}>
              <div style={{ lineHeight: '1.5' }}><b
              style={
                {cursor:'pointer'}
              }
               onClick={toggleE}
               >{info[i].name}</b> : ({info[i].number})   
                <button onClick={del
                  // info.splice(i,1)
                  // setInfo([...info])
                }>삭제</button>
              </div> 
            </div>
          )

        })}
      </div>
    </>
  )
}

export default User