import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./CharacterCard.css";
import Heart from "../Heart/Heart";

const CharacterCard = ({ character, onClick }) => {
  const { darkTheme } = useContext(ThemeContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = (favorite) => {
    setIsLiked(!isLiked);
    onClick();
  };

  return (
    <div className={`CharacterCard ${darkTheme ? "dark" : "light"}`}>
      <div className="Header">
        <h2 key={character.id}>{character.name}</h2>
        <Heart isLiked={isLiked} onClick={handleClick} darkTheme={darkTheme} />
      </div>
      <img src={character.image} alt="" className="Image" />
    </div>
  );
};

export default CharacterCard;
