import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_container py-4 border-top mt-md-4">
      <div className="center_container">
        <div className="sticky_whatsapp">
           <a href="tel:+917011001827"><i className="fa-brands fa-whatsapp"></i></a>
        </div>
        <div className="row mt-md-3">
          <div className="col-md-4">
            <Link to="/" className="logo nav-link pt-md-1">
              <h2 className="text-white text-center">Back-2-Basics</h2>
            </Link>
            <div className="social_links d-flex gap-4 justify-content-center mt-2">
               <a href=""><i className="fa-brands fa-instagram"></i></a> 
               <a href=""><i className="fa-brands fa-facebook"></i></a> 
               <a href=""><i class="fa-brands fa-linkedin-in"></i></a> 
               <a href=""><i className="fa-brands fa-github"></i></a> 
            </div>
          </div>
          <div className="col-md-8">
            <ul className="d-flex justify-content-between align-items-center mt-2 ps-0">
                <li><Link to="/" className="logo nav-link text-white pt-1">About Us</Link></li>
                <li><Link to="/faq" className="logo nav-link text-white pt-1">FAQ's</Link></li>
                <li><Link to="/" className="logo nav-link text-white pt-1">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="copyrights mt-md-4 mt-2">
            <h6 className="text-white text-center">© 2024 Back-2-basics. All rights reserved.</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
