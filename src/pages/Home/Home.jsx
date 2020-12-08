import React from "react";
import { about } from "../../images";
import styles from "./Home.module.css";
import { Typography } from "@material-ui/core";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.supContainer}>
        <img alt="articalImage" className={styles.articleImage} src={about} />

        <div className={styles.articleContainer}>
          <h1>What is Covid-19?</h1>

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
          <h3>Prevention</h3>
          <Typography variant="subtitle1" gutterBottom align="left">
            To prevent infection and to slow transmission of COVID-19, do the
            following:
          </Typography>
          <ul>
            <li>
              Wash your hands regularly with soap and water, or clean them with
              alcohol-based hand rub.
            </li>
            <li>
              Maintain at least 1 metre distance between you and people coughing
              or sneezing.
            </li>
            <li>Avoid touching your face.</li>
            <li>Cover your mouth and nose when coughing or sneezing.</li>
            <li>Stay home if you feel unwell.</li>
            <li>
              Refrain from smoking and other activities that weaken the lungs.
            </li>
            <li>
              Practice physical distancing by avoiding unnecessary travel and
              staying away from large groups of people.
            </li>
          </ul>
          <h3>Symptoms</h3>
          <Typography
            variant="subtitle1"
            gutterBottom
            align="left"
            paragraph="true"
          >
            <b>COVID-19</b> affects different people in different ways. Most
            infected people will develop mild to moderate illness and recover
            without hospitalization.
          </Typography>
          <Typography variant="subtitle2" gutterBottom align="left">
            Most common symptoms:
          </Typography>
          <ul>
            <li>fever.</li>
            <li>dry cough</li>
            <li>tiredness.</li>
          </ul>
          <Typography variant="subtitle2" gutterBottom align="left">
            Less common symptoms:
          </Typography>
          <ul>
            <li>aches and pains</li>
            <li>sore throat.</li>
            <li>diarrhoea.</li>
            <li>conjunctivitis.</li>
            <li>headache.</li>
            <li>loss of taste or smell.</li>
            <li>a rash on skin, or discolouration of fingers or toes.</li>
          </ul>
          <Typography variant="subtitle2" gutterBottom align="left">
            Serious symptoms:
          </Typography>
          <ul>
            <li>difficulty breathing or shortness of breath.</li>
            <li>chest pain or pressure.</li>
            <li>loss of speech or movement.</li>
          </ul>
          <Typography variant="subtitle1" gutterBottom align="left">
            Seek immediate medical attention if you have serious symptoms.
            Always call before visiting your doctor or health facility.
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="left">
            People with mild symptoms who are otherwise healthy should manage
            their symptoms at home.
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="left">
            On average it takes 5–6 days from when someone is infected with the
            virus for symptoms to show, however it can take up to 14 days.
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Home;
