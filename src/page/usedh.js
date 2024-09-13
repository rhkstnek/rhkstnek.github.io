import { useState } from "react";
import "./innovation.scss"
import { Link } from 'react-router-dom';

const UsedH = ({product}) => {

  const [look, setLook] = useState(false);

  return(
    <>
    <div className="ham_box">
        <button onClick={() => {
          if (look === false) {
            setLook(true)
          } else {
            setLook(false)
          }
        }}>
          <img src={process.env.PUBLIC_URL + `/img/hamburger.png`} alt="햄버거" />
        </button>
        {look == true ? <div className="info">
          <ul>
            <li>
              <Link to='/used'>로그인<br/>(추가예정)</Link>
            </li>
            <li>
              <Link to='/made'>글작성</Link>
            </li>
            <li>
              <Link to='/usedmy'>마이페이지</Link>
            </li>
          </ul>
        </div> : ''}
      </div>
      <div className="olive">
        <img className="mod" src={process.env.PUBLIC_URL + `/img/olives.png`} alt="마켓로고" />
        <span> Olive Market</span>
      </div>
      </>
  )
}


export default UsedH