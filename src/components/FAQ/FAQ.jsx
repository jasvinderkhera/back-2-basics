import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {
    let [showq, setShowq] = useState("hide")
  return (
    <div className="faq_container">
      <div className="center_container">
        <h2 className="text-white">Frequently Asked Questions</h2>
        <div className="faq px-3 px-md-0 my-4">
          <p className="pt-2 text-white fs-4" onClick={()=>{showq === "q1" ? setShowq("hide") : setShowq("q1")}}>
            <span>I have installed NodeJs in my system but getting error while creating a react app.</span>{" "}
            <i className="fa fa-angle-down"></i>
          </p>
          <div className="faq_answer fs-5 text-white" style={ showq === "q1" ? {maxHeight: "300px", overflow:"visible", transition:"350ms"} : {maxHeight:"0", overflow:"hidden",transition:"350ms"}}>
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
          <p className="pt-2 text-white fs-4" onClick={()=>{showq === "q1" ? setShowq("hide") : setShowq("q1")}}>
            <span>I have installed NodeJs in my system but getting error while creating a react app.</span>{" "}
            <i className="fa fa-angle-down"></i>
          </p>
          <div className="faq_answer fs-5 text-white" style={ showq === "q1" ? {maxHeight: "300px", overflow:"visible", transition:"350ms"} : {maxHeight:"0", overflow:"hidden",transition:"350ms"}}>
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
      </div>
    </div>
  );
}

export default FAQ;
