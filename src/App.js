import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Auth/Login'
import Signup from './Components/Auth/Signup'
import SongAdd from './Components/Songs/SongAdd'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home  />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/songadd" element={<SongAdd />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App