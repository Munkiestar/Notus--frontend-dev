import React from "react";
import "./Slider.scss";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/access-1.png";
import img2 from "../assets/access-2.png";
import img3 from "../assets/access-3.png";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="slider">
      <h1 className="slider__title">Notus Frontend test</h1>

      <Slider {...settings}>
        <div className="slider__wrap">
          <img src={img1} alt="" />
        </div>
        <div className="slider__wrap">
          <img src={img2} alt="" />
        </div>
        <div className="slider__wrap">
          <img src={img3} alt="" />
        </div>
      </Slider>
    </section>
  );
}

export default ImageSlider;
