import React, { useEffect, useState } from "react";
import { results } from "../../utils/dummyData";
import classes from "./Hospitals.module.css";

const Hospitals = () => {
  // eslint-disable-next-line no-unused-vars
  const [nearByHospitals, setNearByHospitals] = useState();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (location) => {
          console.log(location.coords);
          try {
            // const response = await fetch(
            //   `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.coords.latitude},${location.coords.longitude}&radius=150000&type=park&key=${process.env.REACT_APP_GOOGLE_MAPS_API}`
            // );
            // const data = await response.json();

            const result = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_API}`
            );

            const data = await result.json();
            console.log(data);
          } catch (error) {
            console.log(error.message);
          }
        },
        (error) => {
          console.log(error.message);
        },
        {
          timeout: 5000,
        }
      );
    }
    setNearByHospitals(results);
  }, []);

  return (
    <div className={classes.Hospitals}>
      {results.map((result, index) => (
        <div key={result.place_id} className={classes.Card}>
          <p>{result.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Hospitals;
