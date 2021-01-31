import React from "react";

import DiseaseItem from "./DiseaseItem/DiseaseItem";

const diseaseList = () => {
  return (
    <div
      style={{
        width: 200,
        textAlign: "center",
        marginLeft: 100,
        padding: 20,
        display: "flex",
      }}
    >
      <div>
        <h1>Disease</h1>
        <DiseaseItem />
        <DiseaseItem />
      </div>
    </div>
  );
};

export default diseaseList;
