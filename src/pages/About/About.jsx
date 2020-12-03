import React, { Component } from "react";
import Slider from "react-slick";
import img from "../../images/about.jpg";
import styles from "./About.module.css";

const photos = [
  {
    name: "photo 1",
    url:
      "https://images.unsplash.com/photo-1585222515068-7201a72c4181?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  },
  {
    name: "photo 2",
    url:
      "https://images.unsplash.com/photo-1604572636606-bb3589cbf51c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  },
  {
    name: "photo 3",
    url:
      "https://images.unsplash.com/photo-1603397873522-2fe355ec92c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
];
const About = () => {
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
      <h1 className={styles.title}>What is covid-19?</h1>
      <div>
        <Slider {...settings} className={styles.Slider}>
          {photos.map((photo) => (
            <div>
              <div>
                <img width="200px" src={photo.url} alt="s" />
              </div>
              <div>
                <img width="200px" src={photo.url} alt="s" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default About;
