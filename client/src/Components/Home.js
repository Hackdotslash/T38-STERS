import React, { Fragment } from "react";
import Navbar from "./Navbar/Navbar";

import DiseaseList from "./DiseaseList/DiseaseList";
import svg from "../assets/svg/doctor.svg";
import doctor from "../assets/doctor.png";

const Home = (props) => {
  return (
    <Fragment>
      <Navbar />
      <div style={{ padding: "1rem", marginLeft: "6rem" }}>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: 20,
            padding: "0 2rem",
            backgroundColor: "#F1F6FD",
            width: "80%",
            margin: "auto",
          }}
        >
          <img
            style={{
              width: 320,
              height: 300,
              backgroundClip: "#F1F6FD",
            }}
            src={svg}
            alt="doctor"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexFlow: "column",
              marginLeft: -50,
            }}
          >
            <h1
              style={{
                color: "#0A0A66",
                letterSpacing: 2,
              }}
            >
              Health is Wealth
            </h1>
            <p style={{ color: "#354BA4", margin: 20, marginLeft: "10rem" }}>
              Health is the greatest gift, contentment the greatest wealth,
              faithfulness the best relationship.
            </p>
          </div>
        </div>
        <div>
          <DiseaseList />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
