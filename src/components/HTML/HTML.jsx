import React from "react";
import "./HTML.css";
import AnchorSlider from "../common/Sliders/AnchorSlider";
import custom_color from "../../assets/images/list/custom_color.jpg";
import custom_order from "../../assets/images/list/custom_order.jpg";
import marker_content from "../../assets/images/list/marker_content.jpg";
import start_value from "../../assets/images/list/start_value.jpg";

function HTML() {
  return (
    <div className="html_main_container">
      <div className="center_container">
        <div className="anchor_slider">
          <h2 className="text-white py-2 my-4">
            Things You can do with Anchor Tag in HTML
          </h2>
          <AnchorSlider />
        </div>
        <div className="list_slider my-5">
          <h2 className="text-white py-2 my-4">List in HTML</h2>
          <div className="row list_grid gap-5 px-3">
            <img src={custom_color} alt="" />

            <img src={custom_order} alt="" />

            <img src={start_value} alt="" />

            <img src={marker_content} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HTML;
