import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-black h-90 p-5'>
    <h1 className="text-3xl font-bold font-mono justify-center text-center text-white underline m-5 p-2">
        Welcome to Music live streamin Offline App
    </h1>
    {/* <h1 className="p-2 ml-3 mt-5 text-white text-3xl font-mono font-bold">{props.name ? `Welcome - ${props.name}` : "Login please"}</h1> */}
    <div className="w-full flex p-5">
        <div className="w-1/2 h-60 bg-slate-400 p-5 justify-center text-center">
            
                <NavLink to={"/login"}>
                    <button className="bg-blue-900 mt-5 ml-3 p-2 font-mono font-bold text-white ">Login here </button>
                </NavLink>
        </div>
        <div className="w-1/2 h-60 bg-slate-800 p-5 justify-center text-center">
            <h1>
                <NavLink to={"/signup"}>
                    <button className="bg-blue-900 mt-5 ml-3 p-2 font-mono font-bold text-white ">Signup here </button>
                </NavLink>
            </h1>
        </div>
    </div>
</div>
  )
}

export default Home