import React from "react";
import Navbar from "./Navbar/Navbar";

import DiseaseList from "./DiseaseList/DiseaseList";

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <div>
        <DiseaseList />
      </div>
    </div>
  );
};

export default Home;
