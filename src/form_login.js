import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase-config';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ref, get } from "firebase/database";

const Login = ({ }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  let backpage = useNavigate();
  let mov = () => { backpage('/shop') }

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const user = userCredential.user;

      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        console.log(`환영합니다, ${userData.displayName}님!`);
        mov()
        return userData.displayName;
      } else {
        console.error("사용자 데이터가 Realtime Database에 없습니다.");
      }
    } catch (error) {
      alert('ID 또는 비밀번호를 확인해주세요')
    }
  }

  return (
    <div className='form_wrap'>
      <div className='wrapper'>
        <div className="title"><span>Login Form</span></div>
        <div className='form' >
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="admin123@gmail.com" onChange={(event) => {
              setLoginEmail(event.target.value)
            }} />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="admin123" onChange={(event) => {
              setLoginPassword(event.target.value)
            }} />
          </div>

          <div className="row button">
            <input type="submit" value="Login" onClick={login} />
          </div>
          <div className="signup-link">Not a member?  <Link to='/join'>Signup now</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Login