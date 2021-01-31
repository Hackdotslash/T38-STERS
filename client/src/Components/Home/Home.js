import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";

import DiseaseList from "../DiseaseList/DiseaseList";
import svg from "../..//assets/svg/doctor.svg";
import { data } from "../../utils/dummyDiseases";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Fragment>
      <Navbar />
      <div className={classes.Outer}>
        <div className={classes.Hero}>
          <img className={classes.Image} src={svg} alt="doctor" />
          <div className={classes.HeroText}>
            <h1
              style={{
                color: "#0A0A66",
                letterSpacing: 2,
                fontSize: "max(3.5vw, 20px)",
              }}
            >
              Health is Wealth
            </h1>
            <p className={classes.Quote}>
              Health is contentment the greatest wealth, faithfulness the best
              relationship.
            </p>
          </div>
        </div>
        <div>
          <DiseaseList data={data} />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
