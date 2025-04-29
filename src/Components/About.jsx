import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Screenshot 2025-03-10 221747.png';
import images1 from '../assets/Eye.jpg';
import images2 from '../assets/earing.jpg';
import images3 from '../assets/Smelling.jpg';
import images4 from '../assets/Touch.jpg';
import images5 from '../assets/voice.jpg';
import './About.css';

const About = () => {
    const [isTamil, setIsTamil] = useState(false);

    const handleToggle = () => {
        setIsTamil(!isTamil);
    };

    return (
        <>
            <div className="first">
                <img src={Logo} alt="" style={{ width: "100px", height: "100px", marginTop: "-20px" }} />
            </div>
            <div className="exit-btn">
                <Link to='/'>{isTamil ? 'வெளியேறு' : 'Exit'}</Link>
            </div>

            {/* Updated Toggle Button */}
            <div className="translate-section">
                <label className="language-toggle" id="languageToggle">
                    <span className="toggle-text">{isTamil ? 'தமிழ்' : 'English'}</span>
                    <input
                        type="checkbox"
                        checked={isTamil}
                        onChange={handleToggle}
                        className="language-checkbox"
                    />
                    <span className="toggle-switch"></span>
                </label>
            </div>

            <div className="total-vision">
                <div className="vision-topic">
                    <div className="sectence">
                        <h3>{isTamil ? 'ஐந்து அறிவு Dojo தொகுதிகள்' : 'FIVE SENSE DOJO MODULES'}</h3>
                        <h4>{isTamil ? 'ஒரு பிரிவைத் தேர்ந்தெடுக்கவும்' : 'CHOOSE A SECTION'}</h4>
                    </div>
                </div>
                <div className="main-images">
                    <div className='imagesintro'>
                        <Link to='/vision' style={{ textDecoration: "none" }}>
                            <img src={images1} alt="" />
                            <p>{isTamil ? 'காண்பது' : 'Vision'}</p>
                        </Link>
                    </div>
                    <div className='imagesintro'>
                        <Link to='/thirdmodule' style={{ textDecoration: "none" }}>
                            <img src={images2} alt="" />
                            <p>{isTamil ? 'கேட்பது' : 'Earing'}</p>
                        </Link>
                    </div>
                    <div className='imagesintro'>
                        <Link to='/fragnmentModule' style={{ textDecoration: "none" }}>
                            <img src={images3} alt="" />
                            <p>{isTamil ? 'வாசம்' : 'Smelling'}</p>
                        </Link>
                    </div>
                    <div className='imagesintro'>
                        <Link to='/touchcontainer' style={{ textDecoration: "none" }}>
                            <img src={images4} alt="" />
                            <p>{isTamil ? 'தொடுதல்' : 'Touch'}</p>
                        </Link>
                    </div>
                    <div className='imagesintro'>
                        <Link to='/speakingModule' style={{ textDecoration: "none" }}>
                            <img src={images5} alt="" />
                            <p>{isTamil ? 'பேச்சு' : 'Speaking'}</p>
                        </Link>
                    </div>
                </div>
                <div className="buttons">
                    <Link to="/" className='button' style={{ textDecoration: "none" }}>
                        {isTamil ? 'மீண்டும்' : 'Back'}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default About;
