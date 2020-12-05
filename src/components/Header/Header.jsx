import React, { useState, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Switch from "../../commons/Switch/Switch";
import "./Header.css";
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="Header">
      <h1>Rick & Morty</h1>
      <Switch onClick={handleClick} />
    </div>
  );
};

export default Header;
