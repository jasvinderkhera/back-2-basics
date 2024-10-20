import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container nav_container'>
        <nav>
            <div className="logo">
                <h1>Back-2-Basics</h1>
            </div>
            <div className="navbar_contents">
                <div className="navlink"><Link to="/html">HTML</Link></div>
                <div className="navlink"><Link to="/css">CSS</Link></div>
                <div className="navlink"><Link to="/javascript">Javascript</Link></div>
                <div className="navlink"><Link to="/jquery">JQuery</Link></div>
                <div className="navlink"><Link to="/bootstrap">Bootstrap</Link></div>
                <div className="navlink"><Link to="/react">React</Link></div>
                <div className="navlink"><Link to="/extras">Extras</Link></div>
                <div className="navlink"><Link to="/contact">Contact</Link></div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar