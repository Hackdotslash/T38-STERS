import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Modal.module.css";

const Modal = ({ item, onClose }) => {
  return (
    <div className={classes.Backdrop} onClick={onClose}>
      <div className={classes.Modal}>
        <div
          style={{
            display: "flex",
            marginBottom: "1rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={item.icon} color={item.color} />
          <p style={{ marginLeft: "1rem" }}>{item.name}</p>
        </div>
        <p style={{ marginBottom: "1rem" }}>{item.description}</p>
        <ul>
          {item.symptoms.map((symptom, index) => (
            <li key={index} style={{ listStylePosition: "inside" }}>
              {symptom}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
