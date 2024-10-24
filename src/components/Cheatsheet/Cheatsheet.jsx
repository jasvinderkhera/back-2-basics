import React from "react";
import "./Cheatsheet.css";
import array_cheatsheet from "../../assets/images/cheatsheet/array_methods.jpg";
import KeyboardSlider from "../common/Sliders/KeyboardSlider";
import responsive_columns from "../../assets/videos/responsive_columns.mp4";
import api from "../../assets/images/cheatsheet/API_Cheatsheet.pdf"

function Cheatsheet() {
  const images = require.context("./../../assets/images/extras", true);
  const imageList = images.keys().map((image) => images(image));
  console.log(imageList);
  return (
    <div>
      <div className="center_container">
        <h2 className="text-white mt-3">Cheatsheet</h2>
        <div className="array_sheet my-4">
          <h2 className="text-white text-center my-4">Array Cheatsheet</h2>
          <div className="array_sheet_img">
            <img src={array_cheatsheet} alt="" />
          </div>
        </div>
        <div className="keyboard_events px-3 px-md-0 my-4">
          <h2 className="text-white text-center my-4">Keyboard Events</h2>
          <KeyboardSlider />
        </div>

        <div className="Random_container">
          <h2 className="text-white my-3">Extra's</h2>
          <div className="d-flex flex-wrap gap-5 my-4 px-3 px-md-0 extra_container">
            {imageList.map((item) => (
              <img src={item} alt="" />
            ))}
          </div>
        </div>

        <div className="extra_videos my-4 py-3">
          <h2 className="text-white my-3 pb-3">Responsive Columns</h2>
          <video src={responsive_columns} controls></video>
        </div>

        <div className="api_cheatsheet my-4 py-3">
          <h2 className="text-white my-3 pb-3">API Cheatsheet</h2>
          <div className="api_cheatsheet_container">
            <object
              data={api}
              type="application/pdf"
            >
              alt : <a href="test.pdf">test.pdf</a>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cheatsheet;
