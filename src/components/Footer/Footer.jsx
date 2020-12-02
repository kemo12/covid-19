import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./Footer.module.css";
function Footer(props) {
  return (
    <footer className={styles.container}>
      <Typography component="h6">
        2020, All right reserved by&nbsp; @
        <a
          target="_blank"
          href="https://www.instagram.com/kemo_jd/"
          rel="noreferrer"
        >
          Kamel Dawoud
        </a>
      </Typography>
    </footer>
  );
}

export default Footer;
