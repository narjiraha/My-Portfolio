import React from 'react'
import './Intro.css'
import { Link } from 'react-scroll'
import profile from '../../assets/profileAvatar.png'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
    return (
        <div>
            <div id="intro">
                <div className='introContent'>
                    <div className='introText'>
                        <p className='hello'>Hello,</p>
                        <h1>
                            <span className='myName animated-text'> I'm Narji</span>
                        </h1>

                        <h1>Web Developer</h1>
                        <p className='introPara'>Welcome to my digital playground, where creativity meets code and design comes to life. Explore my world of web development and design excellence.</p>
                        <Link><button className='btn'><img src={btnImg} alt='not-found' className='btnImg'></img>Hire Me</button></Link>
                    </div>

                    <div>
                        <img src={profile} alt="profile" className='profile'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro