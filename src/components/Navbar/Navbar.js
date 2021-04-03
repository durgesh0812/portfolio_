import React from 'react';
 import './Navbar.css';
 import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">

         
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" ></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <Link to ='/' style={{textDecoration:'none',color:'white'}}>
        Home 
        </Link>
        
      </li>
     
      <li className="nav-item">
      <Link to ='/portfolio' style={{textDecoration:'none',color:'white'}}>
      PORTFOLIO
      </Link>
      </li>
     
      
       
      <li className="nav-item" >
        <Link to ='/about' style={{textDecoration:'none',color:'white'}}><span>ABOUT ME</span></Link>
      </li>
      <li className="nav-item">
        <Link to='/contact' style={{textDecoration:'none',color:'white'}}>CONTACTS</Link>
        
      </li>
     
      
    </ul>
    
  </div>
  </div>
</nav>
      
    )
}

export default Navbar
