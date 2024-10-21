import React from 'react'
import "./Home.css"
import html from "../../assets/images/logos/html.jpg"
import css from "../../assets/images/logos/css.png"
import javascript from "../../assets/images/logos/javascript.webp"
import react from "../../assets/images/logos/react.png"
import bootstrap from "../../assets/images/logos/bootstrap.webp"
import jquery from "../../assets/images/logos/jquery.webp"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="center_container">
        <div className="home_container center_container">
          <Link to="/html" className="home_category">
            HTML
            <div className="bg_img">
              <img src={html} alt="" />
            </div>
            </Link>
          <Link to="/css" className="home_category">
          CSS
          <div className="bg_img">
              <img src={css} alt="" />
            </div>
            </Link>
          <Link to="/javascript" className="home_category">
          Javascript
          <div className="bg_img">
              <img src={javascript} alt="" />
            </div>
            </Link>
          <Link to="/react" className="home_category">
          ReactJS
          <div className="bg_img">
              <img src={react} alt="" />
            </div>
            </Link>
          <Link to="/bootstrap" className="home_category">
          Bootstrap
          <div className="bg_img">
              <img src={bootstrap} alt="" />
            </div>
            </Link>
          <Link to="/jquery" className="home_category">
          JQuery
          <div className="bg_img">
              <img src={jquery} alt="" />
            </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Home