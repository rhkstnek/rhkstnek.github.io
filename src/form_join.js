import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth, db } from './firebase-config';
import { Link, useNavigate } from 'react-router-dom';
import { ref, set } from 'firebase/database';

const Join = ({}) => {
  const [registerName, SetRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  
  let backpage = useNavigate();
  let mov = () => { backpage('/login') }

  const register = async ( displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      const user = userCredential.user;

      await updateProfile(auth.currentUser, { displayName: registerName });

      await set(ref(db, `users/${user.uid}`), {
        displayName: registerName,
        email: user.email,
        createdAt: new Date().toISOString()
        
    });
      console.log(displayName)
      alert('계정 생성완료')
      mov()
      console.log(auth.currentUser);
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
            <input type="text" placeholder="홍길동" 
            onChange={(event) => {
              SetRegisterName(event.target.value)
            }} 
            />
          </div>
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="홍길동@naver.com" onChange={(event) => {
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
            <input type="submit" value=" Join" onClick={register} />
          </div>
          <div className="signup-link">Are you a member?  <Link to='/login'>Login now</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Join