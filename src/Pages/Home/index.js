import React from 'react'
import './style.css'
import Card from '../../Components/UI/Card'


const Home = props =>{
  return (
    <div >
      <Card style={{width:'70%',borderRadius:"20px"}}>

        <h1 className='home'>Welcome Foodie!</h1>
        <h2 className='home'>Eat Alot but Eat Healthy!!</h2>
        <div className="img" >
          <img className="bg-image" src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"/>
        </div>
      
      </Card>
     
     {/* <img src={require('../../Assets/meals/pasta.jpg')}alt='Image'/> */}
    
    </div>
  )
}

export default Home 