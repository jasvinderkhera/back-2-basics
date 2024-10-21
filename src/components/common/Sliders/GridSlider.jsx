import React from "react";
import Slider from "react-slick";
import grid from "../../../assets/images/grid/grid.jpg";
import grid2 from "../../../assets/images/grid/grid2.jpg";
import grid3 from "../../../assets/images/grid/grid3.jpg";
import grid4 from "../../../assets/images/grid/grid4.jpg";
import grid5 from "../../../assets/images/grid/grid5.jpg";

function GridSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="anchor_slider_item">
            <img src={grid} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item">
            <img src={grid2} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item">
            <img src={grid3} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item">
            <img src={grid4} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item">
            <img src={grid5} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default GridSlider;
