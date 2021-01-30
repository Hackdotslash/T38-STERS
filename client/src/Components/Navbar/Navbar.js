import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedkit,
  faHome,
  faClinicMedical,
} from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
  return (
    <ul className={classes.Nav}>
      <li>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          to="/"
        >
          <span style={{ color: "var(--white-color)", fontSize: 24 }}>
            <FontAwesomeIcon icon={faHome} />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/camps">
          <span style={{ color: "var(--white-color)", fontSize: 24 }}>
            <FontAwesomeIcon icon={faMedkit} />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/hospitals">
          <span style={{ color: "var(--white-color)", fontSize: 24 }}>
            <FontAwesomeIcon icon={faClinicMedical} />
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default navbar;
