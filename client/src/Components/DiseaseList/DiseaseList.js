import React from "react";
import classes from "./List.module.css";
import DiseaseItem from "./DiseaseItem/DiseaseItem";

const diseaseList = (props) => {
  return (
    <div className={classes.Outer}>
      <h1 style={{ marginTop: "1rem", color: "var(--blue-color)" }}>Disease</h1>
      <div className={classes.List}>
        {props.data.map((item) => (
          <DiseaseItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default diseaseList;
