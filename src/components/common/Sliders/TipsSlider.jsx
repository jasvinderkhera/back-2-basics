import React from "react";
import Slider from "react-slick";
import tip1 from '../../../assets/images/quicktips/html-tips1.jpg'
import tip2 from '../../../assets/images/quicktips/html-tips2.jpg'
import tip3 from '../../../assets/images/quicktips/html-tips3.jpg'
import tip4 from '../../../assets/images/quicktips/html-tips4.jpg'
import tip5 from '../../../assets/images/quicktips/html-tips5.jpg'
import tip6 from '../../../assets/images/quicktips/html-tips6.jpg'
import tip7 from '../../../assets/images/quicktips/html-tips7.jpg'

function TipsSlider() {
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
          <div className="anchor_slider_item px-3">
            <img src={tip1} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item px-3">
            <img src={tip2} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item px-3">
            <img src={tip3} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item px-3">
            <img src={tip4} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item px-3">
            <img src={tip5} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item px-3">
            <img src={tip6} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item px-3">
            <img src={tip7} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default TipsSlider;
