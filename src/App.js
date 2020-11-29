import React, { useState } from "react";
import Statistics from "./pages/Statistics/Statistics";
import styles from "./App.module.css";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import image from "./images/image.png";

const App = () => {
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };
  return (
    <div className={styles.container}>
      <AppBar position="absolute">
        <Tabs centered value={value} onChange={handleTabs}>
          <Tab label="statistics" />
          <Tab label="About Covid-19" />
          <Tab label="protection" />
          protection
        </Tabs>
      </AppBar>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Statistics />
    </div>
  );
};

export default App;
