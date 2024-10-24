import React from 'react'
import Slider from "react-slick";
import p1 from "../../../assets/images/destructuring/img1.jpg"
import p2 from "../../../assets/images/destructuring/destructuring.jpg"
import p3 from "../../../assets/images/destructuring/array.jpg"
import p4 from "../../../assets/images/destructuring/function_parameter.jpg"
import p5 from "../../../assets/images/destructuring/nested.jpg"
import p6 from "../../../assets/images/destructuring/object.jpg"

function Destructuring() {
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
              <div className="destructuring_slider_item">
                <img src={p1} alt="" />
              </div>
            </div>
            <div>
              <div className="destructuring_slider_item">
                <img src={p2} alt="" />
              </div>
            </div>
            <div>
              <div className="destructuring_slider_item">
                <img src={p3} alt="" />
              </div>
            </div>
            <div>
              <div className="destructuring_slider_item">
                <img src={p4} alt="" />
              </div>
            </div>
            <div>
              <div className="destructuring_slider_item">
                <img src={p5} alt="" />
              </div>
            </div>
            <div>
              <div className="destructuring_slider_item">
                <img src={p6} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      )
}

export default Destructuring