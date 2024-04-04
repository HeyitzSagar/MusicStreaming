import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function HandleSignup(e)
    {
      e.preventDefault();
     createUserWithEmailAndPassword(auth, email, password ).then((res) => {
      console.log(res);
     }).catch((err) => {console.log(err.message)});
      
    }
    
  return (
    <div className="w-full h-full flex flex-col gap-5 bg-black items-center">
        <h1>Singup here</h1>
        <form className='p-5 flex flex-col gap-5 '>
            <input onChange={(e) => {setName(e.target.value)}} className='text-black text-center font-mono font-bold p-2' type="text" placeholder="Enter your Name"/>
            <input onChange={(e) => {setEmail(e.target.value)}} className='text-black text-center font-mono font-bold p-2' type="email" placeholder="Enter your Email"/>
            <input onChange={(e) => {setPassword(e.target.value)}} className='text-black text-center font-mono font-bold p-2' type="password" placeholder="Confirm your Password"/>
            <button onClick={HandleSignup} className=' bg-blue-900 text-white text-center font-mono font-bold p-2'>Signup</button>
        </form>
    </div>
  )
}

export default Signup