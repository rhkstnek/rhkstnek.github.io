import React, { useState, useRef, useEffect, useCallback } from 'react';

function Eight() {
  const scores = {
    '✊': 1,
    '✋': 0,
    '✌': -1,
  };
  let [com, setCom] = useState('✊');
  let [my, setMy] = useState('');
  let [txt, setTxt] = useState();
  let [btnDisabled, setBtnDisabled] = useState(false);
  const interval = useRef(null);

  const changeHand = useCallback(() => {
    if(com==='✊'){
      setCom('✌')
    } else if(com==='✌'){
      setCom('✋')
    } else {
      setCom('✊')
    }
  }, [com]);
  
  let hand1 = (my) => () =>{ 
    setMy(my);
    setBtnDisabled(true);
    clearInterval(interval.current);
    
    const diff = scores[my] - scores[com];
    if (diff === 0) {
      setTxt('비겼다');
    } else if ([-1, 2].includes(diff)) {
      setTxt('이겼다');
    } else {
      setTxt('졌다..');
    }

    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
      setBtnDisabled(false);
      setMy()
    }, 1000);
  }

  useEffect(() => {
    interval.current = setInterval(changeHand, 100);
    return () => {
      clearInterval(interval.current);
    };
  }, [changeHand]);


  return (

    <div>
      <div className="tC" style={{ zoom: '1.1' }}>
        <h3>가위바위보</h3><br/>
        <div>
          <div className="team_area game1">
            <div >
              <p>
                {
                  com
                }
              </p>
              <span>💻<br/>Com</span>
            </div>
            <div >
              <p>{my}</p>
              <span>🙎‍♂️<br/>You</span>
            </div>
          </div>
          <br />

          결과 : { txt}
          <br /><br />

          <div className="game1_btm">
            <button disabled={btnDisabled} onClick={hand1('✊')}>✊</button>
            <button disabled={btnDisabled} onClick={hand1('✌')}>✌</button>
            <button disabled={btnDisabled} onClick={hand1('✋')}>✋</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eight