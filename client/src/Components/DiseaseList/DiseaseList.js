import React, { useState } from "react";
import classes from "./List.module.css";
import DiseaseItem from "./DiseaseItem/DiseaseItem";
import Modal from "../Modal/Modal";

const DiseaseList = (props) => {
  const [item, setItem] = useState();

  return (
    <div className={classes.Outer}>
      <h1 style={{ marginTop: "2rem", color: "var(--blue-color)" }}>
        Diseases
      </h1>
      <div className={classes.List}>
        {props.data.map((item) => (
          <DiseaseItem
            key={item.id}
            item={item}
            onClick={() => setItem(item)}
            onClose={() => setItem("")}
          />
        ))}
      </div>
      {item && <Modal item={item} onClose={() => setItem("")} />}
    </div>
  );
};

export default DiseaseList;
