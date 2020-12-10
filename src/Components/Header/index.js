import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Header = props=>{
    return (
        <header className ="header">
            <nav className="headerMenu">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
            <div>
            {/* Social media links */}
            {/* <img src=""/> */}
            <ul style={{listStyle: "none"}}>
                <Link to="#" ><i className="fa fa-2x fa-facebook"></i></Link>
                <Link to="#" ><i className="fa fa-2x fa-twitter"></i></Link>
                <Link to="#" ><i className="fa fa-2x fa-instagram"></i></Link>
            </ul>
            </div>
        </header>
    )
}

export default Header
