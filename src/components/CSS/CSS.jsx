import React from "react";
import "./CSS.css";
import GridSlider from "../common/Sliders/GridSlider";
import grid_layout from "../../assets/images/grid/grid_layout.jpg";
import DifferenceSlider from "../common/Sliders/DifferenceSlider";
import sass from "../../assets/images/sass/sass.jpg"
import fun from "../../assets/images/sass/functions.jpg"
import mixin from "../../assets/images/sass/mixins.jpg"
import modules from "../../assets/images/sass/modules.jpg"
import inheritance from "../../assets/images/sass/inheritance.jpg"
import nesting from "../../assets/images/sass/nesting.jpg"
import operators from "../../assets/images/sass/operators.jpg"
import variables from "../../assets/images/sass/variables.jpg"
import tips from "../../assets/videos/CSS_pro_tips.mp4"

function CSS() {
  return (
    <div>
      <div className="center_container">
        <div className="grid_container my-5 px-3 px-md-0">
          <h2 className="text-white my-4">Grid in CSS</h2>
          <GridSlider />

          <h2 className="text-white my-5 pt-5 text-center">Layout of Grid in CSS</h2>
          <div className="grid_layout my-md-4 my-2">
            <img src={grid_layout} alt="" />
          </div>
        </div>

        <div className="display_container my-5 px-3 px-md-0">
          <h2 className="text-white my-md-4 my-2">
            Difference Between Display, Visibility and Opacity
          </h2>
          <DifferenceSlider />
        </div>

        <div className="css_tips my-5 px-3 px-md-0">
          <h2 className="text-white py-3">CSS Pro Tips</h2>
          <video src={tips} controls></video>
        </div>

        <div className="sass_container my-5 px-3 px-md-0">
          <h2 className="text-white my-4">What is SASS ?</h2>
          <div className="d-flex flex-wrap gap-md-3 gap-1 sass_items">
            <img src={sass} alt="" />
            <img src={fun} alt="" />
            <img src={inheritance} alt="" />
            <img src={mixin} alt="" />
            <img src={modules} alt="" />
            <img src={operators} alt="" />
            <img src={variables} alt="" />
            <img src={nesting} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSS;
