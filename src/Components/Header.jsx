import React from 'react'
import logo from '../assets/Screenshot 2025-03-10 221747.png'
import './Header.css'
const Header = () => {
  return (
    <div><div className="first">
    <img src={logo} alt="" style={{ width: "100px", height: "100px", marginTop: "-20px" }} />
  </div>
  <div className="exit-btn">
    <Link to='/'>Exit</Link>
  </div></div>
  )
}

export default Header