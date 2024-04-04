import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function HandleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res);
      navigate('/songadd');
    }).catch((err) => {console.log(err.message)})
  }
  return (
    <div className='text-white bg-black flex flex-col items-center p-5 justify-center'>
        <form className='p-5 flex flex-col gap-5 '>
            <input onChange={(e) => {setEmail(e.target.value)}} className='text-black text-center font-mono font-bold p-2' type='text' placeholder='Enter your Email'/>
            <input onChange={(e) => {setPassword(e.target.value)} } className='text-black text-center font-mono font-bold p-2' type='text' placeholder='Enter your Password'/>
            <button onClick={HandleLogin}  className=' bg-blue-900 text-white text-center font-mono font-bold p-2'>Login</button>
        </form>
    </div>
  )
}

export default Login