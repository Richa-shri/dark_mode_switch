import React from "react";
import "./index.scss";
import Light from "./light_mode.svg";
import Dark from "./dark_mode.svg";

const DarkModeSwitch = ({ onChange, checked }) => {
  return (
    <div>
      <i className="dark"></i>
      <input
        type="checkbox"
        className="checkbox_theme"
        id="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor="checkbox" className="label_theme">
        <Light className="light" />
        <Dark className="dark" />
        <div className="ball_theme" />
      </label>
    </div>
  );
};

export default DarkModeSwitch
