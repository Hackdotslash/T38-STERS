import React, { Fragment, useEffect, useState } from "react";
import { results } from "../../utils/dummyData";
import classes from "./Hospitals.module.css";
import Navbar from "../Navbar/Navbar";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Hospitals = () => {
  // eslint-disable-next-line no-unused-vars
  const [nearByHospitals, setNearByHospitals] = useState();
  const [currentLocation, setCurrentLocation] = useState("");

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
            console.log(data.results[0].formatted_address);
            setCurrentLocation(data.results[0].formatted_address);
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
    <Fragment>
      <Navbar />
      <div className={classes.Data}>
        <h1
          style={{
            marginLeft: "1rem",
            color: "var(--blue-color)",
          }}
        >
          Hospitals
        </h1>
        <div className={classes.Hospitals}>
          {results.map((result, index) => (
            <div key={result.place_id} className={classes.Card}>
              <h3>{result.name}</h3>
              <p>
                {result.opening_hours?.open_now ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    Open
                  </span>
                ) : (
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    Close
                  </span>
                )}
              </p>
              <ReactStars
                count={5}
                value={result.rating}
                size={24}
                isHalf={true}
                emptyIcon={<FontAwesomeIcon icon={faStar} />}
                halfIcon={<FontAwesomeIcon icon={faStarHalf} />}
                fullIcon={<FontAwesomeIcon icon={faStarHalf} />}
                activeColor="orange"
                edit={false}
              />
              <a
                href={`https://www.google.com/maps/dir/${currentLocation}/${result?.plus_code?.compound_code
                  .split(" ")
                  .splice(1)
                  .join(" ")}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className={classes.Directions}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Hospitals;
