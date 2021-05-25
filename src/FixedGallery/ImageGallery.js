import React from "react";

import "./ImageGallery.scss";

import img1 from "../assets/task3-img1.jpg";
import img2 from "../assets/task3-img2.jpg";
import img3 from "../assets/task3-img3.jpg";
import img4 from "../assets/task3-img4.jpg";

function ImageGallery() {
  return (
    <section className="gallery">
      <div className="gallery__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          aspernatur assumenda at consequatur delectus deserunt doloremque
          dolorum, error esse est facere fugiat hic in ipsam iusto mollitia nam
          nemo neque non omnis, placeat provident sit tenetur veritatis
          voluptas.
        </p>
      </div>
      <main className="gallery__img">
        <div className="box1">
          <img src={img1} alt="" />
        </div>
        <div className="box2">
          <img src={img2} alt="" />
        </div>
        <div className="box3">
          <img src={img3} alt="" />
        </div>
        <div className="box4">
          <img src={img4} alt="" />
        </div>
      </main>
    </section>
  );
}

export default ImageGallery;
