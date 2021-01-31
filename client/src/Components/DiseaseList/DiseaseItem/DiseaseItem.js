import React from "react";

import classes from "./DiseaseItem.module.css";

const diseaseItem = () => {
  return (
    <div className={classes.card}>
      <p>Asthma</p>
      <p>Lungs</p>
    </div>
  );
};

export default diseaseItem;
