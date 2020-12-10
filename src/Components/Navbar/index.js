import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

const  Navbar =(props) => {

    const[search,setSearch] =useState(false);

    const submitSearch=(e)=>{
        e.preventDefault();
        alert('Searched');
    }

    const openSearch=() =>{
        setSearch(true);
    }

    const searchClass =search? 'searchInput active':'searchInput';

    return (
        <div className="navbar">
            <ul className ="navbarMenu">
                   <li><NavLink to="/">SignIn</NavLink></li> 
                   <li><NavLink to="/signUp">SignUp</NavLink></li> 
                   <li><NavLink to="/home">Home</NavLink></li> 
                   <li> <NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                   <li> <NavLink to="/contact">Contact Us</NavLink></li>
                
            </ul>
            <div className="search">
                <form onSubmit = {submitSearch}>
                <input type="text" className={searchClass} placeholder="Search"/> 
                <button onClick={openSearch}className="button">Yummy!</button>
                </form>
   
            {/* <img src={require('../../Assets/icons/Searchh.png')} alt="Search"/> */}
            </div>
        </div>
    )
}

export default Navbar
