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
      <DiseaseItem />
      <DiseaseItem />
    </div>
  );
};

export default diseaseList;
