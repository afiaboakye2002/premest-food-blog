import React from 'react'
import './App.css'
import Home from '../src/Pages/Home'
import Header from '../src/Components/Header'
import Hero from '../src/Components/Hero'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import About from './Pages/About'
import registerin from './Pages/Login'
import registerup from './Pages/Signup'
import './index.css'


function App() {
  return (
    <Router>
<div className='App'>
      <Header/>
      <Hero/>
      <Route exact path='/' component={registerin} />
      {/* <Route path="/signin" component={registerin} /> */}
      <Route path="/signup" component={registerup} />
      <Route path ="/home" component={Home}/>
      <Route path ="/contact" component={Contact}/>
      <Route path ="/blog" component={Blog}/>  
      <Route path="/about" component={About} />
    </div>
    </Router>
    
  )
}

export default App
