import React, { useState } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    return (
        <div>
            <nav className='navbar'>
                <img src={logo} alt="log" className='logo' />
                <div className='desktopMenu'>
                    <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='menuListItem'>Home</Link>
                    <Link activeClass='active' to="skillSection" spy={true} smooth={true} offset={-50} duration={500} className='menuListItem'>About</Link>
                    <Link activeClass='active' to="myWorks" spy={true} smooth={true} offset={-100} duration={500} className='menuListItem'>Portfolio</Link>
                    <Link activeClass='active' to="contactSection" spy={true} smooth={true} offset={-100} duration={500} className='menuListItem'>Contact</Link>
                </div>
                <button className='desktopMenuBtn' onClick={() => {
                    document.getElementById("emailForm").scrollIntoView({ behavior: "smooth" })
                }}>
                    <img src={contactImg} alt='' className='desktopMenuImg' />
                    Contact Me
                </button >

                <img src={menu} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
                <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
                    <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Home</Link>
                    <Link activeClass='active' to="skillSection" spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>About</Link>
                    <Link activeClass='active' to="myWorks" spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
                    <Link activeClass='active' to="contactSection" spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Contact</Link>
                </div>
            </nav >
        </div >
    )
}

export default Navbar
