import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Two from './page/two.js';
// import Three from './page/three.js';
import Four from './page/four.js';
import Five from './page/five.js';
import Six from './page/six.js';
// import Detail from './page/detail.js';
import Last from './page/last.js';
import Mdetail from './page/mdetail.js';
import Seven from './page/seven.js';



function App() {
  const rhkstn = false
  // const [rhkstn, setR] = useState(false);
  // function rhkstn(){
  //   console.log('haha');
  // }

  return (
    <div>
      <nav style={{ marginBottom: '25px' }}>
        <Link to="/">홈</Link>
        <Link to="/two">모달</Link>
        {/* <Link to="/three">쇼핑몰</Link> */}
        <Link to="/four">할일</Link>
        <Link to="/five">코인</Link>
        <Link to="/six">영화</Link>
        <Link to="/seven">팀원</Link>
        <Link to="/Last">날씨</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <div className="tC" >
              <img src={process.env.PUBLIC_URL + `/img/reactLogo.gif`} alt='logo' style={{ width: '25%' }} />
              <p>Front-End</p>
            </div>
          </>
        } />
        <Route path="/two" element={<Two rhkstn={rhkstn}/>}  />
        {/* <Route path="/three" element={ <div><ul className="sh_list"><Three 
        /></ul></div> } >
        </Route> */}
        {/* <Route path='/detail' element={<Detail />} /> */}
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/Six" element={<Six  />}>
        </Route>
        <Route path="/Mdetail/:id" element={<Mdetail />} />
        <Route path="/Seven" element={<Seven  />}/>
        

        
        <Route path="/Last" element={<Last />} />
      </Routes>
    </div>
  );
}

export default App;
