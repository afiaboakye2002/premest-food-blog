import React from 'react'
import './style.css'

const Card =(props) => {
    return (
        <div className ="card" style={{width:props.witdth?props.width:'100%'}}>
            {props.children}
        </div>
    
    )
}

export default Card 
