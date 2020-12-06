import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Switch from "../../commons/Switch/Switch";
import "./Header.css";
const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="HeaderContainer">
      <h1>Rick & Morty</h1>
      <Switch onClick={handleClick} />
    </div>
  );
};

export default Header;
