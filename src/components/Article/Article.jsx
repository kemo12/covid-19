import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { article_img } from "../../images/index";
import styles from "./Article.module.css";
export default function Article() {
  return (
    <Box className={styles.articleContainer}>
      <Typography variant="h4" component="h1" align="left">
        - What is Covid-19?
      </Typography>
      <Box component="div" className={styles.lowercontainer}>
        <Box component="div" className={styles.higherContainer}>
          <img className={styles.articleImg} src={article_img} alt="arivle" />
        </Box>
        <Box component="div" className={styles.rightContainer}>
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
            treatment. Older people, and those with underlying medical problems
            like cardiovascular disease, diabetes, chronic respiratory disease,
            and cancer are more likely to develop serious illness.
          </Typography>
          <Typography variant="body1" align="left">
            The best way to prevent and slow down transmission is to be well
            informed about the COVID-19 virus, the disease it causes and how it
            spreads. Protect yourself and others from infection by washing your
            hands or using an alcohol based rub frequently and not touching your
            face.
          </Typography>
          <Typography variant="body1" align="left">
            The COVID-19 virus spreads primarily through droplets of saliva or
            discharge from the nose when an infected person coughs or sneezes,
            so it’s important that you also practice respiratory etiquette .
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
