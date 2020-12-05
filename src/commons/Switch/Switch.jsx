import React, { useState } from "react";
import "./Switch.css";

const Switch = ({ onClick }) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
    onClick(!checked);
  };
  return (
    <div className={`switch ${checked ? "on" : "off"}`} onClick={handleClick}>
      <div className="button"></div>
    </div>
  );
};

export default Switch;
