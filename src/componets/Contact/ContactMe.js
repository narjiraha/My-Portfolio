import React from 'react'
import './Contact.css'
import contactImg from '../../assets/contact.jpg'

const ContactMe = () => {
    return (
        <>
            <div id='contactSection'>
                <div className='contactInfo'>

                    <div className='contactDetail'>
                        <h1 className='contactmeText'>Contact Me</h1>
                        <h2 className='letsWork'>Let's Work Together</h2>
                        <div className='email'>
                            <h3 className='links'>Email</h3>
                            <p>narjiraha123@gmail.com</p>
                        </div>

                        <div className='phone'>
                            <h3 className='links'>Phone</h3>
                            <p>+91-8099469403</p>
                            <p>+91-6000742566</p>
                        </div>

                        <div className='github'>
                            <h3 className='links'>Github</h3>
                            <p>github link</p>
                        </div>

                        <div className='linkedIn'>
                            <h3 className='links'>linkedIn</h3>
                            <p>linkedIn link</p>
                        </div>


                        <div className='instagram'>
                            <h3 className='links'>instagram</h3>
                            <p>instagram link</p>
                        </div>
                    </div>
                </div>

                <div className='contactPoster'>
                    <img src={contactImg} alt="not-found"></img>
                </div>
            </div>
        </>
    )
}

export default ContactMe
