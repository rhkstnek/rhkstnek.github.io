import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, } from 'firebase/auth';
import { auth } from './firebase-config';
import { Link } from 'react-router-dom';

const Join = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  // const [loginEmail, setLoginEmail] = useState('');
  // const [loginPassword, setLoginPassword] = useState('');

  // const [user, setUser] = useState({}); 

  // useEffect(
  //   () => { const unsubscribe = onAuthStateChanged(auth, (currentUser) => { setUser(currentUser); }); return () => unsubscribe(); }, []
  // );

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      // console.log(user)
      alert('가입되었습니다.')
    } catch (error) {
      console.log(error.message);
      alert('ID 또는 비밀번호를 확인해주세요')

    }
  }

  return (
    <div className='form_wrap'>
      <div className='wrapper'>
        <div className="title"><span>Signup Form</span></div>
        <div className='form' >
          <div className="row">
            <i className="fas fa-user"></i>
            <input  type="text" placeholder="홍길동@naver.com" onChange={(event) => {
              setRegisterEmail(event.target.value)
            }} />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="6자리 이상" onChange={(event) => {
              setRegisterPassword(event.target.value)
            }} />
          </div>
          
          <div className="row button">
            <input type="submit" value=" Join" onClick={register}/>
          </div>
          <div className="signup-link">Are you a member?  <Link to='/login'>Login now</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Join