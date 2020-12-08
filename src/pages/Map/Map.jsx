import React, { useState, useEffect } from "react";

import Loading from "../../components/Map/components/Loading";
import CovidMap from "../../components/Map/components/CovidMap";
import LoadCountriesTask from "../..//components/Map/tasks/LoadCountriesTask";
import Legend from "../../components/Map/components/Legend";
import legendItems from "../../components/Map/entities/LegendItems";
import style from "./Map.module.css";

const Map = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CovidMap countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Map;
