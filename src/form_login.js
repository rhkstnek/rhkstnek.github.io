import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // const [registerEmail, setRegisterEmail] = useState('');
  // const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  let backpage = useNavigate();
  let mov = () => {backpage('/shop')}
  let count = 0;

  const [user, setUser] = useState({});

  // useEffect(() => { 
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => { setUser(currentUser); }); return () => unsubscribe(); }, []
  // );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("로그인 상태")
        
      } else {
        console.log("로그아웃 상태")
      }
      // setUser(true)
    })
  }, [auth]);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user)
      console.log(user.uid +'ABC')
      count++;
      console.log(count + 'B')
      if(count >= 1){
        mov()
      }
    } catch (error) {
      console.log(error.message);
      alert('ID 또는 비밀번호를 확인해주세요')
    }
  }

  const logout = async () => {
    await signOut(auth)
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
            <input type="submit" value="Login" onClick={login}/>
          </div>
          <div className="signup-link">Not a member?  <Link to='/join'>Signup now</Link></div>
        </div>


        {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
        {/* <div>
        <h3>로그인</h3>
        <input type='text' onChange={(event) => {
          setLoginEmail(event.target.value)
        }} />
        <input type='text' onChange={(event) => {
          setLoginPassword(event.target.value)
        }} />
        <button onClick={login}>로근</button>
        <Link to='/join'>회원가입</Link>
      </div> */}

        {/* <h4>계정 : {user?.email}</h4> */}
        {/* <button onClick={logout}>로가웃</button> */}
      </div>
    </div>
  )
}

export default Login