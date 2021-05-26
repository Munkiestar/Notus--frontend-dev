import React from "react";
import "./SliderGallery.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/task4-img1.jpg";
import img2 from "../../assets/task4-img2.jpg";
import img3 from "../../assets/task4-img4.jpg";
import img4 from "../../assets/task3-img1.jpg";

function SliderGallery() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="imgGallery" id="imgGallery">
      <div className="imgGallery__container">
        <Slider {...settings}>
          <div className="imgGallery__wrap">
            <img src={img1} alt="" />
          </div>
          <div className="imgGallery__wrap">
            <img src={img2} alt="" />
          </div>
          <div className="imgGallery__wrap">
            <img src={img3} alt="" />
          </div>
          <div className="imgGallery__wrap">
            <img src={img4} alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
}
export default SliderGallery;
