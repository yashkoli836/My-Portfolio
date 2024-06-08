import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    <div>
                        <p>123 Anywhere</p>
                        <p>India</p>
                    </div>
                </div>
                <div className='phone'>
                    <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    <h4>+1-1239-456-78</h4>
                </div>
                <div className='email'>
                    <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    <p>yashkoli836@gmail.com</p>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>  
                <p>This is me Yash Mahor.</p>
                <div className='social'>
                <Link to={"https://github.com/yashkoli836"}>
                    <FaGithub size={30} style={{color:'#fff', marginRight:'1rem'}} />
                </Link>
                
                <FaTwitter size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                <Link to={"https://www.linkedin.com/in/yashmahor/"}>
                    <FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                </Link>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer