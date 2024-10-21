import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("hide");
  return (
    <div className="center_container nav_container bg-dark">
      <nav className="p-2">
        <Link to="/" className="logo nav-link pt-1">
          <h1 className="text-white">Back-2-Basics</h1>
        </Link>
        <div className=" d-none d-md-flex navbar_contents">
          <div className="navlink">
            <Link to="/html">HTML</Link>
          </div>
          <div className="navlink">
            <Link to="/css">CSS</Link>
          </div>
          <div className="navlink">
            <Link to="/javascript">Javascript</Link>
          </div>
          <div className="navlink">
            <Link to="/jquery">JQuery</Link>
          </div>
          <div className="navlink">
            <Link to="/bootstrap">Bootstrap</Link>
          </div>
          <div className="navlink">
            <Link to="/react">React</Link>
          </div>
          <div className="navlink">
            <Link to="/extras">Extras</Link>
          </div>
          <div className="navlink">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="mob_menu d-flex d-md-none">
          <i
            className="fa fa-bars text-white fs-5"
            onClick={() => {
              setMenu("show");
            }}
          ></i>
          <div
            className="mob_menu_items"
            style={menu === "show" ? { display: "flex" } : { display: "none" }}
          >
            <div className="menu_items ps-3 pt-3">
              <div className="menu_item" onClick={()=>setMenu("hide")}>
                <Link to="/HTML" className="nav-link text-white fs-1">
                  HTML
                </Link>
              </div>
              <div className="menu_item" onClick={()=>setMenu("hide")}>
                <Link to="/css" className="nav-link text-white fs-1">
                  CSS
                </Link>
              </div>
              <div className="menu_item" onClick={()=>setMenu("hide")}>
                <Link to="/javascript" className="nav-link text-white fs-1">
                  Javascript
                </Link>
              </div>
              <div className="menu_item" onClick={()=>setMenu("hide")}>
                <Link to="/jquery" className="nav-link text-white fs-1">
                  JQuery
                </Link>
              </div>
              <div className="menu_item" onClick={()=>setMenu("hide")}>
                <Link to="/bootstrap" className="nav-link text-white fs-1">
                  Bootstrap
                </Link>
              </div>
              <div className="menu_item" onClick={()=>setMenu("hide")}>
                <Link to="/react" className="nav-link text-white fs-1">
                  ReactJS
                </Link>
              </div>
              <div className="menu_item" onClick={()=>setMenu("hide")}>
                <Link to="/extras" className="nav-link text-white fs-1">
                  Extras
                </Link>
              </div>
              <div className="menu_item" onClick={()=>setMenu("hide")}>
                <Link to="/contact" className="nav-link text-white fs-1">
                  Contact
                </Link>
              </div>
            </div>
            <i
              className="fa fa-x text-white fs-5 pe-3 pt-4"
              onClick={() => setMenu("hide")}
            ></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
