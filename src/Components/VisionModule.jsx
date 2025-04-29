import React from 'react'
import Logo from '../assets/Screenshot 2025-03-10 221747.png'
import FirstImage from '../assets/Stator.jpg'
import SecondImage from '../assets/gear.jpg'
import './Vision.css'
import { Link } from "react-router-dom"
const VisionModule = () => {
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
            <h3>VISION MODULE</h3>
            <h4>CHOOSE A SECTION</h4>
          </div>
        </div>
        <div className="four-div">
          <div className="inner-div">
            <img src={FirstImage} alt="" />
            <p>Part identification</p>
            <h4  style={{ letterSpacing: "0.1px",lineHeight:"25px", width: "300px",fontSize:"15px" }}>This module helps in recognizing components, understanding their functions and their applications.</h4>
            <div className="learn-test">
              <Link to="/learning">Learn</Link>
              <Link to="/quiz">Take test</Link>
            </div>
          </div>
          <div className="inner-div">
            <img src={SecondImage} alt="" />
            <p>Similar Part Identification</p>
            <h4 style={{ letterSpacing: "0.1px",lineHeight:"25px", width: "300px",fontSize:"15px" }}>This module helps in understanding components with similar appearances but different specifications.</h4>
            <div className="learn-test">
              <Link>Learn</Link>
              <Link>Take test</Link>
            </div>
          </div>
         
        </div>
        <div className="buttons">
          <Link to="/about" className='button' style={{textDecoration:"none"}}>Back</Link>
        </div>
      </div>
    </>
  )
}

export default VisionModule