import React, { useState } from "react";
import Statistics from "./pages/Statistics/Statistics";
import Home from "./pages/Home/Home";
import Prevention from "./pages/Prevention/Prevention";
import { Footer } from "./components";
import styles from "./App.module.css";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import image from "./images/image.png";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const App = () => {
  const routes = ["/statistics", "/", "/Prevention"];
  const [value, setValue] = useState(0);
  const handleTabs = (e, value) => {
    setValue(value);
  };
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <AppBar>
              <Tabs
                centered
                value={
                  history.location.pathname !== "/"
                    ? history.location.pathname
                    : false
                }
                onChange={handleTabs}
              >
                <Tab
                  label="statistics"
                  value={routes[0]}
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  label="Home"
                  value={routes[1]}
                  component={Link}
                  to={routes[1]}
                />
                <Tab
                  label="protection"
                  value={routes[2]}
                  component={Link}
                  to={routes[2]}
                />
              </Tabs>
            </AppBar>
          )}
        />

        <Switch>
          <Route path="/statistics" component={Statistics} />
          <Route path="/Prevention" component={Prevention} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
