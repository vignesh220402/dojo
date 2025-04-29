import React from 'react'
import Logo from '../assets/Screenshot 2025-03-10 221747.png'
import hearing from '../assets/hearing-image.jpg'
import { Link } from "react-router-dom"
import './Hearing.css'
import './thirdModule.css'
const ThirdModule = () => {
  return (
    <>
      <div className="first">
        <img src={Logo} alt="" style={{ width: "100px", height: "100px", marginTop: "-20px" }} />
      </div>
      <div className="exit-btn">
        <Link to='/'>Exit</Link>
      </div>
      <div className="total-topic">
        <div className="vision-topic">
          <div className="sectences">
            <h3>HEARING MODULE</h3>
            <h4>CHOOSE A SECTION</h4>
          </div>
        </div>
        <div className="four-div">
          <div className="inner-div">
            <img src={hearing} style={{width:"300px",height:"160px"}} className='sound-Ide' alt="" / >
            <p>Sound Identification</p>
            <h4>This module helps in recognizing components, understanding their functions and their applications.</h4>
            <div className="learn-test">
              <Link to="/hearing">Learn</Link>
              <Link to="/audiotest">Take test</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/about" className='button' style={{textDecoration:"none"}}>Back</Link>
      </div>
    </>
  )
}

export default ThirdModule