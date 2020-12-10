import React from 'react'
import {Link} from 'react-router-dom'

const Contact= (props)=> {
    return (
        <div className="contact">
            <h1>You can reach us here!</h1>
            <ul style={{listStyle: "none"}}>
              <li> <Link to="#" ><i className="fa fa-5x fa-facebook">~Food Blog</i></Link></li> 
              <li><Link to="#" ><i className="fa fa-5x fa-twitter">~@thefoodblog</i></Link></li> 
              <li><Link to="#" ><i className="fa fa-5x fa-instagram">~the_food_blog</i></Link></li> 
              <li><Link to="#" ><i className="fa fa-5x fa-whatsapp">~+233509499799</i></Link></li> 
            </ul> 
        </div>
    )
}

export default Contact
