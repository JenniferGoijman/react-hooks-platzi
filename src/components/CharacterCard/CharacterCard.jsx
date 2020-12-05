import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={`CharacterCard ${darkTheme ? "dark" : "light"}`}>
      <h2 key={character.id}>{character.name}</h2>
      <img src={character.image} alt=""></img>
    </div>
  );
};

export default CharacterCard;
