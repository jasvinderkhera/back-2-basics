import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {
    let [showq, setShowq] = useState("hide")
  return (
    <div className="faq_container">
      <div className="center_container">
        <h2 className="text-white pt-2">Frequently Asked Questions</h2>
        <div className="faq px-3 px-md-0 my-4">
          <p className="pt-2 text-white fs-4" onClick={()=>{showq === "q1" ? setShowq("hide") : setShowq("q1")}}>
            <span>I have installed NodeJs in my system but getting error while creating a react app.</span>{" "}
            <i className="fa fa-angle-down"></i>
          </p>
          <div className="faq_answer fs-5 text-white" style={ showq === "q1" ? {maxHeight: "1000px", overflow:"visible",paddingBottom:"30px", transition:"350ms"} : {maxHeight:"0", overflow:"hidden",transition:"350ms"}}>
            <span className="text-info my-2 d-inline-block">
              C:\Users\username\AppData\Roaming
            </span>
            <p>
              In this path of your PC, create a folder with name npm and then
              try to create react app. If you are uable to see the AppData
              folder then click on "view" on the top then "show" then "show
              hidden files" .If still having problems google the error.
            </p>
          </div>
        </div>
        <div className="faq px-3 px-md-0 my-4">
          <p className="pt-2 text-white fs-4" onClick={()=>{showq === "q2" ? setShowq("hide") : setShowq("q2")}}>
            <span>How to setup GIT on my system ?</span>{" "}
            <i className="fa fa-angle-down"></i>
          </p>
          <div className="faq_answer fs-5 text-white" style={ showq === "q2" ? {maxHeight: "1000px", overflow:"visible",paddingBottom:"30px", transition:"350ms"} : {maxHeight:"0", overflow:"hidden",transition:"350ms"}}>
            
            <p>
              Firstly, download git application from <a href="https://git-scm.com/downloads">This link</a>.
              then install the app and run commands:
              <ul>
                <li>git config --global user.name "your git username"</li>
                <li>git config --global user.mail "your git email"</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="faq px-3 px-md-0 my-4">
          <p className="pt-2 text-white fs-4" onClick={()=>{showq === "q3" ? setShowq("hide") : setShowq("q3")}}>
            <span>How to upload my project on Github ?</span>{" "}
            <i className="fa fa-angle-down"></i>
          </p>
          <div className="faq_answer fs-5 text-white" style={ showq === "q3" ? {maxHeight: "1000px", overflow:"visible",paddingBottom:"30px", transition:"350ms"} : {maxHeight:"0", overflow:"hidden",transition:"350ms"}}>
            
            <p>
              Login into your github account on your PC and click on "new" or "Create new Repository" in Green color.
              Then set the name of your project and set your repository as public or private and then in <span className="fw-bold">Add .gitignore</span> add node if your project is in react otherwise ignore this step.
              then click on create repository below. Copy the url of your repository.
              <ul>
                <li>git clone url (your repository url)</li>
                <li>git config --global user.name "your git username"</li>
                <li>git config --global user.mail "your git email"</li>
                <li>move or copy your project files into this folder</li>
                <li>then open vs code in this folder</li>
                <li>on command prompt or terminal type these commands</li>
                <li>git add .</li>
                <li>git commit -m "your comment about your project"</li>
                <li>git push</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="faq px-3 px-md-0 my-4">
          <p className="pt-2 text-white fs-4" onClick={()=>{showq === "q2" ? setShowq("hide") : setShowq("q2")}}>
            <span>How to make tooltip using CSS ?</span>{" "}
            <i className="fa fa-angle-down"></i>
          </p>
          <div className="faq_answer fs-5 text-white" style={ showq === "q2" ? {maxHeight: "1000px", overflow:"visible",paddingBottom:"30px", transition:"350ms"} : {maxHeight:"0", overflow:"hidden",transition:"350ms"}}>
            
            <p>
              Visit this link <a href="https://www.w3schools.com/css/css_tooltip.asp">CSS Tooltip</a>.
              
            </p>
          </div>
        </div>
        <div className="faq px-3 px-md-0 my-4">
          <p className="pt-2 text-white fs-4" onClick={()=>{showq === "q2" ? setShowq("hide") : setShowq("q2")}}>
            <span>How to add tailwind to my React Project ?</span>{" "}
            <i className="fa fa-angle-down"></i>
          </p>
          <div className="faq_answer fs-5 text-white" style={ showq === "q2" ? {maxHeight: "1000px", overflow:"visible",paddingBottom:"30px", transition:"350ms"} : {maxHeight:"0", overflow:"hidden",transition:"350ms"}}>
            
            <p>
              Visit this link <a href="https://tailwindcss.com/docs/installation">Tailwind Installation</a>.

              <ul>
                <li>Follow the steps given in the website</li>
                <li>In the 'tailwind.config.js' file just add jsx after js with comma separated</li>
              </ul>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
