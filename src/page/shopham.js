import { useState, useEffect } from "react";
import "./innovation.scss"
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase-config';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const ShopHam = ({ product }) => {
  const [look, setLook] = useState(false);

  // 로그아웃
  const logout = async () => {
    await signOut(auth)
  }

  let backpage = useNavigate();
  let mov = () => { backpage('/login') }

  // 로그인이름
  let [output, setOutput] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log('로그인')
        // console.log(user)
        setOutput(user)
      } else {
        // console.log("로그아웃 상태")
        mov()
      }
    })
  }, [auth]);

  return (
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
              <p style={{ wordBreak: "break-word" }}>{output.displayName}<span>님</span> </p>
              <p>반갑습니다.</p>
            </li>
            <li>
              <Link to='/shop'>상품리스트</Link>
            </li>
            <li>
              <Link to='/shopmade'>상품등록</Link>
            </li>
            <li>
              <Link to='/shopmy'>마이페이지</Link>
            </li>
            <li>
              <Link onClick={logout}>
                로그아웃
              </Link>
            </li>
          </ul>
        </div> : ''}
      </div>
      <div className="orange">

        <span>
          <Link to='/shop'>😀 Orange Market</Link>
        </span>
      </div>
    </>
  )
}


export default ShopHam