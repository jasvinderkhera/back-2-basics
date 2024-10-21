import React from "react";
import Slider from "react-slick";
import call from "../../../assets/images/anchor/call.jpg"
import download from "../../../assets/images/anchor/download.jpg";
import email from "../../../assets/images/anchor/email.jpg";
import highlight from "../../../assets/images/anchor/highlight.jpg";
import sms from "../../../assets/images/anchor/sms.jpg";
import whatsapp from "../../../assets/images/anchor/whatsapp.jpg";

function AnchorSlider() {
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
            <img src={call} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item px-3">
            <img src={download} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item px-3">
            <img src={email} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item px-3">
            <img src={highlight} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item px-3">
            <img src={sms} alt="" />
          </div>
        </div>
        <div>
          <div className="anchor_slider_item px-3">
            <img src={whatsapp} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default AnchorSlider;
