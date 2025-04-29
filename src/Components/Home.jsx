import React from 'react'
import image1 from '../assets/1.png'
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
    return (
        <>
            <div className="main-Tag">
                <img src={image1} alt="" />
                <Link to="/about" className='about-nav'>Get Strated</Link>
            </div>
        </>
    )
}

export default Home