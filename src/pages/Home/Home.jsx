import React from "react";
import Slider from "react-slick";
import { slide_imgae1, slide_imgae2, slide_imgae3 } from "../../images";
import styles from "./Home.module.css";
import { Article } from "../../components";
const Home = () => {
  const settings = {
    dots: true,
    fade: true,
    infinte: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
  };
  return (
    <div className={styles.container}>
      <div>
        <Slider {...settings} className={styles.slider}>
          <div>
            <img
              className={styles.sliderImg}
              src={slide_imgae1}
              alt="slide_imgae1"
            />
          </div>
          <div>
            <img
              className={styles.sliderImg}
              src={slide_imgae2}
              alt="slide_imgae2"
            />
          </div>
          <div>
            <img
              className={styles.sliderImg}
              src={slide_imgae3}
              alt="slide_imgae3"
            />
          </div>
        </Slider>
      </div>
      <Article />
    </div>
  );
};
export default Home;
