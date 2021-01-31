import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./DiseaseItem.module.css";

const diseaseItem = ({ item }) => {
  return (
    <div className={classes.card}>
      <div
        style={{
          display: "flex",
          marginBottom: "1rem",
          fontSize: "1.5rem",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon icon={item.icon} color={item.color} />
        <h3 style={{ marginLeft: "1rem" }}>{item.name}</h3>
      </div>
      <p>{item.description}</p>
      <button
        style={{
          marginTop: "1rem",
          width: "30%",
          padding: "0.3rem",
          borderRadius: "0.5rem",
          border: "none",
          background: "#354BA4",
          color: "white",
          outline: "none",
        }}
      >
        See More
      </button>
    </div>
  );
};

export default diseaseItem;
