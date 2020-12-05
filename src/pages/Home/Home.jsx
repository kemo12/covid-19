import React from "react";
import { slide_imgae1 } from "../../images";
import styles from "./Home.module.css";
import { Typography } from "@material-ui/core";
const Home = () => {
  return (
    <div className={styles.container}>
      <h1>What is Covid-19?</h1>
      <div className={styles.supContainer}>
        <img
          alt="articalImage"
          className={styles.articleImage}
          src={slide_imgae1}
        />

        <div>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            paragraph="true"
          >
            <b>Corona virus disease (COVID-19)</b> is an infectious disease
            caused by a newly discovered coronavirus.
          </Typography>
          <Typography variant="body1" gutterBottom align="left">
            Most people infected with the COVID-19 virus will experience mild to
            moderate respiratory illness and recover without requiring special
            treatment.
          </Typography>

          <Typography variant="body2" gutterBottom align="left">
            Older people, and those with underlying medical problems like
            cardiovascular disease, diabetes, chronic respiratory disease, and
            cancer are more likely to develop serious illness.
          </Typography>
          <Typography variant="body2" gutterBottom align="left">
            The best way to prevent and slow down transmission is to be well
            informed about the COVID-19 virus, the disease it causes and how it
            spreads. Protect yourself and others from infection by washing your
            hands or using an alcohol based rub frequently and not touching your
            face.
          </Typography>
          <Typography variant="body2" gutterBottom align="left">
            The COVID-19 virus spreads primarily through droplets of saliva or
            discharge from the nose when an infected person coughs or sneezes,
            so it’s important that you also practice respiratory etiquette .
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Home;
